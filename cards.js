document.addEventListener('DOMContentLoaded', function() {

        var wrapperButton = this.documentElement.querySelector('.wrapper-button-gravity');
        var btn = document.querySelector('.button-gravity');
        var shadowGravity = document.querySelector('.shadow-button-gravity');

        wrapperButton.addEventListener('mousemove', (event)=> {
                // Récupère les informations de la position et de la taille du bouton
                const rect = btn.getBoundingClientRect();    
                console.log('rect=', rect);

                const largeur = rect.width / 2;
                const hauteur = rect.height /2;
          
                // Calcule les coordonnées x et y relatives au centre du bouton
                const x = event.clientX - rect.left - largeur;
                const y = event.clientY - rect.top - hauteur;
                console.log('x=', x);
                console.log('y=', y);



                const tx = x;
                const ty = y; 


                 // Applique les valeurs de translation sur les propriétés CSS personnalisées (--tx et --ty) du bouton
                btn.style.setProperty('--tx', `${tx}px`);
                btn.style.setProperty('--ty', `${ty}px`);

                shadowGravity.style.setProperty('--tx', `${-tx/2}px`);
                shadowGravity.style.setProperty('--ty', `${-ty/2}px`);



 
        });


        // Écouteur d'événement lorsque la souris quitte le bouton
        wrapperButton.addEventListener('mouseleave', (e) => {
                
                // Réinitialise les valeurs de translation et d'opacité à leurs valeurs par défaut
                console.log('ciao!')
                btn.style.setProperty('--tx', '0px');
                btn.style.setProperty('--ty', '0px');
                shadowGravity.style.setProperty('--tx', `0px`);
                shadowGravity.style.setProperty('--ty', `0px`);
                btn.style.setProperty('--opacity', `${0.6}`);
                shadowGravity.style.setProperty('--opacity', `${0}`);
                });



});

