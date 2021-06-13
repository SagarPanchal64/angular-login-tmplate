import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapReactiveFormComponent } from './bootstrap-reactive-form.component';

describe('BootstrapReactiveFormComponent', () => {
  let component: BootstrapReactiveFormComponent;
  let fixture: ComponentFixture<BootstrapReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
