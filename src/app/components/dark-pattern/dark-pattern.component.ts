import { Component } from '@angular/core';
import { LetterShifterComponent } from '../letter-shifter/letter-shifter.component';
import { EscapeButtonComponent } from '../escape-button/escape-button.component';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-dark-pattern',
  imports: [
    LetterShifterComponent,
    EscapeButtonComponent,
    PopupComponent,
  ],
  templateUrl: './dark-pattern.component.html',
  styleUrl: './dark-pattern.component.scss',
})
export class DarkPatternComponent {

}
