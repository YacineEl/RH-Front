import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinPaieItemDetailsComponent } from './bulletin-paie-item-details.component';

describe('BulletinPaieItemDetailsComponent', () => {
  let component: BulletinPaieItemDetailsComponent;
  let fixture: ComponentFixture<BulletinPaieItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulletinPaieItemDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulletinPaieItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
