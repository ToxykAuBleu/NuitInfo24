import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LetterShifterComponent } from './components/letter-shifter/letter-shifter.component';
import { EscapeButtonComponent} from './components/escape-button/escape-button.component';

@Component({
	selector: "app-root",
	imports: [RouterOutlet, LetterShifterComponent, EscapeButtonComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "NuitInfo24";
}
