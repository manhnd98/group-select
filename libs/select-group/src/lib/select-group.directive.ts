import {
  AfterViewInit,
  ContentChildren,
  Directive,
  Input,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { SelectItemDirective } from './select-item.directive';
import { map, mergeMap, startWith, switchMap, switchMapTo, takeUntil } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appSelectGroup]',
})
export class SelectGroupDirective implements AfterViewInit, OnDestroy {
  destroy$ = new Subject();
  dataSourceChanges$ = new Subject();

  /** Query list store list of selectItemDirective */
  @ContentChildren(SelectItemDirective)
  selectItems!: QueryList<SelectItemDirective>;

  /** Contain current data source*/
  private _dataSource: Observable<any[]> | Promise<any[]> | any[] | null = null;

  @Input()
  set appSelectItem(input: Observable<any[]> | Promise<any[]> | any[]) {

  }

  @Input() formGroup: FormGroup;

  constructor() {}

  private _formControlNames: string[];

  ngAfterViewInit(): void {
    merge(this.selectItems.changes, this.dataSourceChanges$)
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() => {
          const items = this.selectItems;
          const formControlNames = items.map((item) => item.ngSelectItem);
          this._formControlNames = formControlNames;
          const formControls = formControlNames.map((item) =>
            this.formGroup.controls[item].valueChanges.pipe(
              map((value) => ({ controlName: item, value }))
            )
          );

          return merge(...formControls);
        }),
        startWith({})
      )
      .subscribe((items: { controlName: string; value: any }) => {
        // handle event item changes
        // const otherFormControl

        // TODO: kinda stuck because this way will lead me to
        // Object reference
      });

    this.selectItems.notifyOnChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
