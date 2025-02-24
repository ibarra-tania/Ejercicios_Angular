import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadconmbsComponent } from './breadconmbs.component';

describe('BreadconmbsComponent', () => {
  let component: BreadconmbsComponent;
  let fixture: ComponentFixture<BreadconmbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadconmbsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadconmbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
