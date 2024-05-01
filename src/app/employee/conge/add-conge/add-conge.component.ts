import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


import { Conge } from '../../models/conge.model';
import { CongeService } from '../../service/conge/conge.service';


@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrl: './add-conge.component.css'
})
export class AddCongeComponent implements OnInit {

  congeForm: FormGroup;
  conge: Conge = new Conge();
  theId:number;

  constructor(private fb: FormBuilder,
    private congeService: CongeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.theId = employeeId;
    this.createForm();
    this.conge.empId = employeeId;
  }

  createForm(): void {
    this.congeForm = this.fb.group({
      typeConge: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      statut: [''],
      empId: [this.conge.empId]
    });
  }

  onSubmit(): void {
    if (this.congeForm.valid) {
      const congeData: Conge = this.congeForm.value as Conge;
      congeData.empId = this.conge.empId;
      this.congeService.addConge(this.theId, congeData).subscribe();
      console.log(congeData.dateDebut.getDay);
      console.log(congeData.dateDebut.getMonth);
      console.log(congeData.dateDebut.getFullYear);

      this.congeForm.reset();
    } else {
    }
  }
}