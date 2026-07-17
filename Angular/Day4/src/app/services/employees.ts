import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Employees {

  employees = [
    { empId: 101, empName: 'John Smith', taskStatus: 'Completed', isDisabled: false },
    { empId: 102, empName: 'Emma Johnson', taskStatus: 'Pending', isDisabled: false },
    { empId: 103, empName: 'Michael Brown', taskStatus: 'Rejected', isDisabled: true },
    { empId: 104, empName: 'Sophia Davis', taskStatus: 'Completed', isDisabled: false },
    { empId: 105, empName: 'William Wilson', taskStatus: 'Pending', isDisabled: false },
    { empId: 106, empName: 'Olivia Martinez', taskStatus: 'Rejected', isDisabled: true },
    { empId: 107, empName: 'James Anderson', taskStatus: 'Completed', isDisabled: false },
    { empId: 108, empName: 'Isabella Thomas', taskStatus: 'Pending', isDisabled: true },
    { empId: 109, empName: 'Benjamin Taylor', taskStatus: 'Completed', isDisabled: false },
    { empId: 110, empName: 'Charlotte Moore', taskStatus: 'Rejected', isDisabled: false }
  ];

  getEmployees() {
    return this.employees;
  }

  getCompletedEmployees() {
    return this.employees.filter(
      emp => emp.taskStatus === 'Completed'
    );
  }

  getPendingEmployees() {
    return this.employees.filter(
      emp => emp.taskStatus === 'Pending'
    );
  }

  getRejectedEmployees() {
    return this.employees.filter(
      emp => emp.taskStatus === 'Rejected'
    );
  }
}