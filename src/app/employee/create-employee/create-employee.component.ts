import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from '../employee.model';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  employeeForm: FormGroup;
  emploeeService: EmployeeService;

  constructor(private fb: FormBuilder, 
    private employeeService: EmployeeService,
    private router:Router) {;
   }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      codeCNSS: [null],
      dateNaissance: [null],
      telephone: [null],
      adresse: [null],
      situationFamiliale: [null],
      photoIdentite: [null]
    });
  }

  saveEmployee(employee: Employee){
    this.employeeService.createEmployee(employee).subscribe();
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;
      const newEmployee = new Employee(
        null,
        formData.matricule,
        formData.nom,
        formData.prenom,
        formData.codeCNSS,
        formData.dateNaissance,
        formData.telephone,
        formData.adresse,
        formData.situationFamiliale,
        formData.photoIdentite
      );
      this.saveEmployee(newEmployee);
      console.log(newEmployee);
    }
  }
}
