AOS.init({
    duration: 1200,
})


function loadCarousel() {


    const myCarousel = document.getElementById("carouselExampleCaptions");
    const carouselIndicators = myCarousel.querySelectorAll(
        ".carousel-indicators button span"
    );
    let intervalID;

    const carousel = new bootstrap.Carousel(myCarousel);

    window.addEventListener("load", function () {
        fillCarouselIndicator(1);
    });

    myCarousel.addEventListener("slide.bs.carousel", function (e) {
        let index = e.to;
        fillCarouselIndicator(++index);
    });

    function fillCarouselIndicator(index) {
        let i = 0;
        for (const carouselIndicator of carouselIndicators) {
            carouselIndicator.style.width = 0;
        }
        clearInterval(intervalID);
        carousel.pause();

        intervalID = setInterval(function () {
            i++;

            myCarousel.querySelector(".carousel-indicators .active span").style.width =
                i + "%";

            if (i >= 100) {
                // i = 0; -> just in case
                carousel.next();
            }
        }, 100);
    }

}

