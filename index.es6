try {
	// throw if the document does not support preload
	if (!document.createElement('link').relList.supports('preload')) {
		throw Error;
	}
} catch (error) {
	(() => {
		const selector = 'link[rel="preload"]';

		// iframe
		const iframe = document.createElement('iframe');

		iframe.style.cssText = 'display:none';

		iframe.src = 'javascript:false'; // eslint-disable-line no-script-url

		document.head.appendChild(iframe);

		const iframeWindow = iframe.contentWindow;
		const iframeDocument = iframeWindow.document;

		iframeDocument.close();

		iframeWindow.addEventListener('load', () => {
			// preload link[rel="preload"] by element
			const preloadLinkByElement = (element) => {
				const as = element.getAttribute('as');

				if (forward[as]) {
					forward[as](element);
				}
			};

			const forward = {
				// forward [rel="preload"][as="script"] load event
				script(element) {
					const onload = (event) => {
						preload.removeEventListener('load', onload);

						iframeDocument.head.removeChild(preload);

						element.dispatchEvent(new CustomEvent('load', event));
					};

					const preload = iframeDocument.createElement('script');

					preload.addEventListener('load', onload);

					preload.src = element.href;

					iframeDocument.head.appendChild(preload);
				},
				// forward [rel="preload"][as="style"] load event
				style(element) {
					const onload = (event) => {
						preload.removeEventListener('load', onload);

						iframeDocument.head.removeChild(preload);

						element.dispatchEvent(new CustomEvent('load', event));
					};

					const preload = iframeDocument.createElement('link');

					preload.addEventListener('load', onload);

					preload.href = element.href;

					preload.rel = 'stylesheet';

					iframeDocument.head.appendChild(preload);
				}
			};

			// preload link[rel="preload"] by mutations
			const preloadLinkByMutation = (mutations) => mutations.reduce(
				(nodes, mutation) => nodes.concat.apply(nodes, mutation.addedNodes),
				[]
			).reduce(
				(nodes, node) => nodes.concat.apply(
					nodes,
					node.matches && node.matches(selector) && node ||
					node.querySelectorAll && node.querySelectorAll(selector) || []
				),
				[]
			).forEach(preloadLinkByElement);

			// observe mutations
			new MutationObserver(preloadLinkByMutation).observe(
				document.documentElement,
				{
					childList: true,
					subtree: true
				}
			);

			// preload link[rel="preload"] by selector
			Array.prototype.forEach.call(
				document.documentElement.querySelectorAll(selector),
				preloadLinkByElement
			);
		});
	})();
}
