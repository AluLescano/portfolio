const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navmenu');

if (window.matchMedia("(max-width:768px)").matches) {
    menuToggle.addEventListener('click', function (event) {
        event.preventDefault();
        navMenu.classList.toggle('show');
    });
}

/* -----------------------------
    Observer for Navigation Bar
----------------------------- */

const responsiveheader = document.querySelector('header');
const responsivehomeSection = document.querySelector('.home');
const responsivetopbutton = document.querySelector('.topbutton');

const responsiveSectionOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
if (window.matchMedia("(max-width:993px)").matches) {
    const responsiveSectionObserver = new IntersectionObserver(function (entries, SectionObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                responsivetopbutton.classList.remove("topbuttonHideAnimMobile");
            }
            else {
                responsivetopbutton.classList.add("topbuttonHideAnimMobile");

            }
        })
    }, responsiveSectionOptions);

    responsiveSectionObserver.observe(responsivehomeSection);
}
