import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BulletinPaie} from "../../models/bulletinPaie.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bulletin-paie-item',
  templateUrl: './bulletin-paie-item.component.html',
  styleUrl: './bulletin-paie-item.component.css'
})
export class BulletinPaieItemComponent {
  @Input() bulletinPaie : BulletinPaie;
  @Output() selectBulletinPaie : EventEmitter<BulletinPaie> = new EventEmitter<BulletinPaie>();

  constructor(private router: Router) {
  }
  OnBulletinPaieClick(){
    this.selectBulletinPaie.emit(this.bulletinPaie);
  }
}
