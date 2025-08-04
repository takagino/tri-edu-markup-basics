// overlay-script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-overlay');
    const nav = document.querySelector('.nav-overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');

        const isOpen = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isOpen);
        nav.setAttribute('aria-hidden', !isOpen);

        // メニューオープン時に背景スクロールを防止
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // ESCキーでメニューを閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
            nav.setAttribute('aria-hidden', true);
            document.body.style.overflow = '';
        }
    });

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