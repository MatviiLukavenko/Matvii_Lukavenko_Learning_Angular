import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowDetailsOnHover]',
  standalone: true
})
export class ShowDetailsOnHoverDirective {
  @Input('appShowDetailsOnHover') tooltipText: string = ''; // Input to receive the text to display
  private tooltip: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    if (!this.tooltipText) return;

    // Create the tooltip element
    this.tooltip = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipText)
    );

    // Apply styles to the tooltip
    this.renderer.setStyle(this.tooltip, 'position', 'absolute');
    this.renderer.setStyle(this.tooltip, 'backgroundColor', '#333');
    this.renderer.setStyle(this.tooltip, 'color', '#fff');
    this.renderer.setStyle(this.tooltip, 'padding', '5px 10px');
    this.renderer.setStyle(this.tooltip, 'borderRadius', '4px');
    this.renderer.setStyle(this.tooltip, 'fontSize', '12px');
    this.renderer.setStyle(this.tooltip, 'zIndex', '1000');
    this.renderer.setStyle(this.tooltip, 'top', `${this.el.nativeElement.offsetTop - 30}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${this.el.nativeElement.offsetLeft}px`);

    // Append the tooltip to the parent element
    this.renderer.appendChild(this.el.nativeElement, this.tooltip);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    if (this.tooltip) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltip);
      this.tooltip = null; // Clean up
    }
  }
}
