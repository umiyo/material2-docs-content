import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Slider with custom thumb label formatting.
 */
var SliderFormattingExample = /** @class */ (function () {
    function SliderFormattingExample() {
    }
    SliderFormattingExample.prototype.formatLabel = function (value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    };
    SliderFormattingExample = tslib_1.__decorate([
        Component({
            selector: 'slider-formatting-example',
            template: "<mat-slider\n  thumbLabel\n  [displayWith]=\"formatLabel\"\n  tickInterval=\"1000\"\n  min=\"1\"\n  max=\"100000\"></mat-slider>\n",
            styles: ["mat-slider {\n  width: 300px;\n}\n"]
        })
    ], SliderFormattingExample);
    return SliderFormattingExample;
}());
export { SliderFormattingExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvc2xpZGVyLWZvcm1hdHRpbmcvc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQU1IO0lBQUE7SUFRQSxDQUFDO0lBUEMsNkNBQVcsR0FBWCxVQUFZLEtBQWE7UUFDdkIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBUFUsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsOElBQTZDOztTQUU5QyxDQUFDO09BQ1csdUJBQXVCLENBUW5DO0lBQUQsOEJBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFNsaWRlciB3aXRoIGN1c3RvbSB0aHVtYiBsYWJlbCBmb3JtYXR0aW5nLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyRm9ybWF0dGluZ0V4YW1wbGUge1xuICBmb3JtYXRMYWJlbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlID49IDEwMDApIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMCkgKyAnayc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iXX0=