const headerElement = document.querySelector("header");
const footerElement = document.querySelector("footer");

const fetchHeader = async () => {
    try {
        const res = await fetch("./partials/header.html");
        const template = await res.text();

        headerElement.innerHTML = template;

        let animating = false;
        let rh3dlogo = document.getElementById('rh-3d-logo');

        rh3dlogo.addEventListener('click', () => {
            if (!animating) {
                animating = true;
                rh3dlogo.classList.add('animate');
                setTimeout(() => {
                    animating = false;
                    rh3dlogo.classList.remove('animate');
                }, 1000);
            }

        });

        function getCurrentPage() {
            // Get the current page URL
            const url = window.location.href;

            // Split the URL by '/' and get the last part
            let lastPart = url.split('/').filter(part => part !== "").pop();

            // Remove the ".html" extension if it exists
            if (lastPart.endsWith('.html')) {
                lastPart = lastPart.slice(0, -5);
            }

            return lastPart;
        }
        const elements = document.querySelectorAll('.rh-current-page');
        elements.forEach(element => {
            element.classList.remove('rh-current-page');
        });

        switch (getCurrentPage()) {
            case "nosotros":
                document.getElementById('rh-nav-about').classList.add('rh-current-page');
                break;
            case "planes":
            case "eventos":
                document.getElementById('rh-nav-activities').classList.add('rh-current-page');
                break;
            case "#":
            default:
                document.getElementById('rh-nav-home').classList.add('rh-current-page');
                break;
        }


    } catch (err) {
        console.log(err);
    }
};

const fetchFooter = async () => {
    try {
        const res = await fetch("./partials/footer.html");
        const template = await res.text();

        footerElement.innerHTML = template;
    } catch (err) {
        console.log(err);
    }
};

fetchHeader();
fetchFooter();

