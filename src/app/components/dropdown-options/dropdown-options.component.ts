import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dropdown-options',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './dropdown-options.component.html',
  styleUrl: './dropdown-options.component.scss'
})
export class DropdownOptionsComponent {

}
