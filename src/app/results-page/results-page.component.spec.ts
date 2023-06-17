import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResultsPageComponent } from './results-page.component';

describe('ResultsPageComponent', () => {
  let component: ResultsPageComponent;
  let fixture: ComponentFixture<ResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ResultsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the personality type details if personalityType is defined', () => {
    component.personalityType = {
      type: 'Introvert',
      description: 'Introvert description',
      additionalInfo: 'Additional info',
      strengths: ['Strength 1', 'Strength 2'],
      weaknesses: ['Weakness 1', 'Weakness 2'],
      careers: ['Career 1', 'Career 2'],
    };
    fixture.detectChanges();

    const typeElement = fixture.nativeElement.querySelector('.fs-800');
    const descriptionElement = fixture.nativeElement.querySelector('p');
    const strengthsElements =
      fixture.nativeElement.querySelectorAll('.strength');
    const weaknessesElements =
      fixture.nativeElement.querySelectorAll('.weakness');
    const careersElements = fixture.nativeElement.querySelectorAll('.career');

    expect(typeElement.textContent).toContain('Introvert');
    expect(descriptionElement.textContent).toContain('Introvert description');
    expect(strengthsElements.length).toBe(2);
    expect(weaknessesElements.length).toBe(2);
    expect(careersElements.length).toBe(2);
  });

  it('should display "No results available!" if personalityType is undefined', () => {
    const messageElement = fixture.nativeElement.querySelector('p');
    expect(messageElement.textContent).toContain('No results available!');
  });
});
