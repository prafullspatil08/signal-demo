import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-reactive-property',
  templateUrl: './reactive-property.component.html',
  styleUrls: ['./reactive-property.component.scss'],
})
export class ReactivePropertyComponent {
  firstName = signal<string>('Prafull');
  lastName = signal<string>('Patil');
  fullName = computed(() => {
    return this.firstName() + ' ' + this.lastName();
  });
  changeFirstName(fname: string) {
    this.firstName.set(fname);
  }
  changeLastName(lname: string) {
    this.lastName.set(lname);
  }
}
