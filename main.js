import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import locationWithoutLogo from "./assets/location_without_logo.png";
import locationWithLogo from "./assets/location_with_logo.png";
import logo from "./assets/logo.png";

function scroll() {
  window.scroll({
    top: windowHeight,
    left: 0,
    behavior: "smooth",
  });
}

let btnScroll = document.querySelector(".btn-scroll");
btnScroll.addEventListener("click", scroll);

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

gsap.to(".btn-scroll", {
  scrollTrigger: {
    trigger: ".container-showcase-info-1",
    start: "top center",
    end: "center bottom",
    toggleActions: "reverse"
},
  opacity: 0,
  ease: "power1.out",
});

gsap.from(".hero-title", {
  y: "50%",
  duration: 1,
  opacity: 0,
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
      scrollImage.src = locationWithoutLogo;
    } else if (scrollPosition >= 2*windowHeight && scrollPosition < 3*windowHeight) {
      scrollImage.src = logo;
    } else if (scrollPosition >= 3*windowHeight) {
      scrollImage.src = locationWithLogo;
    }
    // Add more conditions for additional scroll positions as needed
  });
