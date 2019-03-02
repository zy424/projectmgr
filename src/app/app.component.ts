import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  squareState: string;
  darkTheme = false;
  switchTheme(checked) {
    this.darkTheme = checked;
  }
}
