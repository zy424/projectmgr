import {Directive, ElementRef, HostListener, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  @HostListener('dragStart', ['$event'])
  onDragStart(ev: Event) {
      if (this.el.nativeElement === ev.target) {

      }
  }

    @HostListener('dragEnd', ['$event'])
    onDragEnd(ev: Event) {
    }

  constructor(private el: ElementRef, private rd: Renderer2) {}

}
