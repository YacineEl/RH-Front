import {Component, Input} from '@angular/core';
import {BulletinPaie} from "../../models/bulletinPaie.model";

@Component({
  selector: 'app-bulletin-paie-item-details',
  templateUrl: './bulletin-paie-item-details.component.html',
  styleUrl: './bulletin-paie-item-details.component.css'
})
export class BulletinPaieItemDetailsComponent {
  @Input() bulletinPaie : BulletinPaie;
}
