function replaceCursorWithSVG(svgRight, svgLeft) {
        // Créer le conteneur pour le SVG du curseur
        const cursorContainer = document.createElement('div');
        cursorContainer.setAttribute('id', 'cursor-container');
        cursorContainer.style.position = 'fixed';
        cursorContainer.style.pointerEvents = 'none';
        document.body.appendChild(cursorContainer);
      
        // Créer l'élément <img> pour le SVG du curseur droit
        const cursorRight = document.createElement('img');
        cursorRight.setAttribute('src', svgRight);
        cursorRight.style.display = 'none';
        cursorContainer.appendChild(cursorRight);
      
        // Créer l'élément <img> pour le SVG du curseur gauche
        const cursorLeft = document.createElement('img');
        cursorLeft.setAttribute('src', svgLeft);
        cursorLeft.style.display = 'none';
        cursorContainer.appendChild(cursorLeft);
      
        // Ajouter un écouteur d'événement pour détecter les mouvements de la souris
        document.addEventListener('mousemove', function(event) {
          const x = event.clientX;
          const midScreen = window.innerWidth / 2;
      
          // Afficher le SVG du curseur droit si la souris est à droite de l'écran
          if (x > midScreen) {
            cursorRight.style.display = 'block';
            cursorLeft.style.display = 'none';
            cursorContainer.style.left = x + 'px';
          }
          // Afficher le SVG du curseur gauche si la souris est à gauche de l'écran
          else {
            cursorRight.style.display = 'none';
            cursorLeft.style.display = 'block';
            cursorContainer.style.left = x + 'px';
          }
        });
      }

      replaceCursorWithSVG('images/cursor-right.svg', 'images/cursor-left.svg');




//       draggable carousel:

        // var draggable = new Draggable(stage, {
        //   type: "rotation",
        //   throwProps: true,
        //   inertia: true,
            
        //   onDragStart: function() {
              
        //       // Désactiver l'animation des boîtes pendant le glisser-déposer
        //       boxes.each(function(index, element) {
        //           TweenLite.killTweensOf(element);
        //       });
        //   },
        //   onDrag: function() {
        //       stage.css("transform", "rotate(0)");
        //       var rotation = draggable.rotation;
              
  
        //       if (preRotation < rotation){
        //           boxes.each(function(index, element) {
        //             TweenLite.set(element, { rotationY:"-=2" });
        //           });
        //       }else{
        //           boxes.each(function(index, element) {
        //               TweenLite.set(element, { rotationY:"+=2" });

        //           });
        //       }
        //       preRotation = rotation;
             
        //       },

        //       onDragEnd: function() {
                
                            
        // }
        // });

      