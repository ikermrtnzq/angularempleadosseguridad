import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiperfilComponent } from './miperfil-component';

describe('MiperfilComponent', () => {
  let component: MiperfilComponent;
  let fixture: ComponentFixture<MiperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiperfilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MiperfilComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
