import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDSERVICEComponent } from './addservice.component';

describe('ADDSERVICEComponent', () => {
  let component: ADDSERVICEComponent;
  let fixture: ComponentFixture<ADDSERVICEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADDSERVICEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADDSERVICEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
