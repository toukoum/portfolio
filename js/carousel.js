$(window).on("load", function() {
  function isMobile(){
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)))
}

// console.log("bonjour", isMobile())

if(!isMobile())
{


  gsap.registerPlugin(ScrollTrigger)


    // Sélection des éléments nécessaires
    var boxes = $(".box"),
      stage = $(".stage"), 
      demo =$(".demoWrapper ")
  
    // Configuration de la scène en utilisant TweenLite
    TweenLite.set(stage, {
      css: {
        perspective: 800, // Définit la perspective de la scène 3D
        transformStyle: "preserve-3d" // Définit le style de transformation 3D
      }
    });
  
    var rotations = []; // Variable pour stocker les rotations actuelles
    var tweenClc = '';





 // ======================================
// Animation de la rotation des box sans y toucher + accélération avec scroll (ScrollTrigger)
// ======================================

    boxes.each(function(index, element) {


    
      TweenLite.set(element, {
        css: {
          rotationY: (index * 360 / 5)+72, // Définit la rotation horizontale en degrés pour chaque boîte
          transformOrigin: "50% 50% -350" // Définit l'origine de transformation 3D
        }
      });
  

  
      rotations[index] = index * 360 / 5; // Enregistre la rotation initiale
      //console.log('rotation[index]=', rotations[index])
  
      var box1 = $("#box-1");
      var previousProgress = 0; // Stocke la valeur précédente de self.progress pour savoir si le scroll est vers le bas ou vers le haut
      var currentRotationBox = [];

  
      ScrollTrigger.create({
        trigger: box1, // Déclencheur pour l'animation
        start: "top 95%", // Point de départ de l'animation lorsque le haut de la box1 atteint 95% de la fenêtre (ca part du haut)
        end: "bottom+=1000 5%", // Point de fin de l'animation lorsque le bas de l'élément atteint 5% de la fenêtre
        // markers: true,
  
        onUpdate: function(self) { // Fonction de mise à jour pendant le défilement
          var progress = self.progress; // Récupère la progression du défilement (0 - 1)
          // console.log(progress)
  
          // Détermine si le défilement se produit vers le haut ou vers le bas
          var scrollDirection = progress > previousProgress ? "down" : "up";
          previousProgress = progress; // Met à jour la valeur précédente de self.progress
          // console.log('scrolldir=', scrollDirection)
  
          // Calcule la vitesse de rotation en fonction de la progression du défilement
          var rotationSpeed = progress; // Par exemple, 1 + (0 * 4) = 1 (vitesse normale), 1 + (1 * 4) = 5 (vitesse accélérée)
  
          // accélération des box avec le scroll
          // TweenLite.to(element, 15, {
          //   css: {
          //     rotationY: (scrollDirection === "up" ? "+=" : "-=") + (360 *1.5) // Anime la rotation horizontale avec la vitesse calculée
          //   },
          //   ease: Linear.easeInOut 
          // });
  
          // Met à jour la rotation actuelle en fonction de la progression du défilement
          var currentRotation = rotations[index] + (360 * rotationSpeed);
          // console.log('currentrot[]=', currentRotation)
            
            // rotation de base des box (rotation à l'infinie)
            TweenLite.to(element, 60, {
              css: {
                z: 0.01, // Définit la profondeur de chaque boîte
                rotationY: (scrollDirection === "down" ? currentRotation - 1000 : currentRotation + 500) // Anime la rotation horizontale de chaque boîte
              },
              repeat: -1, // Répétition infinie de l'animation
              ease: Linear.easeNone, // Animation linéaire sans accélération
            });


        // ======================================
        // animation des box pour qu'elle se déplace de tornade en carousel
        // ======================================


          // Tableau des données pour chaque boîte
          var boxData = [
            { id: "#box-1", y: 885 },
            { id: "#box-2", y: 665 },
            { id: "#box-3", y: 445 },
            { id: "#box-4", y: 225 }
          ];

          // Utilisation d'une boucle pour créer les animations pour chaque boîte
    

         
        for (var i = 0; i < boxData.length; i++) {
          var data = boxData[i];

          gsap.to(data.id, {
            scrollTrigger: {
              trigger: "#box-1", // Utilise l'ID spécifique de chaque boîte comme déclencheur
              start: "top 40%",
              end: "top 25%",
              scrub: 2,
              // once: true,
              toggleAction: "play none none reverse"
            },
            y: data.y,
            ease: "none"
          });
        }  
        
        }
      });
    });








// ======================================
// déplacement du carousel en cliquant soit à droite soit à gauche de la scène stage
// ======================================

  cursorContainers = document.querySelectorAll('.wrapperCursor');


  
  var isAnimating = false; // Variable pour suivre l'état de l'animation



  
  cursorContainers.forEach(cursorContainer => {
    cursorContainer.addEventListener("mouseenter", ()=> {
      replaceCursorWithSVG('images/arrow-right.png', 'images/arrow-left.png');
  
      cursorContainer.style.cursor = "none";
      console.log('hovvver');
    });
  
    cursorContainer.addEventListener("mouseleave", ()=> {
      deleteCursor();
    });




      cursorContainer.addEventListener("click", function(event) {

        if (isAnimating) {
          return; // Si l'animation est en cours, ignorer le clic
        }
    
        console.log('click on wrapper !');
        const x = event.clientX;
        const midScreen = window.innerWidth / 2;
    
    
        var box1 = document.querySelector("#box-1");
        var prepreprerotationY = box1.style.transform;
        // var rotationY = Math.abs(((rotationNumber(prerotationY));
        var preprerotationY = parseFloat(rotationNumber(prepreprerotationY));
        var prerotationY = preprerotationY.toFixed(0);
        var rotationY = prerotationY%72;
    
    
    
    
        // j'en suis à régler le problème de l'alignement des box en degré, sinon presque tout fonctionne nickel!! 
        console.log('valeur absolue du degrès de la box 1 modulo 72 arrondi:', rotationY);
    
    
        if (x > midScreen) {
          currentRotation = -rotationY; // Met à jour la rotation actuelle pour une rotation vers la droite
          if (currentRotation == 0){
            currentRotation = -72;
          }
          console.log('déplacement vers la droite', currentRotation);
        } else {
          currentRotation = ((72 - rotationY)%72);// Met à jour la rotation actuelle pour une rotation vers la gauche
          if (currentRotation == 0){
            currentRotation = 72;
          }
          console.log('déplacement vers la gauche', currentRotation);
        }
    
        isAnimating = true; // Définir l'état de l'animation sur true
    
    
        boxes.each(function(index, element) {
          rotations[index] = index * 360 / 5; // Enregistre la rotation initiale
    
    
          TweenLite.killTweensOf(element, false, { rotationY: true });
    
          TweenLite.to(element, 1,{
            css: {
              rotationY: "+=" + currentRotation  // Utilise la rotation actuelle comme point de départ pour l'animation
            },
            ease: Power1.easeInOut, // Fonction d'interpolation pour l'animation
            onComplete: function() {
              isAnimating = false; // L'animation est terminée, rétablir l'état de l'animation à false
            }
          });
    
    
        });
    
      });
    
  });

  
  
  cursorContainersLeft = document.querySelector('#wrapperCursor-left');
  cursorContainersRight = document.querySelector('#wrapperCursor-right');
  arrowLeft = document.querySelector('#arrow-left');
  arrowRight = document.querySelector('#arrow-right');

  cursorContainersLeft.addEventListener("mouseenter", ()=>{
    arrowLeft.style.display = 'none';
  });

  cursorContainersRight.addEventListener("mouseenter", ()=>{
    arrowRight.style.display = 'none';
  
  }); 
  
  cursorContainersLeft.addEventListener("mouseleave", ()=>{
    arrowLeft.style.display = 'block';
  });
  
  cursorContainersRight.addEventListener("mouseleave", ()=>{
    arrowRight.style.display = 'block';
  
  });

  



  

// ======================================
// fonction qui renvoit la rotationY de la box 1
// ======================================

  function rotationNumber(transform) {
    // Recherche de la position de "rotate(" dans la chaîne de transformation
    var rotateIndex = transform.indexOf("rotateY(");
      // Extraire la partie de la chaîne après "rotate("
    var rotationPart = transform.slice(rotateIndex+8);

    
    // Rechercher la position de la parenthèse fermante ")"
    var closingParenthesisIndex = rotationPart.indexOf("deg");

    var currentRotation = rotationPart.slice(0, closingParenthesisIndex);
    console.log('currentRotation=', currentRotation)
      
    return currentRotation;
     
  }

  
  
  
  
  
  
// ======================================
// Pour changer la perspective 3d de la scène tweenlite quand les box sont en mode carousel
// ======================================

  var stage = document.querySelector('.stage')
  gsap.to(stage, {
    scrollTrigger: {
      trigger: "#box-5",
      start: "top 60%",
      end: "bottom 30%",
      // scrub: 1,
      // markers:true,
      toggleAction: "play none play none"
    },
    css: {
      "perspective": "+=10000",
    },
    duration: 2,
    ease: Power1.easeInOut,
  });






  // ======================================
// changement de la souris en arrow suivant si à gauche ou à droite
// ======================================


  function deleteCursor(){
    var cursor = document.getElementById('cursor-container');
    cursor.remove();  

  }


  function replaceCursorWithSVG(svgRight, svgLeft) {

    wrapperCursor = document.querySelector('.wrapperCursor');
    // Créer le conteneur pour le SVG du curseur
    const cursorContainer = document.createElement('div');
    cursorContainer.setAttribute('id', 'cursor-container');
    cursorContainer.style.position = 'absolute';
    cursorContainer.style.pointerEvents = 'none';
    wrapperCursor.appendChild(cursorContainer);
  
    // Créer l'élément <img> pour le SVG du curseur droit
    const cursorRight = document.createElement('img');
    cursorRight.setAttribute('src', svgRight);
    cursorRight.style.display = 'none';
    cursorRight.style.transition = "all .5s ease-in"

    cursorContainer.appendChild(cursorRight);
  
    // Créer l'élément <img> pour le SVG du curseur gauche
    const cursorLeft = document.createElement('img');
    cursorLeft.setAttribute('src', svgLeft);
    cursorLeft.style.display = 'none';
    cursorLeft.style.transition = "all .5s ease-in"
    cursorContainer.appendChild(cursorLeft);
  
    // Ajouter un écouteur d'événement pour détecter les mouvements de la souris
    document.addEventListener('mousemove', function(event) {
      const x = event.clientX;
      const y = event.clientY;
      const midScreen = window.innerWidth / 2;
      cursorContainer.style.top = y  - 100 + 'px' ;
      // cursorContainer.style.transform = `translateY(${y-120}px)`;




  
      // Afficher le SVG du curseur droit si la souris est à droite de l'écran
      if (x > midScreen) {
        cursorRight.style.display = 'block';
        cursorLeft.style.display = 'none';
        cursorContainer.style.left = x + 'px';
        // console.log('right')
      }
      // Afficher le SVG du curseur gauche si la souris est à gauche de l'écran
      else {
        cursorRight.style.display = 'none';
        cursorLeft.style.display = 'block';
        cursorContainer.style.left = x + 'px';
      }
    });


  }

// ========================================
  // scroll inversé quand mode carousel
// ========================================










    








};

});
  

