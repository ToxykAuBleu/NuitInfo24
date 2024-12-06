import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tag {
  name: string; // Le texte affiché, ici "partie_du_corps"
  animal: string; // L'animal associé, utilisé pour la vérification
  x: number;
  y: number;
  id: number;
  attachedToImage?: boolean;
}

interface ImageItem {
  src: string;
  x: number;
  y: number;
  tags: Tag[];
  association: Association;
}

interface Association {
  animal: string;
  partie_du_corps: string;
  explication: string;
  url?: string;
}

@Component({
  selector: 'app-jeu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jeu.component.html',
})
export class JeuComponent implements OnInit {
  images: ImageItem[] = [];
  tags: Tag[] = [];
  draggedTag: Tag | null = null;

  jeu = {
    associations: [
      {
        animal: 'Méduses',
        partie_du_corps: 'Neurones',
        explication: 'Leur forme en cloche avec des tentacules évoque un neurone et son réseau de dendrites.',
        url: '/meduse.svg',
      },
      {
        animal: 'Poissons',
        partie_du_corps: 'Globules rouges',
        explication: 'Ils nagent en transportant de l’oxygène, comme des globules rouges dans le sang.',
        url: '/poisson.svg',
      },
      {
        animal: 'Étoile de mer',
        partie_du_corps: 'Main',
        explication: 'Leurs bras articulés rappellent les doigts d’une main humaine.',
        url: '/etoileMer.svg',
      },
      {
        animal: 'Anguilles',
        partie_du_corps: 'Muscles',
        explication: 'Leur mouvement ondulant est similaire à la contraction des fibres musculaires.',
        url: '/eels.png',
      },
      {
        animal: 'Crabes',
        partie_du_corps: 'Squelette',
        explication: 'Leur carapace rigide et leurs pinces évoquent des os et des phalanges.',
        url: '/crabe.svg',
      },
      {
        animal: 'Raies',
        partie_du_corps: 'Sternum',
        explication: 'Leur forme plate et protectrice rappelle la cage thoracique humaine.',
        url: '/ray.png',
      },
      {
        animal: 'Pieuvres',
        partie_du_corps: 'Synapses',
        explication: 'Leurs ventouses créent des connexions similaires à celles des synapses dans le cerveau.',
        url: '/pieuvre.svg',
      },
      {
        animal: 'Coraux',
        partie_du_corps: 'Poumons',
        explication: 'Leur surface poreuse agit comme des alvéoles pour filtrer l’eau, rappelant la respiration.',
        url: '/corals.png',
      },
      {
        animal: 'Requins',
        partie_du_corps: 'Dents',
        explication: 'Leur peau est couverte de structures dentelées, et leurs mâchoires renouvellent leurs dents en continu.',
        url: '/requin.svg',
      },
      {
        animal: 'Concombres de mer',
        partie_du_corps: 'Intestins',
        explication: 'Leur forme allongée et leur fonction de décomposition organique rappellent les intestins.',
        url: '/sea-cucumber.png',
      },
    ],
  };

  associationsMelangees: Association[] = [];
  numberOfImages = 5;
  tagIdCounter = 1;
  fixedImageSize = 100;
  margin = 10;

  ngOnInit() {
    this.generateImagesAndTags();
  }

