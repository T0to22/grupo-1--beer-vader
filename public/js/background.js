//CARGAR IMAGENES ASYNC
(() => {
	const objects = document.getElementsByClassName('background');
	Array.from(objects).map(item => {
		const img = new Image();
		img.src = item.dataset.src;

		console.log(img.src);

		img.onload = () => {
			item.classList.remove('background');
			return item.nodeName === 'IMG'
				? (item.src = item.dataset.src)
				: (item.style.backgroundImage = `url(${item.dataset.src})`);
		};
	});
})();
