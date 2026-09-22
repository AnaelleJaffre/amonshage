
// Constantes _____________________________________________________

const listImg = [
    {
        src: "images/12.09.26.jpg",
        title: "Harvest Time",
        alt: "Small woman in a short white dress jumping over wheat stalks with a mischievous look, holding an enormous scythe.",
        date: 2026
    },
    {
        src: "images/11.08.26.jpg",
        title: "Strange Dreams",
        alt: "Man in a white shirt with long black hair turning white, perched high on a golden metal structure, watching a young girl with long blonde hair holding a musical instrument. Red curtains on the left, blue on the right, clear sky background, strange green-skinned demons in the corner.",
        date: 2026
    },
    {
        src: "images/meria.png",
        title: "Meria",
        alt: "Nun in a midnight blue robe holding a lily-of-the-valley scepter, accompanied by small ghosts.",
        date: 2026
    },
    {
        src: "images/24.12.25.png",
        title: "Offrande",
        alt: "Pretty fairy in a pink dress, sitting on a leaf in a wheat field, offering pearls to a small furry ball resembling a bee.",
        date: 2025
    },
    {
        src: "images/26.10.25.png",
        title: "Scyzenord",
        alt: "Human in red armor, with red wings ending in feathers, amid a mass of gray clouds that blur occasionally, with a few star flecks. Blue scarves trailing off.",
        date: 2025
    },
    {
        src: "images/15.09.25.png",
        title: "Passenger",
        alt: "Young man with blond hair sailing on a rowboat, on a calm and clear sea, under the sun, caught by the wind.",
        date: 2025
    },
    {
        src: "images/23.03.25.png",
        title: "Oni's Master",
        alt: "Woman with black hair, diving with a scepter into a mass of clouds drawn in a Buddhist style.",
        date: 2025
    },
    {
        src: "images/2024_fond_secureflow_initiative.jpg",
        title: "SecureFlow Initiative - Logo and Background",
        alt: "Logo of SecureFlow Initiative, a shield, on a black background with white fluttering waves.",
        date: 2024
    },
    {
        src: "images/2024_des-embruns.jpg",
        title: "Des Embruns",
        alt: "Person sitting in a kind of leaf, amid pomegranate seeds. Very warm atmosphere.",
        date: 2024
    },
    {
        src: "images/2024_moon-s-war.jpg",
        title: "Moon's War",
        alt: "Young blonde girl in a blue and red dress, with very wide, very long sleeves. Around her, red flags animate in the wind. The scene takes place at night, with the Moon and stars in the background.",
        date: 2024
    },
    {
        src: "images/2024_conte-de-fees.jpg",
        title: "Fééries",
        alt: "Young lady with red hair, flying on a flower.",
        date: 2024
    },
    {
        src: "images/11.07.24.jpg",
        title: "Sky High ✨",
        alt: "Young lady in the clouds, blue artwork.",
        date: 2024
    },
    {
        src: "images/2024_voyageur-intrepide.jpg",
        title: "Voyageur Intrépide",
        alt: "Young boy hanging up a map, trying to figure out where to go. He's in front of the beach, it's sunny.",
        date: 2024
    },
    {
        src: "images/2024_na4.jpg",
        title: "Na4",
        alt: "Young, calm and wise-like lady with long clear green hair. She stands tall in the forest, overwhelmed by branches, yellow flowers and green leaves.",
        date: 2024
    },
    {
        src: "images/2023_finally-dom.jpg",
        title: "Dom",
        alt: "Young lady in the water with a dress.",
        date: 2023
    },
    {
        src: "images/2023_ummu-s-DTIYS.jpg",
        title: "Dark Angel",
        alt: "Black man with dark-blue wings, surrounded by dark-blue birds.",
        date: 2023
    },
    {
        src: "images/2022_helio.jpg",
        title: "Helio",
        alt: "Young, calm and wise-like blond boy, sitting cross-legged, floating into a blue sky with clouds. He is wearing white and decorated clothes, with a long red ribbon.",
        date: 2023
    },
    {
        src: "images/2022_eniroi.jpg",
        title: "High by the waves",
        alt: "Young boy with blue hair and red pants. Fishes are dead at his feet, and a wave of his height is coming to crash behind him.",
        date: 2022
    },
    {
        src: "images/2022_play-down.jpg",
        title: "Play Down",
        alt: "Someone with purple hair, crossing a river at night, in a boat, with varied coloured lights.",
        date: 2022
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
        alt: "Young lady with sweet pink hair, sitting in the air, looking down, with a green sweater.",
        date: 2021
    },
    {
        src: "images/2021_starrox-dtiys.jpg",
        title: "Starr0x's DTIYS (Instagram)",
        alt: "Manga girl all in purple, with long purple hair.",
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
        artwork.loading = "lazy";
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

    // Vérifie les proportions de l'image pour ajuster le style
    modalImg.onload = function () {
        const imgRatio = this.naturalWidth / this.naturalHeight;
        const screenRatio = window.innerWidth / window.innerHeight;
    
        if (imgRatio > screenRatio) {
            // Si l'image est plus large que l'écran
            this.style.width = 'auto';
            this.style.height = '100%';
        } else {
            // Si l'image est plus haute que l'écran
            this.style.width = '100%';
            this.style.height = 'auto';
        }
    
        // Supprime les contraintes de redimensionnement
        this.style.maxWidth = 'none';
        this.style.maxHeight = 'none';
    };

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
    closeButton.onclick = function () {
        modal.style.display = 'none';
    };

    modal.appendChild(closeButton);

    // Afficher le modal
    modal.style.display = 'block';
}

// Et si on préfère appuyer sur Echap pour fermer l'image
function closeModal() {
    var modal = document.getElementById("theModal");
    modal.style.display = 'none';
}

// On ajoute écouteur d'événement pour la touche Échap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') { // Vérifie si la touche appuyée est Échap
        closeModal(); // Ferme le modal
    }
});

