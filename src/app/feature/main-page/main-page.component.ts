import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  showFiller = false;
  items = [
    {
      name: 'Change Detection',
      selected: true,
      path: 'change-detection'
    },
    {
      name: 'Set Function',
      selected: false,
      path: 'set'
    },
    {
      name: 'Update Function',
      selected: false,
      path: 'update'
    },
    {
      name: 'Mutate Function',
      selected: false,
      path: 'mutate'
    },
    {
      name: 'Effect Function',
      selected: false,
      path: 'effect'
    },
  ];

  constructor(private router: Router){}

  routeMe(obj:any){
    this.router.navigateByUrl(obj.path)
    console.log(obj);
  }
}
