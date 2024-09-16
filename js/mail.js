var mailbutton = document.getElementById("mailtoui-button");
mailbutton.addEventListener("mouseover", (event) => {
    event.target.setAttribute("href","mailto:");
});

mailbutton.addEventListener("mouseout", (event) => {
    event.target.setAttribute("href","mailto:");
});


