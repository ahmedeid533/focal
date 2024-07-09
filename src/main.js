// import Swiper bundle with all modules installed
const swiper = new Swiper('.swiper-container', {
	loop: true,
	watchSlidesProgress: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
});