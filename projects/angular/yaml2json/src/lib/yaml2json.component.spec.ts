import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yaml2jsonComponent } from './yaml2json.component';

describe('Yaml2jsonComponent', () => {
  let component: Yaml2jsonComponent;
  let fixture: ComponentFixture<Yaml2jsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yaml2jsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yaml2jsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
