import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
 selectedImage: string | null = null;
projects=[
  {
    title: 'Water Plant Installation',
    location: 'Nagpur village',
    image: '/project3Tank.jpeg'
  },
  {
    title:'Solar Water System',
    location:'Wardha',
    image:'/project3Tank.jpeg'
  },
   {
    title:'Solar Filter Machine',
    location:'Kadoli',
    image:'/project3Tank.jpeg'
  }
]
}
