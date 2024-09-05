import { Component } from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [MatAccordion, MatExpansionModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {


  experiences=[
    {position:"Chief Security Officer", time:"April 2023 – Present", description: "Responsibilities include ensuring no unauthorized bicycles, mailmen, or cats breach the perimeter. I also provide high-alert barking services for every delivery truck that enters a one-mile radius. Successfully scared off 100% of vacuum cleaners to date."}     , 
    {position:"Snack Quality Assurance Tester", time:"August 2023 – Present", description: "I perform rigorous testing on a variety of treats, bones, and dry food. My evaluation process involves sniffing, cautious nibbling, and (in most cases) immediate devouring. I’m known for my discerning palate, which demands only the highest-quality snacks."}      ,
    {position:"Neighborhood Data Analyst", time:"September 2023 – Present", description: "I’ve mastered the fine art of sniffing every corner of the neighborhood to gather critical data on local dog scents, plants, and suspicious-looking bushes. This data is used to inform future walks and strategic decision-making on where to stop and sniff."}      ,
    {position:"Lead Cuddle Monster", time:"October 2023 – Present", description: "Delivering high-quality cuddles to my human, especially after a long day of barking. My ability to find the perfect napping spot (preferably on top of human feet) is second to none."}      
    
    
        ]
}
