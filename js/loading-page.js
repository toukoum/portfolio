
document.addEventListener('DOMContentLoaded', function() {
        const tl = gsap.timeline();

        tl.from(".up-left", {
                width:"700px",
                x: -1700,
                duration: 2,
                // delay:2,
                ease: "back.out(2)"
        
        });
        tl.from(".up-right", {
                width:"700px",
                x: 1000,
                y:-163,
                duration: 2,
                // delay:2,
                ease: "back.out(2)"
        },
        0,
        );
        tl.from(".down-left", {
                height:"800px",
                y: 800,
                duration: 2,
                // delay:2,
                ease: "back.out(2)"
        },
        0,
        );
        tl.from(".down-right", {
                height:"800px",
                y: 800,
                duration: 2,
                // delay:2,
                ease: "back.out(2)"
        },
        0,
        );
        tl.fromTo(".toukoum-title", 
        {opacity: 0,
        y:60,
        },
        {
                opacity:1,
                y: 80,
                duration: .6,
                ease: "power2.out"
        },
        ">-0.1 ",
        );

        tl.to(".loading-page-wrapper", {
               opacity:0,
               backgroundColor:"none",
                duration: 1,
                onComplete: function() {
                        // Cacher l'élément après l'animation
                        gsap.set(".loading-page-wrapper", {
                          display: "none"
                        });
                },
                ease: "expo.out"
                        }, ">+0.5"
        );
});
