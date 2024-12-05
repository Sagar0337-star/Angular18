import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FirstChildComponent } from "./components/first-child/first-child.component";
import { SecondChildComponent } from "./components/second-child/second-child.component";
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, RouterLink, FirstChildComponent, SecondChildComponent],
  // imports: [RouterOutlet, RouterLink, FirstChildComponent, SecondChildComponent],
  imports: [HeaderComponent, FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_learning_18';
}
