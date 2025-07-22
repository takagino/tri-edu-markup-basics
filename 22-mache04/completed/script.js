document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    class Inview {
        constructor() {
            this.els = document.querySelectorAll('[data-inview]');
            if (!this.els) return;
            this.init();
        }
        init() {
            this.els.forEach(el => {
                const type = el.dataset.inview;
                switch (type) {
                    case 'fade-left':
                    case 'fade-right':
                        this.inviewFadeSide(el);
                        break;
                    case 'fade-up':
                    case 'fade-down':
                        this.inviewFadeVertical(el);
                        break;
                }
            })
        }
        inviewFadeSide(el) {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
                onStart: () => {
                    gsap.to(el, {
                        x: 0, opacity: 1, duration: 0.6,
                        ease: Sine.easeOut,
                    })
                }
            })
        }
        inviewFadeVertical(el) {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
                onStart: () => {
                    gsap.to(el, {
                        y: 0, opacity: 1, duration: 0.6,
                        ease: Sine.easeOut,
                    })
                }
            })
        }
    }

    const inview = new Inview();
});