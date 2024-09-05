import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatListModule, MatChipsModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
