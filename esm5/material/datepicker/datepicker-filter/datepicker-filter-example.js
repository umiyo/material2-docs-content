import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
var _c0 = ["picker", ""];
/** @title Datepicker with filter validation */
var DatepickerFilterExample = /** @class */ (function () {
    function DatepickerFilterExample() {
        this.myFilter = function (d) {
            var day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    DatepickerFilterExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-filter-example',
                    templateUrl: 'datepicker-filter-example.html',
                    styleUrls: ['datepicker-filter-example.css'],
                },] },
    ];
    DatepickerFilterExample.ɵfac = function DatepickerFilterExample_Factory(t) { return new (t || DatepickerFilterExample)(); };
    DatepickerFilterExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerFilterExample, selectors: [["datepicker-filter-example"]], decls: 5, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepickerFilter", "matDatepicker"], ["matSuffix", "", 3, "for"]], template: function DatepickerFilterExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelement(1, "input", 1);
            i0.ɵɵelement(2, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(3, "mat-datepicker", null, _c0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r13 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r13);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r13);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
    return DatepickerFilterExample;
}());
export { DatepickerFilterExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerFilterExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-filter-example',
                templateUrl: 'datepicker-filter-example.html',
                styleUrls: ['datepicker-filter-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1maWx0ZXIvZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1maWx0ZXIvZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4QywrQ0FBK0M7QUFDL0M7SUFBQTtRQU1FLGFBQVEsR0FBRyxVQUFDLENBQWM7WUFDeEIsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3ZDLG1EQUFtRDtZQUNuRCxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUE7S0FDRjs7Z0JBWEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3Qzs7a0dBQ1ksdUJBQXVCO2dFQUF2Qix1QkFBdUI7WUNScEMseUNBQ0U7WUFBQSwyQkFDQTtZQUFBLDJDQUF3RTtZQUN4RSw0Q0FBeUM7WUFDM0MsaUJBQWlCOzs7WUFIQyxlQUFnQztZQUFoQyxrREFBZ0MsdUJBQUE7WUFDZixlQUFjO1lBQWQsMEJBQWM7O2tDREZqRDtDQWNDLEFBWEQsSUFXQztTQU5ZLHVCQUF1QjttQ0FBdkIsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggZmlsdGVyIHZhbGlkYXRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZmlsdGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItZmlsdGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWZpbHRlci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyRmlsdGVyRXhhbXBsZSB7XG4gIG15RmlsdGVyID0gKGQ6IERhdGUgfCBudWxsKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgZGF5ID0gKGQgfHwgbmV3IERhdGUoKSkuZ2V0RGF5KCk7XG4gICAgLy8gUHJldmVudCBTYXR1cmRheSBhbmQgU3VuZGF5IGZyb20gYmVpbmcgc2VsZWN0ZWQuXG4gICAgcmV0dXJuIGRheSAhPT0gMCAmJiBkYXkgIT09IDY7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJGaWx0ZXJdPVwibXlGaWx0ZXJcIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIGRhdGVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=