import {Directive, ElementRef, HostListener, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[app-draggable][draggedClass]'
})

export class DragDirective {
  private _isDraggable = false;
  @Input('app-draggable')
  set isDraggable(val: boolean) {
    this._isDraggable = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }
  @Input() draggedClass: string;
  @HostListener('dragStart', ['$event'])
  onDragStart(ev: Event) {
      if (this.el.nativeElement === ev.target) {
        this.rd.addClass(this.el, this.draggedClass);
      }
  }

    @HostListener('dragEnd', ['$event'])
    onDragEnd(ev: Event) {
        if (this.el.nativeElement === ev.target) {
            this.rd.removeClass(this.el, this.draggedClass);
        }
    }

  constructor(private el: ElementRef, private rd: Renderer2) {}

}
