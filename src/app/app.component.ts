import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {exampleJSON} from './example';

const surveys: Record<string, unknown> = {
  survey1: 'https://raw.githubusercontent.com/cuecatch/examples/main/examples/inputs/source.json',
  survey2: 'https://raw.githubusercontent.com/cuecatch/examples/main/examples/style/source.json',
  local: JSON.stringify(exampleJSON),
};
@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('my_survey') cuecatch: ElementRef| undefined = undefined;

  surveySource = surveys['survey1'];

  changeSurvey = (name: string) => {
    this.surveySource =  surveys[name] || ''
  }

  setSurveyJson = () => {
    if (this.cuecatch?.nativeElement) {
      this.cuecatch.nativeElement.src = exampleJSON;
    }
  }

  handleChange = (event:unknown) => {
    console.log(event);
  }
  resetSurvey = () => {
    this.cuecatch?.nativeElement?.api?.reset()
  }
  goNext = () => {
    this.cuecatch?.nativeElement?.api?.goNext()
  }
  goPrev = () => {
    this.cuecatch?.nativeElement?.api?.goPrev()
  }
}
