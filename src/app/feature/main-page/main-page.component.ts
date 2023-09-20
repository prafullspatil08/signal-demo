import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  showFiller = false;
  folders = [
    {
      name: 'Change Detection',
      selected: true,
    },
    {
      name: 'Set Function',
      selected: false,
    },
    {
      name: 'Update Function',
      selected: false,
    },
    {
      name: 'Mutate Function',
      selected: false,
    },
    {
      name: 'Effect Function',
      selected: false,
    },
  ];
}
