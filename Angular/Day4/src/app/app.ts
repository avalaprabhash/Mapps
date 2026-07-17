import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Employees } from './services/employees';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  status = '';
  private employeeService = inject(Employees);

  employees = this.employeeService.getEmployees();

  filterEmployees(){

  if (this.status === 'Completed') {
    this.employees = this.employeeService.getCompletedEmployees();
  }
  else if (this.status === 'Pending') {
    this.employees = this.employeeService.getPendingEmployees();
  }
  else if (this.status === 'Rejected') {
    this.employees = this.employeeService.getRejectedEmployees();
  }
  else {
    this.employees = this.employeeService.getEmployees();
  }

}

}