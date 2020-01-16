import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/core";
function SelectCustomTriggerExample_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" (+", ctx_r0.toppings.value.length - 1, " ", (ctx_r0.toppings.value == null ? null : ctx_r0.toppings.value.length) === 2 ? "other" : "others", ") ");
} }
function SelectCustomTriggerExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var topping_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", topping_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(topping_r2);
} }
/** @title Select with custom trigger text */
var SelectCustomTriggerExample = /** @class */ (function () {
    function SelectCustomTriggerExample() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectCustomTriggerExample.ɵfac = function SelectCustomTriggerExample_Factory(t) { return new (t || SelectCustomTriggerExample)(); };
    SelectCustomTriggerExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectCustomTriggerExample, selectors: [["select-custom-trigger-example"]], decls: 6, vars: 4, consts: [["placeholder", "Toppings", "multiple", "", 3, "formControl"], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-additional-selection"], [3, "value"]], template: function SelectCustomTriggerExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-select", 0);
            i0.ɵɵelementStart(2, "mat-select-trigger");
            i0.ɵɵtext(3);
            i0.ɵɵtemplate(4, SelectCustomTriggerExample_span_4_Template, 2, 2, "span", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, SelectCustomTriggerExample_mat_option_5_Template, 2, 2, "mat-option", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControl", ctx.toppings);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.toppings.value ? ctx.toppings.value[0] : "", " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx.toppings.value == null ? null : ctx.toppings.value.length) > 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.toppingList);
        } }, directives: [i1.MatFormField, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i2.MatSelectTrigger, i4.NgIf, i4.NgForOf, i5.MatOption], styles: [".example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}"] });
    return SelectCustomTriggerExample;
}());
export { SelectCustomTriggerExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectCustomTriggerExample, [{
        type: Component,
        args: [{
                selector: 'select-custom-trigger-example',
                templateUrl: 'select-custom-trigger-example.html',
                styleUrls: ['select-custom-trigger-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWN1c3RvbS10cmlnZ2VyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWN1c3RvbS10cmlnZ2VyL3NlbGVjdC1jdXN0b20tdHJpZ2dlci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1jdXN0b20tdHJpZ2dlci9zZWxlY3QtY3VzdG9tLXRyaWdnZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0dyQywrQkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTzs7O0lBREwsZUFDRjtJQURFLDJLQUNGOzs7SUFFRixxQ0FBa0U7SUFBQSxZQUFXO0lBQUEsaUJBQWE7OztJQUExQyxrQ0FBaUI7SUFBQyxlQUFXO0lBQVgsZ0NBQVc7O0FETGpGLDZDQUE2QztBQUM3QztJQUFBO1FBTUUsYUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFFN0IsZ0JBQVcsR0FBYSxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDakc7d0dBSlksMEJBQTBCO21FQUExQiwwQkFBMEI7WUNUdkMsc0NBQ0U7WUFBQSxxQ0FDRTtZQUFBLDBDQUNFO1lBQUEsWUFDQTtZQUFBLDZFQUNFO1lBRUosaUJBQXFCO1lBQ3JCLHlGQUFrRTtZQUNwRSxpQkFBYTtZQUNmLGlCQUFpQjs7WUFUb0IsZUFBd0I7WUFBeEIsMENBQXdCO1lBRXZELGVBQ0E7WUFEQSxnRkFDQTtZQUFNLGVBQWtDO1lBQWxDLDBGQUFrQztZQUk5QixlQUFtQztZQUFuQyx5Q0FBbUM7O3FDRFJuRDtDQWFDLEFBVEQsSUFTQztTQUpZLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCBjdXN0b20gdHJpZ2dlciB0ZXh0ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtY3VzdG9tLXRyaWdnZXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWN1c3RvbS10cmlnZ2VyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtY3VzdG9tLXRyaWdnZXItZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q3VzdG9tVHJpZ2dlckV4YW1wbGUge1xuICB0b3BwaW5ncyA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG4gIHRvcHBpbmdMaXN0OiBzdHJpbmdbXSA9IFsnRXh0cmEgY2hlZXNlJywgJ011c2hyb29tJywgJ09uaW9uJywgJ1BlcHBlcm9uaScsICdTYXVzYWdlJywgJ1RvbWF0byddO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIlRvcHBpbmdzXCIgW2Zvcm1Db250cm9sXT1cInRvcHBpbmdzXCIgbXVsdGlwbGU+XG4gICAgPG1hdC1zZWxlY3QtdHJpZ2dlcj5cbiAgICAgIHt7dG9wcGluZ3MudmFsdWUgPyB0b3BwaW5ncy52YWx1ZVswXSA6ICcnfX1cbiAgICAgIDxzcGFuICpuZ0lmPVwidG9wcGluZ3MudmFsdWU/Lmxlbmd0aCA+IDFcIiBjbGFzcz1cImV4YW1wbGUtYWRkaXRpb25hbC1zZWxlY3Rpb25cIj5cbiAgICAgICAgKCt7e3RvcHBpbmdzLnZhbHVlLmxlbmd0aCAtIDF9fSB7e3RvcHBpbmdzLnZhbHVlPy5sZW5ndGggPT09IDIgPyAnb3RoZXInIDogJ290aGVycyd9fSlcbiAgICAgIDwvc3Bhbj5cbiAgICA8L21hdC1zZWxlY3QtdHJpZ2dlcj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgdG9wcGluZyBvZiB0b3BwaW5nTGlzdFwiIFt2YWx1ZV09XCJ0b3BwaW5nXCI+e3t0b3BwaW5nfX08L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=