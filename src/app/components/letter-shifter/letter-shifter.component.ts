// letter-shifter.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-letter-shifter',
  templateUrl: './letter-shifter.component.html',
  styleUrls: ['./letter-shifter.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LetterShifterComponent {
  inputText: string = '';

  private SHIFT_AMOUNT: number;
  private readonly ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor() {
    this.SHIFT_AMOUNT = Math.floor(Math.random() * 26) + 1;
  }

  onKeyPress(event: KeyboardEvent) {
    // Empêcher le comportement par défaut
    event.preventDefault();

    if (this.inputText.length === 0) {
      this.SHIFT_AMOUNT = Math.floor(Math.random() * 26) + 1;
    }

    const char = event.key;
    if (char.length === 1) { // S'assurer que c'est un seul caractère
      const shiftedChar = this.shiftLetter(char);
      // Ajouter le caractère transformé à la position du curseur
      const input = event.target as HTMLInputElement;
      const start = input.selectionStart || 0;
      const end = input.selectionEnd || 0;

      this.inputText = this.inputText.substring(0, start) + shiftedChar + this.inputText.substring(end);
    }
  }

  private shiftLetter(char: string): string {
    const upperChar = char.toUpperCase();

    if (!this.ALPHABET.includes(upperChar)) {
      return char;
    }

    const currentPos = this.ALPHABET.indexOf(upperChar);
    let newPos = currentPos - this.SHIFT_AMOUNT;
    if (newPos < 0) {
      newPos = this.ALPHABET.length + newPos;
    }

    const shiftedLetter = this.ALPHABET[newPos];
    return char === upperChar ? shiftedLetter : shiftedLetter.toLowerCase();
  }
}
