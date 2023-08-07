/* -----------------------------
    Observer for Skill Bars
----------------------------- */

const skillbar1 = document.getElementById('html_circle');
const skillbar2 = document.getElementById('css_circle');
const skillbar3 = document.getElementById('js_circle');
const skillbar4 = document.getElementById('java_circle');
const skillbar5 = document.getElementById('python_circle');
const skillbar6 = document.getElementById('wordpress_circle');
const skillsSection = document.querySelector('.skills');

const skillSectionOptions = {
    rootMargin: "0px 0px 100px 0px"
};

const skillsSectionObserver = new IntersectionObserver(function (entries, skillsSectionObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            skillbar1.classList.remove("html_circle");
            skillbar2.classList.remove("css_circle");
            skillbar3.classList.remove("js_circle");
            skillbar4.classList.remove("java_circle");
            skillbar5.classList.remove("python_circle");
            skillbar6.classList.remove("wordpress_circle");
        }
        else {
            skillbar1.classList.add("html_circle");
            skillbar2.classList.add("css_circle");
            skillbar3.classList.add("js_circle");
            skillbar4.classList.add("java_circle");
            skillbar5.classList.add("python_circle");
            skillbar6.classList.add("wordpress_circle");
        }
    })
}, skillSectionOptions);

skillsSectionObserver.observe(skillsSection);