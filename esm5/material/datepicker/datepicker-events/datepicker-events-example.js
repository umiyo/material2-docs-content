import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/common";
function DatepickerEventsExample_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var e_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(e_r19);
} }
/** @title Datepicker input and change events */
var DatepickerEventsExample = /** @class */ (function () {
    function DatepickerEventsExample() {
        this.events = [];
    }
    DatepickerEventsExample.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    DatepickerEventsExample.ɵfac = function DatepickerEventsExample_Factory(t) { return new (t || DatepickerEventsExample)(); };
    DatepickerEventsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerEventsExample, selectors: [["datepicker-events-example"]], decls: 9, vars: 3, consts: [["matInput", "", 3, "matDatepicker", "dateInput", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function DatepickerEventsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Input & change events");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 0);
            i0.ɵɵlistener("dateInput", function DatepickerEventsExample_Template_input_dateInput_3_listener($event) { return ctx.addEvent("input", $event); })("dateChange", function DatepickerEventsExample_Template_input_dateChange_3_listener($event) { return ctx.addEvent("change", $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(5, "mat-datepicker", null, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵtemplate(8, DatepickerEventsExample_div_8_Template, 2, 1, "div", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r17 = i0.ɵɵreference(6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matDatepicker", _r17);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r17);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.events);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker, i4.NgForOf], styles: [".example-events[_ngcontent-%COMP%] {\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}"] });
    return DatepickerEventsExample;
}());
export { DatepickerEventsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerEventsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-events-example',
                templateUrl: 'datepicker-events-example.html',
                styleUrls: ['datepicker-events-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNTdEMsMkJBQThCO0lBQUEsWUFBSztJQUFBLGlCQUFNOzs7SUFBWCxlQUFLO0lBQUwsMkJBQUs7O0FETnJDLGdEQUFnRDtBQUNoRDtJQUFBO1FBTUUsV0FBTSxHQUFhLEVBQUUsQ0FBQztLQUt2QjtJQUhDLDBDQUFRLEdBQVIsVUFBUyxJQUFZLEVBQUUsS0FBb0M7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUksSUFBSSxVQUFLLEtBQUssQ0FBQyxLQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO2tHQUxVLHVCQUF1QjtnRUFBdkIsdUJBQXVCO1lDVHBDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxxQ0FBcUI7WUFBQSxpQkFBWTtZQUM1QyxnQ0FFQTtZQURPLGlIQUFhLGFBQVMsT0FBTyxTQUFTLElBQUMsc0dBQWUsYUFBUyxRQUFRLFNBQVMsSUFBekM7WUFEOUMsaUJBRUE7WUFBQSwyQ0FBd0U7WUFDeEUsMENBQXlDO1lBQzNDLGlCQUFpQjtZQUVqQiw4QkFDRTtZQUFBLHdFQUE4QjtZQUNoQyxpQkFBTTs7O1lBUlksZUFBd0I7WUFBeEIsb0NBQXdCO1lBRVAsZUFBYztZQUFkLDBCQUFjO1lBSzFDLGVBQXdCO1lBQXhCLG9DQUF3Qjs7a0NEVC9CO0NBZUMsQUFYRCxJQVdDO1NBTlksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREYXRlcGlja2VySW5wdXRFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBpbnB1dCBhbmQgY2hhbmdlIGV2ZW50cyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZXZlbnRzLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJFdmVudHNFeGFtcGxlIHtcbiAgZXZlbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGFkZEV2ZW50KHR5cGU6IHN0cmluZywgZXZlbnQ6IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50PERhdGU+KSB7XG4gICAgdGhpcy5ldmVudHMucHVzaChgJHt0eXBlfTogJHtldmVudC52YWx1ZX1gKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPklucHV0ICYgY2hhbmdlIGV2ZW50czwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCJcbiAgICAgICAgIChkYXRlSW5wdXQpPVwiYWRkRXZlbnQoJ2lucHV0JywgJGV2ZW50KVwiIChkYXRlQ2hhbmdlKT1cImFkZEV2ZW50KCdjaGFuZ2UnLCAkZXZlbnQpXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1ldmVudHNcIj5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgZSBvZiBldmVudHNcIj57e2V9fTwvZGl2PlxuPC9kaXY+XG4iXX0=