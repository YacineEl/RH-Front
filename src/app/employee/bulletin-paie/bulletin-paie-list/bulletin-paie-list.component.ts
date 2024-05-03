import { Component } from '@angular/core';
import {BulletinPaie} from "../../models/bulletinPaie.model";
import {BulletinPaieService} from "../../service/bulletin-paie/bulletin-paie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bulletin-paie-list',
  templateUrl: './bulletin-paie-list.component.html',
  styleUrl: './bulletin-paie-list.component.css'
})
export class BulletinPaieListComponent {

  bulletinPaies: BulletinPaie[] = [];
  employeeId: number;

  constructor(private bulletinPaieService: BulletinPaieService,
              private route: ActivatedRoute) {
  }
  ngOnInit(){
    this.employeeId = Number(this.route.snapshot.paramMap.get("id"));
    this.getBulletinPaies(this.employeeId);
  }
  getBulletinPaies(id: number){
    this.bulletinPaieService.getBulletinPaieEmployeeId(id).subscribe((bulletinPaies) => {
      this.bulletinPaies = bulletinPaies;
    })
  }
}
