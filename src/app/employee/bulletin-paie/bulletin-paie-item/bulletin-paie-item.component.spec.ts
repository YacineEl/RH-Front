import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinPaieItemComponent } from './bulletin-paie-item.component';

describe('BulletinPaieItemComponent', () => {
  let component: BulletinPaieItemComponent;
  let fixture: ComponentFixture<BulletinPaieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulletinPaieItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulletinPaieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
