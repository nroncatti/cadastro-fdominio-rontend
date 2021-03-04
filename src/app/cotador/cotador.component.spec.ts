import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotadorComponent } from './cotador.component';

describe('CotadorComponent', () => {
  let component: CotadorComponent;
  let fixture: ComponentFixture<CotadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
