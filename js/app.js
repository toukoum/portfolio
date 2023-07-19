
document.addEventListener('DOMContentLoaded', function() {
  



  // const listlink = document.querySelectorAll('.link-header')
    const listItems = document.querySelectorAll('.list');
    listItems[0].classList.add('active-li');


    function activeLink() {
      listItems.forEach((item) => {
        item.classList.remove('active-li');
      });

      this.classList.add('active-li');
    }

    listItems.forEach((item) => {
      item.addEventListener('click', activeLink);
    });

    // pour les seuil de section du site web
    const element = document.querySelector('.description'); 
    const element2 = document.querySelector('.work-section'); 
    const element3 = document.querySelector('#section3'); 
    const element4 = document.querySelector('#contact-section-limit'); 


    window.addEventListener('scroll', () => {
      const elementHeight = element.offsetHeight;
      const elementOffsetTop = element.offsetTop;
      const scrollPosition = window.scrollY;


      const elementHeight2 = element2.offsetHeight;
      const elementOffsetTop2 = element2.offsetTop;

      const elementHeight3 = element3.offsetHeight;
      const elementOffsetTop3 = element3.offsetTop;

      const elementHeight4 = element4.offsetHeight;
      const elementOffsetTop4 = element4.offsetTop;


      if (scrollPosition < elementOffsetTop + elementHeight) {
        // section about
        listItems.forEach((item) => {
          item.classList.remove('active-li');
        });
  
        listItems[0].classList.add('active-li');
      }else if (scrollPosition > elementOffsetTop + elementHeight  && scrollPosition < elementOffsetTop2 + elementHeight2 ) {

        // section work
        listItems.forEach((item) => {
          item.classList.remove('active-li');
        });
  
        listItems[1].classList.add('active-li');
      } else if (scrollPosition > elementOffsetTop2 + elementHeight2 && scrollPosition < elementOffsetTop3 + elementHeight3) {
        // section education
        listItems.forEach((item) => {
          item.classList.remove('active-li');
        });
  
        listItems[2].classList.add('active-li');
      } else if ((scrollPosition > elementOffsetTop3 + elementHeight3) && (scrollPosition < elementOffsetTop4 + elementHeight4)) {
        
        // section skill 
        listItems.forEach((item) => {
          item.classList.remove('active-li');
        });
  
        listItems[3].classList.add('active-li');
      }else if (scrollPosition > elementOffsetTop4 + elementHeight4) {
        // section contact
        listItems.forEach((item) => {
          item.classList.remove('active-li');
        });
  
        listItems[4].classList.add('active-li');
      }



      });




      let isScrolling = false;

      function detectScrollPosition() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const footerElement = document.querySelector('#section-about');
        const headerElement = document.querySelector('.last-element');
        document.documentElement.style.scrollBehavior = 'smooth';
        // Ou pour le <body>
        document.body.style.scrollBehavior = 'smooth';
        
        if (scrollTop + windowHeight >= documentHeight - 200) {
          // L'utilisateur a atteint le bas de la page, revenir au début
          // Pour l'élément HTML
          document.documentElement.style.scrollBehavior = 'auto';
          // Ou pour le <body>
          document.body.style.scrollBehavior = 'auto';
          
          if (!isScrolling) {
            isScrolling = true;
            footerElement.scrollIntoView();
            window.scrollBy(0, 0);
            
            setTimeout(() => {
              isScrolling = false;
            }, 100);
          }
        // } else if (scrollTop === 0 && !isScrolling) {
        //   isScrolling = true;
        //   document.documentElement.style.scrollBehavior = 'auto';
        //   // Ou pour le <body>
        //   document.body.style.scrollBehavior = 'auto';
          
        //   headerElement.scrollIntoView();
        //   window.scrollBy(0, -50);
          
        //   setTimeout(() => {
        //     isScrolling = false;
        //   }, 100);
        }
      }
        
      
      // Événement de scroll pour détecter la position de défilement
      window.addEventListener('scroll', detectScrollPosition);



    // pour copier mon mail directos patos
const button = document.querySelector('.bouton-mail');
button.addEventListener('click', copyEmailToClipboard);

function copyEmailToClipboard() {
  console.log('le bouton à été cliqué')
  const emailElement = document.getElementById('mail-toukoum');
  const tempInput = document.createElement('input');
  tempInput.value = emailElement.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  const copyTextElement = document.getElementById('copy-text');
  copyTextElement.textContent = 'Copied !';

  setTimeout(function() {
    copyTextElement.textContent = 'Copy';
  }, 2000); // Durée de 2000 millisecondes (2 secondes)
}






// pour les bouton 3D
let calculateAngle = function(e, item, parent) {
  let dropShadowColor = ` #7a7fa3`
  if(parent.getAttribute('data-filter-color') !== null) {
      dropShadowColor = parent.getAttribute('data-filter-color');
  }

  // Get the x position of the users mouse, relative to the button itself
  let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
  // Get the y position relative to the button
  let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

  // Calculate half the width and height
  let halfWidth  = item.getBoundingClientRect().width / 2;
  let halfHeight = item.getBoundingClientRect().height / 2;

  // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
  // Changing these numbers will change the depth of the effect.
  let calcAngleX = (x - halfWidth) / 26;
  let calcAngleY = (y - halfHeight) / 4;

  // Set the items transform CSS property
  item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${calcAngleY}deg) scale(1.15)`;
  
  // And set its container's perspective.
  parent.style.perspective = `${halfWidth * 2}px`
  item.style.perspective = `${halfWidth * 3}px`

  if(parent.getAttribute('data-custom-perspective') !== null) {
      parent.style.perspective = `${parent.getAttribute('data-custom-perspective')}`
  }

  // Reapply this to the shadow, with different dividers
  let calcShadowX = (x - halfWidth) / 2;
  let calcShadowY = (y - halfHeight) / 2;
  
  // Add a filter shadow - this is more performant to animate than a regular box shadow.
  item.style.filter = `drop-shadow(${-calcShadowX}px ${calcShadowY}px 20px ${dropShadowColor})`;
}

let calculateAngleLite = function(e, item, parent) {
  let dropShadowColor = ` #7a7fa3`
  if(parent.getAttribute('data-filter-color') !== null) {
      dropShadowColor = parent.getAttribute('data-filter-color');
  }

  // Get the x position of the users mouse, relative to the button itself
  let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
  // Get the y position relative to the button
  let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

  // Calculate half the width and height
  let halfWidth  = item.getBoundingClientRect().width / 2;
  let halfHeight = item.getBoundingClientRect().height / 2;

  // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
  // Changing these numbers will change the depth of the effect.
  let calcAngleX = (x - halfWidth) / 26;
  let calcAngleY = (y - halfHeight) / 24;

  // Set the items transform CSS property
  item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${calcAngleY}deg) scale(1)`;
  
  // And set its container's perspective.
  parent.style.perspective = `${halfWidth * 10}px`
  item.style.perspective = `${halfWidth * 10}px`

  if(parent.getAttribute('data-custom-perspective') !== null) {
      parent.style.perspective = `${parent.getAttribute('data-custom-perspective')}`
  }

}

document.querySelectorAll('.button-3d').forEach(function(item) {
  item.addEventListener('mouseenter', function(e) {
      calculateAngle(e, this.querySelector('span'), this);
  });

  item.addEventListener('mousemove', function(e) {
      calculateAngle(e, this.querySelector('span'), this);
  });

  item.addEventListener('mouseleave', function(e) {
      let dropShadowColor = `#0000`
      if(item.getAttribute('data-filter-color') !== null) {
          dropShadowColor = item.getAttribute('data-filter-color')
      }
      item.querySelector('span').style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
      item.querySelector('span').style.filter = `drop-shadow(0 100px 100px ${dropShadowColor})`;
  });


  document.querySelectorAll('.button-3d-lite').forEach(function(item) {
      item.addEventListener('mouseenter', function(e) {
          calculateAngleLite(e, this.querySelector('span'), this);
      });
    
      item.addEventListener('mousemove', function(e) {
          calculateAngleLite(e, this.querySelector('span'), this);
      });
    
      item.addEventListener('mouseleave', function(e) {
          let dropShadowColor = `#0000`
          if(item.getAttribute('data-filter-color') !== null) {
              dropShadowColor = item.getAttribute('data-filter-color')
          }
          item.querySelector('span').style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
          item.querySelector('span').style.filter = `drop-shadow(0 100px 100px ${dropShadowColor})`;
      });
  
});



  // pour le header responsive

  const menuHamburger = document.querySelector(".hamburger-black")
  const menuHamburger2 = document.querySelector(".hamburger")
  const header = document.querySelector(".nav-bar")
  const logo = document.querySelector(".logo")
  const navLinks = document.querySelectorAll('.nav-bar nav a');
  menuHamburger2.style.display = "none";


  menuHamburger.addEventListener('click', ()=> {
    menuHamburger2.style.display = "block";
    header.classList.add('mobile-menu')
    menuHamburger.classList.add('mobile-hb')
    logo.classList.add('mobile-logo')
    document.body.classList.add('no-scroll');

  })

  menuHamburger2.addEventListener('click', ()=> {
    menuHamburger2.style.display = "none";
    header.classList.remove('mobile-menu')
    menuHamburger.classList.remove('mobile-hb')
    logo.classList.remove('mobile-logo')
    document.body.classList.remove('no-scroll');
  })

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuHamburger2.style.display = "none";
      header.classList.remove('mobile-menu')
      menuHamburger.classList.remove('mobile-hb')
      logo.classList.remove('mobile-logo')
      document.body.classList.remove('no-scroll');
    })
  })

  


});


  // =================================================
  // gsap animation 
  // =================================================


// text des section qui apparaît de façon stylé

let reveal = document.querySelectorAll(".title-section");

reveal.forEach((el) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: el,
			start: "top 100%", 
      toggleActions: "play none none reverse",
    },
  });

  timeline.from(el, {
    y: 250,
    opacity:.3,
    ease: "power4.out",
    delay:.5,
    skewY: 15,  
    duration:1.5,
    stagger: {
      amount: 0.5,
    },
  });
});







// animation section skill line

var textSkills = document.querySelectorAll('.text-skill');

textSkills.forEach((textSkill) => {
  gsap.to(textSkill, {
    duration:4,
    scrollTrigger: {
      trigger: textSkill, 
      start: "top 70%",
      scrub : 1,
      // markers:true,
      toggleClass:"active-skill",
      },
  })
  

})




// progress bar

gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.8 }
});






})









