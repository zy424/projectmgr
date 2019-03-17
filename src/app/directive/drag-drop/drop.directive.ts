import {Directive, ElementRef, HostListener, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[app-droppable][dragEnterClass]'
})
export class DropDirective {
  @Input() dragEnterClass: string;

  constructor(private el: ElementRef, private rd: Renderer2) { }
    @HostListener('dragEnter', ['$event'])
    onDragEnter(ev: Event) {
      if (this.el.nativeElement === ev.target) {
          this.rd.addClass(this.el, this.dragEnterClass);
      }
    }
    @HostListener('dragOver', ['$event'])
    onDragOver(ev: Event) {
        if (this.el.nativeElement === ev.target) {
        }
    }
    @HostListener('dragLeave', ['$event'])
    onDragLeave(ev: Event) {
        if (this.el.nativeElement === ev.target) {
            this.rd.removeClass(this.el, this.dragEnterClass);
        }
    }
    @HostListener('dragDrop', ['$event'])
    onDragDrop(ev: Event) {
        if (this.el.nativeElement === ev.target) {
            this.rd.removeClass(this.el, this.dragEnterClass);
        }
    }

}
