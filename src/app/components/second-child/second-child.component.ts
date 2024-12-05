import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-child',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.scss'
})
export class SecondChildComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to the `data` observable
    this.route.data.subscribe((data) => {
      console.log('Route Data:', data); // Logs: { some_data: 'Static data passed via route' }
      this.data = data['some_data']; // Access the 'some_data' value
    });
  }
}
