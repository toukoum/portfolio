document.addEventListener('DOMContentLoaded', function() {
        
        gsap.registerPlugin(ScrollTrigger);
        
        let section2 = document.querySelector(".section2");
        // console.log('bonjour', section2.offsetWidth);

        //scroll horizontall
        let scrollTween = gsap.to(section2, {
                xPercent: -45,
                scrollTrigger: {
                        start: "top -5%",
                        trigger: section2,
                        pin: true,
                        // markers:true,
                        scrub: 2,
                        // snap: 1/2,
                        end: "+=3500",
                }
        });


        var animatedLines = document.querySelectorAll('.line-skill');

        //agrandissement des lignes 

        animatedLines.forEach((animatedLine) => {
                gsap.from(animatedLine,              
                        {
                                scrollTrigger:{
                                        trigger:".line-skill-1",
                                        start: "top 70% ",
                                        // markers:true,
                                        toggleActions: "play none none reverse",
                                        // scrub:0.01,


                                },
                                css:{
                                        "font-size":".6rem",
                                        "opacity":"0",


                                },
                                duration:1,
                            
        
                        });
        });

        gsap.to(".line-skill-1",{
                scrollTrigger:{
                        trigger:".line-skill-1",
                        start:"+=400 65%",
                        end:"+=2200",
                        toggleActions:"play none none reverse",
                        scrub:2,


                },
                x:-500,
                y:500,
        })


        gsap.to(".line-skill-2",{
                scrollTrigger:{
                        trigger:".line-skill-1",
                        start:"+=400 65%",
                        end:"+=1000",
                        toggleActions:"play none none reverse",
                        scrub:2,
                        // markers:true,


                },
                x:300,
                y:-240,
        })



        });



