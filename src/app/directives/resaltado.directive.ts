import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') nuevoColor: string;

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
   }
   @HostListener('mouseenter') ratonEntra() {
    this.resaltar(this.nuevoColor || 'yellow');
   }

   @HostListener('mouseleave') ratonSale() {
    this.resaltar(null);
   }

   private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
   }

}
