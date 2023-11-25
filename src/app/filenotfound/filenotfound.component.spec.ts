import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilenotfoundComponent } from './filenotfound.component';

describe('FilenotfoundComponent', () => {
  let component: FilenotfoundComponent;
  let fixture: ComponentFixture<FilenotfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilenotfoundComponent]
    });
    fixture = TestBed.createComponent(FilenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
