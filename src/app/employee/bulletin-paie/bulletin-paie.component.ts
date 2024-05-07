import { Component } from '@angular/core';
import {BulletinPaie} from "../models/bulletinPaie.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BulletinPaieService} from "../service/bulletin-paie/bulletin-paie.service";

@Component({
  selector: 'app-bulletin-paie',
  templateUrl: './bulletin-paie.component.html',
  styleUrl: './bulletin-paie.component.css'
})
export class BulletinPaieComponent {
  bulletinPaieForm: FormGroup;
  bulletinPaie: BulletinPaie;
  allBulletinPaie: BulletinPaie[];

  constructor(private fb: FormBuilder,
              private bulletinPaieService: BulletinPaieService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.bulletinPaieForm = this.fb.group({
      employeeId: [employeeId],
      month: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  saveBulletinPaie(bulletinPaie: BulletinPaie,
                   id: number,
                   year: number,
                   month: number): void {
    this.bulletinPaieService.createBulletinPaie(bulletinPaie,id,year,month).subscribe((bulletinPaie: BulletinPaie) => {
      this.bulletinPaie = bulletinPaie;
      console.log(bulletinPaie);
    });
  }

  goToBulletinPaieList(): void {
    this.router.navigate(['payroll-employee-list', this.route.snapshot.paramMap.get('id')]);
  }

  onSubmit(): void {
    if (this.bulletinPaieForm.valid) {
      const formData = this.bulletinPaieForm.value;
      const newBulletinPaie: BulletinPaie = new BulletinPaie();
      // newBulletinPaie.cotisationCNSS = formData.cotisationCNSS;
      // newBulletinPaie.cotisationAMO = formData.cotisationAMO;
      // newBulletinPaie.prelevementIGR = formData.prelevementIGR;

      console.log(newBulletinPaie);
      this.saveBulletinPaie(newBulletinPaie,formData.employeeId,formData.year,formData.month);
    }
  }

}
