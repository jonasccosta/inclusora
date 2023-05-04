import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InclusionCheckButtonComponent } from './inclusion-check-button.component';

describe('InclusionCheckButtonComponent', () => {
  let component: InclusionCheckButtonComponent;
  let fixture: ComponentFixture<InclusionCheckButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InclusionCheckButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InclusionCheckButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
