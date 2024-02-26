import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TelaDeLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-cml';
}
