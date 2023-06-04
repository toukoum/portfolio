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
    const element2 = document.querySelector('.logo-bde'); 
    const element3 = document.querySelector('#section3'); 
    const element4 = document.querySelector('.hard-content'); 


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
            window.scrollBy(0, -800);
            
            setTimeout(() => {
              isScrolling = false;
            }, 100);
          }
        } else if (scrollTop === 0 && !isScrolling) {
          isScrolling = true;
          document.documentElement.style.scrollBehavior = 'auto';
          // Ou pour le <body>
          document.body.style.scrollBehavior = 'auto';
          
          headerElement.scrollIntoView();
          window.scrollBy(0, 50);
          
          setTimeout(() => {
            isScrolling = false;
          }, 100);
        }
      }
        
      
      // Événement de scroll pour détecter la position de défilement
      window.addEventListener('scroll', detectScrollPosition);





      // pour les images qui peuvent s'agrandir

      const images = document.querySelectorAll('.zoomable-image');

    images.forEach(image => {
      image.addEventListener('click', () => {
        // Créer l'élément de l'image agrandie
        const zoomedImg = document.createElement('div');
        zoomedImg.classList.add('zoomed-image');

        // Créer l'élément de l'image agrandie à l'intérieur
        const zoomedImgContent = document.createElement('img');
        zoomedImgContent.src = image.src;
        zoomedImgContent.alt = image.alt;

        // Ajouter l'image agrandie à la page
        zoomedImg.appendChild(zoomedImgContent);
        document.body.appendChild(zoomedImg);

        // Supprimer l'image agrandie lorsqu'elle est cliquée
        zoomedImg.addEventListener('click', () => {
          zoomedImg.remove();
        });
      });
    });




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
  let calcShadowX = (x - halfWidth) / 3;
  let calcShadowY = (y - halfHeight) / 3;
  
  // Add a filter shadow - this is more performant to animate than a regular box shadow.
  item.style.filter = `drop-shadow(${-calcShadowX}px ${calcShadowY}px 10px ${dropShadowColor})`;
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


//   // Importe les fonctions nécessaires de la bibliothèque GreenSock
// const { gsap, ScrollTrigger } = window;

// // Désactive le comportement par défaut de ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// // Sélectionne les éléments que tu souhaites animer
// const section1 = document.querySelector('#section1');
// const section2 = document.querySelector('#section2');

// // Crée l'animation pour la première section
// const section1Animation = gsap.timeline({
//   scrollTrigger: {
//     trigger: section1,
//     start: 'center center',
//     end: 'center top',
//     toggleActions: 'play none none reset',
//   },
// });

// section1Animation.to(section1, {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
// });




gsap.registerPlugin(ScrollTrigger);

gsap.to("#title-wtf", {
  scrollTrigger: {
    pin:"#title-wtf",
    trigger: "#section1",
    pinSpacing: false,
    start: "center center", // Démarre l'animation lorsque l'élément est à 80% de la vue du navigateur
    end: "bottom 280", // Termine l'animation lorsque l'élément est à 20% de la vue du navigateur
    toggleClass: "active", // Ajoute la classe "active" lorsque l'animation est déclenchée
    markers: false // Affiche les marqueurs de déclenchement pour le débogage
  }
});

gsap.to("#section1", {
  scrollTrigger: {
    background:"red",

    pin:true,
    trigger: "#section1",
    start: "center center", // Démarre l'animation lorsque l'élément est à 80% de la vue du navigateur
    end: "bottom 280", // Termine l'animation lorsque l'élément est à 20% de la vue du navigateur
    toggleClass: "active", // Ajoute la classe "active" lorsque l'animation est déclenchée
    markers: false // Affiche les marqueurs de déclenchement pour le débogage
  }
  
});



// animation section skill line

gsap.to('.text-skill', {
  duration:4,
  scrollTrigger: {
    trigger: ".text-skill", 
    start: "top 80%",
    end: "+=1000 top ",
    scrub : 3,
    toggleClass:"active-skill",
    },
})

gsap.to('.text-skill2', {
  duration:4,
  scrollTrigger: {
    trigger: ".text-skill2", 
    start: "top 80%",
    end: "+=1000 top ",
    scrub : 3,
    toggleClass:"active-skill",
    markers: false,},
})

gsap.to('.text-skill3', {
  duration:4,
  scrollTrigger: {
    trigger: ".text-skill3", 
    start: "top 80%",
    end: "+=1000 top ",
    scrub : 3,
    toggleClass:"active-skill",
    markers: false,},
})

gsap.to('.text-skill4', {
  duration:4,
  scrollTrigger: {
    trigger: ".text-skill4", 
    start: "top 80%",
    end: "+=1000 top ",
    scrub : 3,
    toggleClass:"active-skill",
    markers: false},
})



// progress bar

gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.8 }
});


})