import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

const colors = [
  '#F7ACCF',
  '#6874E8',
  '#FFD972',
  '#33CA7F',
  '#72DDF7',
];

function generateTileRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

const tilesList = [
  {
    title: 'Les méduses : les neurones de la mer',
    imageSrc: 'meduse.svg',
    text: 'Les méduses, avec leur corps translucide en forme de cloche et leurs longs tentacules ondulants, rappellent visuellement un neurone et ses prolongements, les dendrites et l’axone. Comme les neurones, elles interagissent avec leur environnement de manière dynamique. Leurs tentacules sont sensibles aux stimuli externes, tout comme les dendrites captent les signaux nerveux. De plus, bien qu’elles soient dépourvues de cerveau centralisé, elles possèdent un réseau de cellules nerveuses qui leur permet de coordonner leurs mouvements, renforçant cette analogie avec les neurones humains.',
  },
  {
    imageSrc: 'corals.png',
    text: 'Les coraux, avec leur structure poreuse et leur capacité à filtrer l’eau, rappellent les poumons humains, où les alvéoles permettent les échanges gazeux. De la même manière que les poumons absorbent l’oxygène de l’air pour alimenter le corps, les coraux capturent les nutriments en suspension dans l’eau pour subvenir à leurs besoins. Leur rôle crucial dans l’écosystème marin, notamment en oxygénant l’eau et en abritant une grande biodiversité, reflète l’importance vitale des poumons dans le corps humain.',
    title: 'Coraux : les poumons de la mer',
  },
  {
    imageSrc: 'crabe.svg',
    text: 'Leur carapace rigide et protectrice, associée à leurs pinces articulées, est une parfaite analogie avec le squelette humain. Les crabes sont dotés d\'un exosquelette, une armature externe qui protège leurs organes vitaux et leur confère structure et mobilité, tout comme les os humains. Les pinces évoquent les phalanges de la main, capables de saisir et de manipuler leur environnement avec précision.',
    title: 'Le crabe : le squelette de la mer',
  },
  {
    imageSrc: 'eels.png',
    text: 'Le corps allongé et serpentiforme des anguilles se déplace grâce à des ondulations fluides, générées par une contraction et un relâchement rythmés de leurs muscles. Ces mouvements rappellent de près les fibres musculaires humaines lorsqu\'elles se contractent pour produire un mouvement. Les anguilles, tout comme les muscles, démontrent une grande flexibilité et force, adaptées à leur environnement aquatique.',
    title: 'Les anguilles : les muscles de la mer',
  },
  {
    imageSrc: 'etoileMer.svg',
    text: 'Avec leurs cinq bras articulés disposés en étoile, les étoiles de mer rappellent la forme d’une main humaine ouverte, avec ses cinq doigts. Ces bras, comme les doigts, permettent une manipulation fine de leur environnement : elles les utilisent pour se déplacer lentement sur les fonds marins ou pour ouvrir les coquillages dont elles se nourrissent. Leur capacité à régénérer un bras perdu renforce cette comparaison avec les potentialités de réparation et de croissance propres aux tissus humains.',
    title: 'L\'étoile de mer : la main de la mer',
  },
  {
    imageSrc: 'pieuvre.svg',
    text: 'Les pieuvres, grâce à leurs tentacules munies de ventouses, établissent des connexions sophistiquées avec leur environnement, rappelant les synapses qui permettent la transmission des signaux dans le cerveau. Chaque tentacule est presque autonome, doté de centaines de ventouses capables de détecter, de saisir et d’explorer. Cette capacité à établir des "connexions" dynamiques et à réagir à leur environnement en temps réel est une remarquable analogie avec la fonction des synapses dans le cerveau humain.',
    title: 'Les pieuvres : les synapses de la mer',
  },
  {
    imageSrc: 'poisson.svg',
    text: 'Les poissons nagent continuellement dans les courants marins, transportant de l’oxygène qu’ils extraient de l’eau via leurs branchies. Ce rôle vital évoque celui des globules rouges dans le sang humain, qui circulent sans relâche pour approvisionner l’organisme en oxygène. Tout comme les globules rouges sont portés par la force des artères et veines, les poissons semblent être transportés par les rivières et océans, contribuant à maintenir l’équilibre écologique.',
    title: 'Les poissons : les globules rouges de la mer',
  },
  {
    imageSrc: 'ray.png',
    text: 'Les raies possèdent un corps aplati et élargi qui évoque la forme de la cage thoracique humaine, où le sternum joue un rôle central. Tout comme le sternum protège les organes vitaux tels que le cœur et les poumons, le corps plat de la raie agit comme une barrière naturelle, la rendant résistante aux prédateurs. En glissant gracieusement sous l’eau, les raies symbolisent la structure protectrice et flexible que représente le sternum dans notre anatomie.',
    title: 'La raie : la cage thoracique de la mer',
  },
  {
    imageSrc: 'requin.svg',
    text: 'Les requins sont connus pour leurs mâchoires puissantes et leurs dents constamment renouvelées, ce qui les rend similaires aux dents humaines. Leur peau est également couverte de denticules dermiques, des structures semblables à des écailles mais ayant une composition proche des dents. Ces denticules, tout comme les dents, leur confèrent une résistance et une efficacité remarquables, tant pour la protection que pour la chasse.',
    title: 'Le requin : les dents de la mer',
  },
];

let i = 0;

let tiles = tilesList.map((tile) => ({
  ...tile,
  isTextShown: false,
})).sort(() => Math.random() - 0.5);

@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  tiles = tiles.map((tile) => ({
    ...tile,
    color: colors[i++ % colors.length],
  }));

  clickText(component) {
    console.log('clickText', component);
    component.isTextShown = !component.isTextShown;
    console.log(component.isTextShown);
  }
}
