import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employee: Employee;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      codeCNSS: [''],
      dateNaissance: [''],
      telephone: [''],
      adresse: [''],
      situationFamiliale: [''],
      photoIdentite: ['']
    });

    const employeeId = Number(this.route.snapshot.paramMap.get('id'));

    this.employeeService.getEmployeeById(employeeId).subscribe((employee: Employee) => {
      this.employee = employee;
      this.employeeForm.patchValue({
        matricule: employee.matricule,
        nom: employee.nom,
        prenom: employee.prenom,
        codeCNSS: employee.codeCNSS,
        dateNaissance: employee.dateNaissance,
        telephone: employee.telephone,
        adresse: employee.adresse,
        situationFamiliale: employee.situationFamiliale,
        photoIdentite: employee.photoIdentite
      });
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const updatedEmployee: Employee = {
        id: this.employee.id,
        ...this.employeeForm.value
      };
      this.employeeService.updateEmployee(this.employee.id, updatedEmployee).subscribe(
        () => {
          this.showNotification('Employee updated successfully', 'success');
          this.router.navigate(['employees']);
        },
        () => {
          this.showNotification('Failed to update employee', 'error');
        }
      );
    }
  }
  private showNotification(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: type === 'success' ? ['success-notification'] : ['error-notification']
    });
  }
}
