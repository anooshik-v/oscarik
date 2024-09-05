import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatGridListModule,MatCardModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  images:string[]=[];
  constructor(private dialog: MatDialog){
    for (let i = 1; i <= 25; i++) {
      this.images.push(`assets/portfolio-${i}.jpg`);
    }
    this.shuffleArray(this.images);
  }
  openDialog(image: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { image: image },
      panelClass: 'full-screen-dialog'
    });
  }

  shuffleArray(array: string[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }
}
