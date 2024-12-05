import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecondChildComponent } from "../second-child/second-child.component";

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [SecondChildComponent],
  templateUrl: './first-child.component.html',
  styleUrl: './first-child.component.scss'
})
export class FirstChildComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    debugger
    console.log("First child");
  }

  navigateToSecondChild() {
    this.router.navigate(['/secondChild']); // Navigation to the secondChild route
  }
}
