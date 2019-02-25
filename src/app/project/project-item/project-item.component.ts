import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() invite = new EventEmitter<void>();
  @Output() editItem = new EventEmitter<void>();
  @Output() deleteItem = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
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
