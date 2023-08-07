/* -----------------------------
    Observer for Navigation Bar
----------------------------- */
if (window.matchMedia("(min-width:994px)").matches) {
    const header = document.querySelector('header');
    const sitelogo = document.querySelector('.site-logo');
    const homeSection = document.querySelector('.home');
    const topbutton = document.querySelector('.topbutton');

    const SectionOptions = {
        rootMargin: "-200px 0px 0px 0px"
    };


    const SectionObserver = new IntersectionObserver(function (entries, SectionObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
                sitelogo.classList.add("site-logo-scrolled");
                topbutton.classList.remove("topbuttonHideAnim");
            }
            else {
                header.classList.remove("nav-scrolled");
                sitelogo.classList.remove("site-logo-scrolled");
                topbutton.classList.add("topbuttonHideAnim");

            }
        })
    }, SectionOptions);

    SectionObserver.observe(homeSection);
}
