document.addEventListener('DOMContentLoaded', function() {

        var wrapperButtons = this.documentElement.querySelectorAll('.wrapper-button-gravity');
        // console.log('nombre wrapper', wrapperButtons.length)
        var btns = document.querySelectorAll('.button-gravity');
        // console.log('nombre button', btns.length)

        // var shadowGravity = document.querySelector('.shadow-button-gravity');
        wrapperButtons.forEach((wrapperButton, index) => {


                wrapperButton.addEventListener('mousemove', (event)=> {
                        var btn = btns[index];
                        // console.log('index bouton=', index);

                        // Récupère les informations de la position et de la taille du bouton
                        
                        const rect = btn.getBoundingClientRect();    
                        // console.log('rect=', rect);
        
                        const largeur = rect.width / 2;
                        const hauteur = rect.height /2;
                        
                        // Calcule les coordonnées x et y relatives au centre du bouton
                        const x = event.clientX - rect.left - largeur;
                        const y = event.clientY - rect.top - hauteur;
                        // console.log('x=', x);
                        // console.log('y=', y);

                        const tx = x;
                        const ty = y; 
                        btn.style.setProperty('--tx', `${tx}px`);
                        btn.style.setProperty('--ty', `${ty}px`);

        
        
        
                       
        
        
                        //  // Applique les valeurs de translation sur les propriétés CSS personnalisées (--tx et --ty) du bouton
                        // btns.forEach((btn) =>{
                                
                
                        //         // shadowGravity.style.setProperty('--tx', `${-tx/2}px`);
                        //         // shadowGravity.style.setProperty('--ty', `${-ty/2}px`);
                        // });
        
        
        
         
                });
        
        
                // Écouteur d'événement lorsque la souris quitte le bouton
                wrapperButton.addEventListener('mouseleave', (e) => {
                        var btn = btns[index];

                        
                        // Réinitialise les valeurs de translation et d'opacité à leurs valeurs par défaut
                        
                        console.log('ciao!')
                        btn.style.setProperty('--tx', '0px');
                        btn.style.setProperty('--ty', '0px');
                        btn.style.setProperty('--opacity', `${0.6}`);
                        // shadowGravity.style.setProperty('--tx', `0px`);
                        // shadowGravity.style.setProperty('--ty', `0px`);
                        // shadowGravity.style.setProperty('--opacity', `${0}`);
                });
        });



});

