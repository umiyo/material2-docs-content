import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/icon";
var _c0 = ["picker", ""];
/** @title Datepicker with custom icon */
var DatepickerCustomIconExample = /** @class */ (function () {
    function DatepickerCustomIconExample() {
    }
    DatepickerCustomIconExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-custom-icon-example',
                    templateUrl: 'datepicker-custom-icon-example.html',
                    styleUrls: ['datepicker-custom-icon-example.css'],
                },] },
    ];
    DatepickerCustomIconExample.ɵfac = function DatepickerCustomIconExample_Factory(t) { return new (t || DatepickerCustomIconExample)(); };
    DatepickerCustomIconExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerCustomIconExample, selectors: [["datepicker-custom-icon-example"]], decls: 7, vars: 2, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""]], template: function DatepickerCustomIconExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelement(1, "input", 1);
            i0.ɵɵelementStart(2, "mat-datepicker-toggle", 2);
            i0.ɵɵelementStart(3, "mat-icon", 3);
            i0.ɵɵtext(4, "keyboard_arrow_down");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "mat-datepicker", null, _c0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r5 = i0.ɵɵreference(6);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matDatepicker", _r5);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r5);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i4.MatIcon, i3.MatDatepickerToggleIcon, i3.MatDatepicker], styles: [""] });
    return DatepickerCustomIconExample;
}());
export { DatepickerCustomIconExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerCustomIconExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-custom-icon-example',
                templateUrl: 'datepicker-custom-icon-example.html',
                styleUrls: ['datepicker-custom-icon-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jdXN0b20taWNvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWN1c3RvbS1pY29uL2RhdGVwaWNrZXItY3VzdG9tLWljb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jdXN0b20taWNvbi9kYXRlcGlja2VyLWN1c3RvbS1pY29uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRXhDLHlDQUF5QztBQUN6QztJQUFBO0tBSzJDOztnQkFMMUMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7b0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2lCQUNsRDs7MEdBQ1ksMkJBQTJCO29FQUEzQiwyQkFBMkI7WUNSeEMseUNBQ0U7WUFBQSwyQkFDQTtZQUFBLGdEQUNFO1lBQUEsbUNBQWtDO1lBQUEsbUNBQW1CO1lBQUEsaUJBQVc7WUFDbEUsaUJBQXdCO1lBQ3hCLDRDQUF5QztZQUMzQyxpQkFBaUI7OztZQUxDLGVBQXdCO1lBQXhCLG1DQUF3QjtZQUNQLGVBQWM7WUFBZCx5QkFBYzs7c0NERmpEO0NBUTJDLEFBTDNDLElBSzJDO1NBQTlCLDJCQUEyQjttQ0FBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggY3VzdG9tIGljb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItY3VzdG9tLWljb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1jdXN0b20taWNvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1jdXN0b20taWNvbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ3VzdG9tSWNvbkV4YW1wbGUge31cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBkYXRlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+XG4gICAgPG1hdC1pY29uIG1hdERhdGVwaWNrZXJUb2dnbGVJY29uPmtleWJvYXJkX2Fycm93X2Rvd248L21hdC1pY29uPlxuICA8L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=