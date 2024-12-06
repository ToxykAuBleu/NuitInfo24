import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  standalone: true,
  imports: [
    NgIf,
  ],
})
export class PopupComponent {
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();

  questions = [
    "Les poissons peuvent-ils vraiment voir sous l’eau ?",
    "Pensez-vous que les vagues s’amusent à nous éclabousser ?",
    "Est-ce que les étoiles de mer brillent dans l'obscurité ?",
    "Les requins rêvent-ils de chasser ?",
    "Peut-on entendre la mer dans un coquillage ?",
    "L’eau de mer est-elle plus salée que vos larmes ?",
    "Les algues se battent-elles pour la lumière ?",
    "Les dauphins rient-ils quand ils sautent hors de l’eau ?",
    "Les sirènes chantent-elles pour attirer les marins ?",
    "Les crabes se déplacent-ils toujours sur le côté ?",
    "Les océans seraient-ils plus beaux en turquoise ?",
    "Les méduses brillent-elles de fierté la nuit ?",
    "Peut-on voir le fond de l’océan depuis l’espace ?",
    "L’océan cache-t-il encore des trésors inconnus ?",
    "Les vagues dansent-elles sous la lune ?",
  ]
  question: string = this.questions[Math.floor(Math.random() * this.questions.length)];


  closePopup() {
    this.close.emit();
  }
}
