const scrollRevealOption = {
    distance:"60px",
    origin:"bottom",
    duration:1000,
};

//header
ScrollReveal().reveal(".header-container h1", scrollRevealOption);
ScrollReveal().reveal(".header-container h4", {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header-container .btn", {
    ...scrollRevealOption,
    delay:1000,
});

//about us
ScrollReveal().reveal(".about-container .section-header", scrollRevealOption);
ScrollReveal().reveal(".about-container .section-subheader", {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".about-container .about-flex", {
    ...scrollRevealOption,
    delay:750,
});
ScrollReveal().reveal(".about-container .btn", {
    ...scrollRevealOption,
    delay:1000,
});

//discover
ScrollReveal().reveal(".discover-card",{
    ...scrollRevealOption,
    interval:500,
});
ScrollReveal().reveal(".discover-card-content",{
    ...scrollRevealOption,
    interval:500,
    delay:200,
});
//blog
ScrollReveal().reveal(".blog-card",{
    ...scrollRevealOption,
    interval:500,
    delay:400,
});
ScrollReveal().reveal(".journels-card",{
    ...scrollRevealOption,
    interval:500,
    delay:400,
});
