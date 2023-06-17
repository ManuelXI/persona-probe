import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalityType } from '../core/types/models';
import { TestPageComponent } from '../test-page/test-page.component';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css'],
})
export class ResultsPageComponent implements OnInit {
  personalityType: PersonalityType | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.personalityType = history.state.personalityType;
    // this.personalityType = undefined;
  }
}
