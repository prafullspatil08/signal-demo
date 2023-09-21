import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mutate',
  templateUrl: './mutate.component.html',
  styleUrls: ['./mutate.component.scss']
})
export class MutateComponent {
  employees = signal([
    { name: 'Test 1', position: 'Manager', department: 'Sales' },
    { name: 'Test 2', position: 'Engineer', department: 'Development' },
    { name: 'Test 3', position: 'Marketing Specialist', department: 'Marketing' },
    { name: 'Test 4', position: 'HR Manager', department: 'Human Resources' },
    { name: 'Test 5', position: 'IT Support', department: 'IT' }
  ]);
  employeeForm!: FormGroup;
  empAdding= signal<boolean>(false);
  constructor(private fb: FormBuilder){}
  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required]
    });
  }
  onSubmit() {
    this.employees.mutate(empList=>{
      empList.push(this.employeeForm.value);
    });
    this.employeeForm.reset();
    this.toggleAddBlock();
  }

  toggleAddBlock(){
    this.empAdding.update(status => !status);
  }
}
