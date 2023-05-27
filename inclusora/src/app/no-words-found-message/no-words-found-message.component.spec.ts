import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoWordsFoundMessageComponent } from './no-words-found-message.component';

describe('NoWordsFoundMessageComponent', () => {
  let component: NoWordsFoundMessageComponent;
  let fixture: ComponentFixture<NoWordsFoundMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoWordsFoundMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoWordsFoundMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
