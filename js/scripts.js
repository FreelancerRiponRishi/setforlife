(function($){
	$(document).ready(function() {	
		
		//slider1
        $(document).ready(function () {
            const $slider = $(".slider1");

            $slider.owlCarousel({
                margin: 25,
                autoplay: false,
                loop: true,
                nav: false,
                dots: true,
                autoplayTimeout: 6000,
                responsive: {
                    0: { items: 1 },
                    576: { items: 1 },
                    767: { items: 1 },
                    991: { items: 1 }
                }
            });

            // Custom navigation
            $('.customNextBtn1').click(function () {
                $slider.trigger('next.owl.carousel');
            });

            $('.customPrevBtn1').click(function () {
                $slider.trigger('prev.owl.carousel', [300]);
            });

            // Slide count update
            const totalSlides = $slider.find('.owl-item:not(.cloned)').length;

            function updateSlideNumber(event) {
                const currentIndex = (event.item.index - event.relatedTarget._clones.length / 2) % totalSlides + 1;
                const displayIndex = currentIndex <= 0 ? totalSlides : currentIndex;
                $('.num').text(`${displayIndex}/${totalSlides}`);
            }

            $slider.on('changed.owl.carousel initialized.owl.carousel', updateSlideNumber);

            // Trigger count on load
            $slider.trigger('initialized.owl.carousel');
        });

		
		
		
		
		
		
	});
})(jQuery);