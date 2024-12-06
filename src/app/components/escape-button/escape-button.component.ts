import { Component } from '@angular/core';

@Component({
  selector: 'app-escape-button',
  templateUrl: './escape-button.component.html',
  styleUrl:'./escape-button.component.scss'
})
export class EscapeButtonComponent {
  translateX = 0;
  translateY = 0;

  onMouseMove(event: MouseEvent): void {
    const container = (event.target as HTMLElement).closest('div'); // Récupère la div englobante
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = container.querySelector('button')!.getBoundingClientRect();

    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

    const centerX = buttonRect.left - containerRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top - containerRect.top + buttonRect.height / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    if (distance < 200) {
      // Inverser le déplacement pour éloigner le bouton
      this.translateX -= deltaX * 0.2;
      this.translateY -= deltaY * 0.2;

      // Empêcher le bouton de sortir des limites de la div
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      this.translateX = Math.max(
        -centerX + 20,
        Math.min(this.translateX, containerWidth - buttonRect.width - centerX - 20)
      );
      this.translateY = Math.max(
        -centerY + 20,
        Math.min(this.translateY, containerHeight - buttonRect.height - centerY - 20)
      );
    }
  }

  resetPosition(): void {
    this.translateX = 0;
    this.translateY = 0;
  }
}
