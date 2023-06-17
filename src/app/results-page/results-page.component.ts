import { Component, OnInit } from '@angular/core';
import { PersonalityType } from '../core/types/models';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css'],
})
export class ResultsPageComponent implements OnInit {
  personalityType: PersonalityType | undefined;
  constructor() {}

  ngOnInit(): void {
    if (history.state && history.state.personalityType) {
      this.personalityType = history.state.personalityType;
    }
  }
}
