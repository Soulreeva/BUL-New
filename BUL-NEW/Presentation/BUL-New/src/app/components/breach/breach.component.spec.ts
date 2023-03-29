import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreachComponent } from './breach.component';

describe('BreachComponent', () => {
  let component: BreachComponent;
  let fixture: ComponentFixture<BreachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