  // Mélanger un tableau
  melangerTableau<T>(tableau: T[]): T[] {
    for (let i = tableau.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    return tableau;
  }

  // Générer les images et les tags associés
  generateImagesAndTags() {
    this.associationsMelangees = this.melangerTableau([...this.jeu.associations]).slice(0, this.numberOfImages);

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Ajuster les marges pour positionner correctement les images
    const topMargin = 50; // Plus d'espace en haut
    const bottomMargin = 200; // Plus d'espace en bas pour éviter la coupure
    const occupiedPositions: { x: number; y: number }[] = [];

    // Calculer les images pouvant tenir dans les dimensions disponibles
    const maxImagesX = Math.floor(screenWidth / (this.fixedImageSize + this.margin));
    const maxImagesY = Math.floor((screenHeight - topMargin - bottomMargin) / (this.fixedImageSize + this.margin));

    if (this.numberOfImages > maxImagesX * maxImagesY) {
      console.warn('Pas assez de place pour toutes les images sans chevauchement.');
      this.numberOfImages = maxImagesX * maxImagesY;
    }

    this.images = this.associationsMelangees.map(assoc => {
      let x: number, y: number;
      let validPosition = false;

      while (!validPosition) {
        x = Math.floor(Math.random() * maxImagesX) * (this.fixedImageSize + this.margin);
        y = Math.floor(Math.random() * maxImagesY) * (this.fixedImageSize + this.margin) + topMargin;

        validPosition = !occupiedPositions.some(pos => 
          Math.abs(pos.x - x) < this.fixedImageSize + this.margin && 
          Math.abs(pos.y - y) < this.fixedImageSize + this.margin
        );
      }

      occupiedPositions.push({ x, y });

      return {
        src: assoc.url || '/corals.png',
        x,
        y,
        tags: [],
        association: assoc,
      };
    });

    this.tags = this.associationsMelangees.map(assoc => ({
      name: assoc.partie_du_corps, // Le texte visible du tag
      animal: assoc.animal,        // L'animal utilisé pour la vérification
      x: 0,
      y: this.tagIdCounter * 30,
      id: this.tagIdCounter++,
      attachedToImage: false,
    }));
  }


  onDragStart(event: DragEvent, tag: Tag) {
    this.draggedTag = tag;
    event.dataTransfer?.setData('application/json', JSON.stringify(tag));
  }

  onDrop(event: DragEvent, image: ImageItem) {
    event.preventDefault();
    const data = event.dataTransfer?.getData('application/json');
    if (data) {
      const tag: Tag = JSON.parse(data);

      if (image.tags.length > 0) {
        alert('Une seule tag est autorisé par image.');
        return;
      }

      tag.attachedToImage = true;
      image.tags.push(tag);
      this.tags = this.tags.filter(t => t.id !== tag.id);
    }
    this.draggedTag = null;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragEnd(event: DragEvent, tag: Tag) {
    const dropZone = this.detectImageDropZone(event.clientX, event.clientY);

    if (!dropZone) {
      // Si le tag n'est pas déposé sur une image, le replacer dans la zone initiale
      tag.attachedToImage = false;

      // Vérifier que le tag n'est pas déjà dans la liste principale
      if (!this.tags.some(t => t.id === tag.id)) {
        this.tags.push(tag);
      }

      // Retirer le tag des images où il est éventuellement attaché
      this.images.forEach(img => {
        img.tags = img.tags.filter(t => t.id !== tag.id);
      });
    }

    this.draggedTag = null;
  }

  detectImageDropZone(x: number, y: number): ImageItem | null {
    for (const img of this.images) {
      if (
        x >= img.x &&
        x <= img.x + this.fixedImageSize &&
        y >= img.y &&
        y <= img.y + this.fixedImageSize
      ) {
        return img;
      }
    }
    return null;
  }

  onVerify() {
    let correct = 0;
    let details: string[] = [];
  
    this.images.forEach(image => {
      if (image.tags.length > 0) {
        const tag = image.tags[0];
        const isCorrect = tag.animal === image.association.animal;
  
        if (isCorrect) {
          correct++;
        }
  
        details.push(`
          <strong>${image.association.animal}</strong> associé à 
          <strong>${image.association.partie_du_corps}</strong>: 
          <em>${image.association.explication}</em> - 
          <span style="color: ${isCorrect ? 'green' : 'red'}">
            ${isCorrect ? 'Correct' : 'Incorrect'}
          </span>
        `);
      } else {
        details.push(`
          <strong>${image.association.animal}</strong> n'a pas de tag associé. 
          <span style="color: red">Incorrect</span>
        `);
      }
    });
  
    const result = `
      <div>
        <h3>Résultats :</h3>
        <p>${correct} association(s) correcte(s) sur ${this.numberOfImages}.</p>
        <ul>${details.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
    `;
  
    // Afficher la popup
    const popupWindow = window.open('', '_blank', 'width=400,height=600,scrollbars=yes');
    if (popupWindow) {
      popupWindow.document.write(`
        <html>
          <head>
            <title>Résultats de la Vérification</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              h3 { color: #333; }
              strong { color: #007BFF; }
              em { color: #555; }
              li { margin-bottom: 10px; }
            </style>
          </head>
          <body>${result}</body>
        </html>
      `);
      popupWindow.document.close();
    } else {
      alert('Impossible d\'ouvrir la popup. Veuillez vérifier les paramètres de votre navigateur.');
    }
  }
}
