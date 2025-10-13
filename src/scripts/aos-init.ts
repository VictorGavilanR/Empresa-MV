// src/scripts/aos-init.ts
import AOS from "aos";
import "aos/dist/aos.css";

function boot() {
  AOS.init({
    once: true,
    duration: 600,
    easing: "ease-out",
    offset: 80,
  });
}

// 1) carga inicial
boot();

// 2) si usas View Transitions / navegación parcial de Astro, refresca:
document.addEventListener("astro:page-load", () => AOS.refresh());
document.addEventListener("astro:after-swap", () => AOS.refreshHard());
