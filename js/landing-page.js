document.addEventListener('DOMContentLoaded', function() {

        // gsap.registerPlugin(ScrollTrigger)



        gsap.to(".image-pdp",
         {
                scrollTrigger:{
                        trigger: ".wrapper-image-pdp",
                        // markers:true,
                        start: "top 40%",
                        toggleActions: "play none none reverse",
                        scrub:1,
                },
               y:150,
               opacity:1,
        })


        gsap.from(".bottom-main", {
                scrollTrigger:{
                        trigger: ".wrapper-image-pdp",
                        // markers:true,
                        start: "top 10%",
                        toggleActions: "play none none reverse",
                },
                y:200,
                opacity:0,

        })

        gsap.to(".title", {
                scrollTrigger:{
                        trigger: ".wrapper-image-pdp",
                        // markers:true,
                        start: "top 40%",
                        toggleActions: "play none none reverse",
                        scrub:1,
                },
                y:-100,

        })

        gsap.from(".wrapper-image-pdp", {
                scrollTrigger:{
                        trigger: ".wrapper-image-pdp",
                        // markers:true,
                        start: "top 40%",
                        toggleActions: "play none none reverse",
                        // scrub:1,
                },
                opacity:0.3,
                duration:.5,
                ease:"power4.out"

        })


        gsap.to(".wrapper-image-pdp", {
                scrollTrigger:{
                        trigger: ".wrapper-image-pdp",
                        // markers:true,
                        start: "top 40%",
                        toggleActions: "play none none reverse",
                        scrub:1,
                },
                css:{
                        "border-radius":"5",
                        "transform":"translateY(-400)",
                        // "opacity":"1",
                        // "background": "linear-gradient(360deg, #7F7FD5 0%, #86A8E7 27.6%, #78CAC4 62.5%, #FFFFFF 85.94%)",
                },

                

        })

        gsap.to(".wrapper-image-pdp-mask",

        {
                scrollTrigger:{
                        trigger: ".wrapper-image-pdp",
                        // markers:true,
                        start: "top 40%",
                        toggleActions: "play none none reverse",
                        scrub:.7,
                },
                css:{
                        "border-radius":"5",
                        "transform":"translateY(-400)",
                },
                

        })


        
        var surTexts = document.querySelectorAll('.sur-text');
        
        surTexts.forEach((surText) => {
                ScrollTrigger.create({
                        trigger: surText,
                        start: "top 60%",
                        // markers:true,
                        toggleClass: "sur-text-active",
                        toggleActions: "play none none reverse",        
                      });
        });




});
