import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Metier } from '../../models/metier.model';
import { MetierService } from '../../service/metier/metier.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-metier',
  templateUrl: './add-metier.component.html',
  styleUrl: './add-metier.component.css'
})
export class AddMetierComponent implements OnInit {

  metierForm: FormGroup;
  metier: Metier = new Metier();
  theId:number;

  constructor(private fb: FormBuilder,
    private metierService: MetierService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.theId = employeeId;
    this.createForm();
    this.metier.empId = employeeId;
  }

  createForm(): void {
    this.metierForm = this.fb.group({
      libelle: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      empId: [this.metier.empId]
    });
  }

  onSubmit(): void {
    if (this.metierForm.valid) {
      const metierData: Metier = this.metierForm.value as Metier;
      metierData.empId = this.metier.empId;
      this.metierService.addMetier(this.theId, metierData).subscribe();
      console.log(metierData);
      this.metierForm.reset();
    } else {
    }
  }
}
