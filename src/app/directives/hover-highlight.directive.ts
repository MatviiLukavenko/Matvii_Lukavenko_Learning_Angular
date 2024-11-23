import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  // Waiting to receive a color from the parent component when called
  @Input() appHoverHighlight = '';

  // elementRef allows us to access the native DOM element associated with the directive
  constructor(private el: ElementRef) {}

  /*
  @HostListener('mouseenter'): Triggered when the mouse enters the element.
  Applies the highlight color, or a default color of lightgray if none is provided.

  @HostListener('mouseleave'): Triggered when the mouse leaves the element.
  Removes the background color by setting it to an empty string.
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverHighlight || 'lightgray'); // Default color for hover
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(''); // Reset background color
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
