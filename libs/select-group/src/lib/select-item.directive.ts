import {
  ChangeDetectorRef,
  Directive,
  forwardRef,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import {
  AbstractControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  ValidationErrors,
  Validator,
} from '@angular/forms';

export class NgSelectItemDirective {
  $implicit = null;
  options = null;
}

@Directive({
  selector: '[ngSelectItem]',
})
export class SelectItemDirective {
  private context: NgSelectItemDirective = new NgSelectItemDirective();
  private _currentOptions: any[];

  /** Handle when list of option changes */
  @Input() optionChange: 'change' | 'focus' = 'change';
  /** formControlName */
  @Input() ngSelectItem: string;

  constructor(
    private viewContainer: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }

  ngAfterViewInit() {}

  /**
   * This function will be call from parent
   * @param options
   */
  setOptions(options: any[]) {
    this.context.options = options;
    this.cdr.markForCheck();
  }

}
