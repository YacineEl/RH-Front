import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contrat } from '../../models/contrat.model';
import { ContratService } from '../../service/contrat/contrat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrl: './add-contrat.component.css'
})
export class AddContratComponent implements OnInit {

  contratForm: FormGroup;
  contrat: Contrat = new Contrat();
  theId:number;
  @Output() newContrat: EventEmitter<Contrat> = new EventEmitter<Contrat>();

  constructor(private fb: FormBuilder,
    private contratService: ContratService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.theId = employeeId;
    this.createForm();
    this.contrat.empId = employeeId;
  }

  createForm(): void {
    this.contratForm = this.fb.group({
      typeContrat: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      salaireBrut: ['', Validators.required],
      empId: [this.contrat.empId]
    });
  }

  onSubmit(): void {
    if (this.contratForm.valid) {
      const contratData: Contrat = this.contratForm.value as Contrat;
      contratData.empId = this.contrat.empId;
      this.newContrat.emit(contratData);
      this.contratForm.reset();
    } else {
    }
  }
}
