import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleImageComponent } from './people-image.component';

describe('PeopleImageComponent', () => {
  let component: PeopleImageComponent;
  let fixture: ComponentFixture<PeopleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
