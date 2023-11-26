import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
console.log("Plugin loaded")

gsap.to("#app", {
    scrollTrigger: {
        trigger: ".showcase",
        start: "top top",
        end: "bottom bottom",
        pin: ".container-showcase-image",
        toggleActions: "restart pause resume pause"
    },
  });

gsap.from(".hero-title", {
  x: "-100%",
  duration: 2,
  ease: "power1.out",
});

gsap.from(".btn-accent", {
  scale: 0.5,
  duration: 2,
  ease: "bounce"
});

gsap.from(".title-display", {
  scrollTrigger: {
    trigger: ".showcase",
    start: "bottom bottom",
    toggleActions: "restart pause resume pause"
  },
  scale: 0.5,
  duration: 1
});

gsap.from(".title-overview", {
  scrollTrigger: {
    trigger: ".displays",
    start: "bottom bottom",
    toggleActions: "restart pause resume pause"
  },
  scale: 0.5,
  duration: 1
});

gsap.from(".form-title", {
  scrollTrigger: {
    trigger: ".app-overview",
    start: "bottom bottom",
    toggleActions: "restart none none none"
  },
  x: "-100%",
  duration: 1
});

const scrollImage = document.getElementById('scrollImage');
const windowHeight = window.innerHeight;

window.addEventListener('scroll', function () {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Determine which image to show based on scroll position
    if (scrollPosition < 2*windowHeight) {
      scrollImage.src = "./assets/location_without_logo.png";
      console.log("image 1")
    } else if (scrollPosition >= 2*windowHeight && scrollPosition < 3*windowHeight) {
      scrollImage.src = "./assets/logo.png";
      console.log("image 2")
    } else if (scrollPosition >= 3*windowHeight) {
      scrollImage.src = "./assets/location_with_logo.png";
      console.log("image 3")
    }
    // Add more conditions for additional scroll positions as needed
  });
