const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
  
  // header container
  ScrollReveal().reveal(".header-container h1", {
    ...scrollRevealOption,
  });
    
  ScrollReveal().reveal(".header-form", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  // trending container
  ScrollReveal().reveal(".trending-card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // destination container
  ScrollReveal().reveal(".destination-card", {
    duration: 1000,
    interval: 500,
  });
  
  // seller container
  ScrollReveal().reveal(".seller-card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // guide container
  ScrollReveal().reveal(".guide-card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  //  client container
  ScrollReveal().reveal(".client-card", {
    ...scrollRevealOption,
    interval: 500,
  });