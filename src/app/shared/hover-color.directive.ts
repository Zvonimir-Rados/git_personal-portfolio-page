import { Directive, ElementRef, HostListener, Renderer2  } from '@angular/core';


@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('#3CE693');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor(null);
  }

  private changeBackgroundColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
