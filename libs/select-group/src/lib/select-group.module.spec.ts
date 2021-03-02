import { async, TestBed } from '@angular/core/testing';
import { SelectGroupModule } from './select-group.module';

describe('SelectGroupModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SelectGroupModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SelectGroupModule).toBeDefined();
  });
});
