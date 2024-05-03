import {Component, Input} from '@angular/core';
import {BulletinPaie} from "../../models/bulletinPaie.model";

@Component({
  selector: 'app-bulletin-paie-item',
  templateUrl: './bulletin-paie-item.component.html',
  styleUrl: './bulletin-paie-item.component.css'
})
export class BulletinPaieItemComponent {
  @Input() bulletinPaie : BulletinPaie;

}
