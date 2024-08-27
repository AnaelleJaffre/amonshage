
// Constantes _____________________________________________________

const listImg = [
    
    {
        src: "images/2023_finally-dom.jpg",
        title: "Dom",
        alt: "Young lady in the water with a dress.",
        date: 2023
    },
    {
        src: "images/11.07.24.jpg",
        title: "Sky High ✨",
        alt: "Young lady in the clouds, blue artwork.",
        date: 2024
    },
    {
        src: "images/2024_conte-de-fees.jpg",
        title: "Fééries",
        alt: "Young lady with red hair, flying on a flower.",
        date: 2024
    },
    {
        src: "images/2023_ummu-s-DTIYS.jpg",
        title: "Dark Angel",
        alt: "Black man with dark-blue wings,surrounded by dark-blue birds.",
        date: 2023
    },
    {
        src: "images/2024_edna-yuki.jpg",
        title: "Edna Yuki",
        alt: "Young blond manga ladyn flying in the sky, handling a spectrum, with white ribbons in the hair.",
        date: 2024
    },
    {
        src: "images/2024_na4.jpg",
        title: "Na4",
        alt: "Young, calm and wise-like lady with long clear green hair. She stands tall in the forest, overwhelmed by branches, yellow flowers and green leaves.",
        date: 2024
    },
    {
        src: "images/2023_helio.jpg",
        title: "Helio",
        alt: "Young, calm and wise-like blond boy, floating into a blue sky with clouds. He is wearing white and decorated clothes.",
        date: 2023
    },
    {
        src: "images/poulpie.jpg",
        title: "Poulpie",
        alt: "Young lady with mate skin, an orange and red hat, sat in a hammock, over a large white place with water, with bamboo around.",
        date: 2024
    },
    {
        src: "images/2021_cloudy-sky-background.jpg",
        title: "Cloudy background",
        alt: "Just a background with purple-blue clouds.",
        date: 2021
    },
    {
        src: "images/2021_that-s-up-to-u.jpg",
        title: "That's up to u",
        alt: "Young lady with sweet pink hair, sat in the air, looking down, with a green sweater.",
        date: 2021
    },
    {
        src: "images/2021_starrox-dtiys.jpg",
        title: "Starr0x's DTIYS (Instagram)",
        alt: "Manga girl all in purple, with long purple hair.",
        date: 2021
    },
    {
        src: "images/2021_demforner-chall.jpg",
        title: "Drawing of a friend's old OC (Demforner on Instagram, not sure if her account still exists)",
        alt: "Young lady with pale skin and long white hair, wearing a black coat. She seems tired of what she sees.",
        date: 2021
    }
]


// Navigation ________________________________________

// Les éléments du menu sont cliquables. Si on clique sur un onglet (2D, About Me...), alors ce dernier prend toute la largeur de la page et l'affichage précédent.

function onNavClick(sectionId) {
    // Masquer les deux sections
    document.getElementById('2D').style.display = 'none';
    document.getElementById('about').style.display = 'none';

    // Afficher la section sélectionnée
    document.getElementById(sectionId).style.display = 'block';
}



// Galerie __________________________________________

function createGallery() {
    let gallery = document.getElementById('gallery');
    
    listImg.forEach(element => {
        let artwork = document.createElement('img');
        artwork.alt = element.alt;
        artwork.src = element.src;
        artwork.className = "artwork";
        artwork.style.cursor = 'pointer';

        // Au survol, l'artwork tourne d'un angle aléatoire entre -10 et 10°
        artwork.addEventListener('mouseover', function() {
            const randomDegree = Math.random()*16 - 8; // Math.random() donne un truc entre 0 et 1
            this.style.transform = `rotateZ(${randomDegree}deg) scale(1.4)`;
        });
    
        // Réinitialiser la transformation quand la souris quitte l'artwork (sinon ça reste en plein milieu comme ça bruhh)
        artwork.addEventListener('mouseout', function() {
            this.style.transform = 'none';
        });

        // Ajouter un événement de clic à chaque image
        artwork.addEventListener("click", function() {
            showArtworkDetails(element.alt, element.src, element.title, element.date);
        });

        gallery.appendChild(artwork);
    });
}

createGallery();

function showArtworkDetails(alt, src, title, date) {
    // Récupérer le modal
    var modal = document.getElementById("theModal");

    // Effacer le contenu existant du modal
    modal.innerHTML = '';

    // Création de l'image dans le modal
    var modalImg = document.createElement('img');
    modalImg.className = 'modal-content';
    modalImg.id = 'img01';
    modalImg.src = src;
    modalImg.alt = alt;
    modal.appendChild(modalImg);

    // Création de la description
    var captionText = document.createElement('div');
    captionText.className = 'caption';
    
    var artworkTitle = document.createElement('h3');
    artworkTitle.innerHTML = title;
    var artworkDate = document.createElement('p');
    artworkDate.innerHTML = date;
    
    captionText.appendChild(artworkTitle);
    captionText.appendChild(artworkDate);
    
    modal.appendChild(captionText);

    // Création du bouton de fermeture
    var closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };
    
    modal.appendChild(closeButton);

    // Afficher le modal
    modal.style.display = 'block';
}



