import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InviteComponent implements OnInit {
  items = [
      {
        id: 1,
        name: 'Lily',
      },
      {
          id: 2,
          name: 'Ben',
      },
      {
          id: 3,
          name: 'Zoey',
      }
  ]

  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id: string; name: string}) {
    return user ? user.name : '';
  }
  onClick() {

  }

}
