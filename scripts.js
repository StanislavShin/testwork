$('.slider_button').on('click', function(e){
	e.preventDefault();

	var $this = $(this),
			container = $this.closest('.slider'),
			list = container.find('.slider_list'),
			item = list.find('.slider_item'),
			activeSlide = item.filter('.active'),
			prevSlide = activeSlide.prev(),
			nextSlide = activeSlide.next(),
			firstSlide = item.first(),
			lastSlide = item.last(),
			slideOffset = container.offset().left,
			reqPos = 0;

		if($this.hasClass('slider_btn-next')) {
			if(nextSlide.length){
				findReqPos(nextSlide);
			    addActiveClass(nextSlide);
			}else{
				findReqPos(firstSlide);
				addActiveClass(firstSlide);
			}
			
		}else{
			if(prevSlide.length){
				findReqPos(prevSlide);
				addActiveClass(prevSlide);
			}else{
				findReqPos(lastSlide);
				addActiveClass(lastSlide);
			}
			
		}
		list.css('left', '-=' + reqPos + 'px');

		function addActiveClass(reqSlide){
			reqSlide.addClass('active').siblings().removeClass('active');
		};
		function findReqPos(slide) {
			reqPos = slide.offset().left - slideOffset;
		};
	});

$(document).ready(function () {
	$('a[href^="#"]').bind("click", function (e) {
		e.preventDefault();

		var distanceScroll = $(this);
		$('html, body').stop().animate({
			scrollTop: $(distanceScroll.attr("href")).offset().top }, 1000);

	});
	return false;
});