import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import {CardAnimate} from '../../animate/card.animate';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    CardAnimate,
  ]
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() invite = new EventEmitter<void>();
  @Output() editItem = new EventEmitter<void>();
  @Output() deleteItem = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';
  constructor() { }

  ngOnInit() {
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }
  @HostListener('mouseleave')
    onMouseLeave() {
        this.cardState = 'out';
  }
  onInviteClick() {
    this.invite.emit();
  }
  onItemClick() {
    this.editItem.emit();
  }
  onDeleteClick() {
    this.deleteItem.emit();
  }
}
