playOnce = true;// Initialise un indicateur pour exécuter une action une seule fois.


window.addEventListener("scroll" , () => {// Écoute les événements de défilement sur la fenêtre.

    if(window.scrollY > 50){
        navbar.style.height = "45px";    // Réduit la hauteur de la barre de navigation si l'utilisateur a défilé plus de 50px.
    } else {
        navbar.style.height = "90px";// Augmente la hauteur de la barre de navigation si l'utilisateur est en haut de la page.
    }

    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;    // Calcule la proportion du document défilée par l'utilisateur.


    if(scrollValue > 0.45){
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "none";    // Si plus de 45% de la page est défilée, modifie l'opacité et la transformation d'une image.
    }

    if(scrollValue > 0.85 && playOnce ){    // Si plus de 85% de la page est défilée et si c'est la première fois, affiche un popup.
        popup.style.opacity = 1;
        popup.style.transform = "none";
        playOnce = false;// Assure que le popup ne s'affiche qu'une seule fois.
    }
});

// Ajoute un écouteur d'événement pour fermer le popup.

closeBtn.addEventListener ("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(500px)"
});

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
