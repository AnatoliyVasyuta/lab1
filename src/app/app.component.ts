import { Component, NgModule  } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PointComponent } from './point/point.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, PointComponent],////////////////
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab1';
}

