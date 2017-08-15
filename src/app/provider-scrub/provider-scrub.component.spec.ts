import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderScrubComponent } from './provider-scrub.component';

describe('ProviderScrubComponent', () => {
  let component: ProviderScrubComponent;
  let fixture: ComponentFixture<ProviderScrubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderScrubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderScrubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
