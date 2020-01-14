import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountingServicesComponent } from './accounting-services.component';

describe('AccountingServicesComponent', () => {
  let component: AccountingServicesComponent;
  let fixture: ComponentFixture<AccountingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
