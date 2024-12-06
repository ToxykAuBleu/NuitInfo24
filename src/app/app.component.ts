import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LetterShifterComponent } from './components/letter-shifter/letter-shifter.component';
import { EscapeButtonComponent} from './components/escape-button/escape-button.component';
import { PopupComponent } from './components/popup/popup.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
	selector: "app-root",
	imports: [RouterOutlet, LetterShifterComponent, PopupComponent, EscapeButtonComponent, HeaderComponent, FooterComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "NuitInfo24";
  popupOpen = false;
  ngOnInit() {
    this.startPopup();
  }

  startPopup() {
    setInterval(() => {
      this.popupOpen = true;
    }, 60000);
  }

  closePopup() {
    this.popupOpen = false;
  }
}
