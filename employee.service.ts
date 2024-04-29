import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    {
      id: 1,
      FirstName: "Sam",
      LastName: "Adam",
      Gender: "Male",
      Age: 45,
      Salary: 100000.00,
      Department: "IT"
    },
    {
      id: 2,
      FirstName: "John",
      LastName: "Jacob",
      Gender: "Male",
      Age: 35,
      Salary: 90000.00,
      Department: "Sales"
    }
  ];

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees;
  }
}
