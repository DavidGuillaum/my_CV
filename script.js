const allLinks = document.querySelectorAll("nav a");

allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        console.log(`Clicked link: ${link.href}`);
    });
});





