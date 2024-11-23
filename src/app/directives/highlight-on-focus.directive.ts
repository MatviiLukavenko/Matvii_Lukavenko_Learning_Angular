import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  // Waiting to receive a color from the parent component when called
  @Input() appHighlightOnFocus = '';

  // elementRef allows us to access the native DOM element associated with the directive
  constructor(private el: ElementRef) {}

  /*
  @HostListener('focus'): This method is triggered when the element gains focus.
  It calls the highlight method, passing in either the color specified in appHighlightOnFocus
  or a default color of lightblue if none is provided.

  @HostListener('blur'): This method is triggered when the element loses focus.
  It calls the highlight method with an empty string, effectively removing the background color.
   */
  @HostListener('focus') onFocus() {
    this.highlight(this.appHighlightOnFocus || 'lightblue'); // Default color just in case
  }

  @HostListener('blur') onBlur() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
