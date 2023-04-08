import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveInscriptionComponent } from './reactive-inscription.component';

describe('ReactiveInscriptionComponent', () => {
  let component: ReactiveInscriptionComponent;
  let fixture: ComponentFixture<ReactiveInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
