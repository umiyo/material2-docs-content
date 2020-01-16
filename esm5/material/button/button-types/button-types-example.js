import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
/**
 * @title Button varieties
 */
var ButtonTypesExample = /** @class */ (function () {
    function ButtonTypesExample() {
    }
    ButtonTypesExample.ɵfac = function ButtonTypesExample_Factory(t) { return new (t || ButtonTypesExample)(); };
    ButtonTypesExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonTypesExample, selectors: [["button-types-example"]], decls: 114, vars: 0, consts: [[1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "routerLink", "."], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "routerLink", "."], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "routerLink", "."], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "routerLink", "."], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", ""], ["mat-fab", "", "color", "primary"], ["mat-fab", "", "color", "accent"], ["mat-fab", "", "color", "warn"], ["mat-fab", "", "disabled", ""], ["mat-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", "", "routerLink", "."], ["mat-mini-fab", ""], ["mat-mini-fab", "", "color", "primary"], ["mat-mini-fab", "", "color", "accent"], ["mat-mini-fab", "", "color", "warn"], ["mat-mini-fab", "", "disabled", ""], ["mat-mini-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-mini-fab", "", "routerLink", "."]], template: function ButtonTypesExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h3");
            i0.ɵɵtext(1, "Basic Buttons");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵelementStart(3, "button", 1);
            i0.ɵɵtext(4, "Basic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 2);
            i0.ɵɵtext(6, "Primary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 3);
            i0.ɵɵtext(8, "Accent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 4);
            i0.ɵɵtext(10, "Warn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 5);
            i0.ɵɵtext(12, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 6);
            i0.ɵɵtext(14, "Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "h3");
            i0.ɵɵtext(16, "Raised Buttons");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 0);
            i0.ɵɵelementStart(18, "button", 7);
            i0.ɵɵtext(19, "Basic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 8);
            i0.ɵɵtext(21, "Primary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "button", 9);
            i0.ɵɵtext(23, "Accent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 10);
            i0.ɵɵtext(25, "Warn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "button", 11);
            i0.ɵɵtext(27, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "a", 12);
            i0.ɵɵtext(29, "Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "h3");
            i0.ɵɵtext(31, "Stroked Buttons");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 0);
            i0.ɵɵelementStart(33, "button", 13);
            i0.ɵɵtext(34, "Basic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "button", 14);
            i0.ɵɵtext(36, "Primary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "button", 15);
            i0.ɵɵtext(38, "Accent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "button", 16);
            i0.ɵɵtext(40, "Warn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "button", 17);
            i0.ɵɵtext(42, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "a", 18);
            i0.ɵɵtext(44, "Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "h3");
            i0.ɵɵtext(46, "Flat Buttons");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "div", 0);
            i0.ɵɵelementStart(48, "button", 19);
            i0.ɵɵtext(49, "Basic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "button", 20);
            i0.ɵɵtext(51, "Primary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "button", 21);
            i0.ɵɵtext(53, "Accent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "button", 22);
            i0.ɵɵtext(55, "Warn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "button", 23);
            i0.ɵɵtext(57, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "a", 24);
            i0.ɵɵtext(59, "Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "h3");
            i0.ɵɵtext(61, "Icon Buttons");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "div", 0);
            i0.ɵɵelementStart(63, "button", 25);
            i0.ɵɵelementStart(64, "mat-icon");
            i0.ɵɵtext(65, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "button", 26);
            i0.ɵɵelementStart(67, "mat-icon");
            i0.ɵɵtext(68, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "button", 27);
            i0.ɵɵelementStart(70, "mat-icon");
            i0.ɵɵtext(71, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "button", 28);
            i0.ɵɵelementStart(73, "mat-icon");
            i0.ɵɵtext(74, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "button", 29);
            i0.ɵɵelementStart(76, "mat-icon");
            i0.ɵɵtext(77, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "h3");
            i0.ɵɵtext(79, "Fab Buttons");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "div", 0);
            i0.ɵɵelementStart(81, "button", 30);
            i0.ɵɵtext(82, "Basic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(83, "button", 31);
            i0.ɵɵtext(84, "Primary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "button", 32);
            i0.ɵɵtext(86, "Accent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "button", 33);
            i0.ɵɵtext(88, "Warn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "button", 34);
            i0.ɵɵtext(90, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "button", 35);
            i0.ɵɵelementStart(92, "mat-icon");
            i0.ɵɵtext(93, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "a", 36);
            i0.ɵɵtext(95, "Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "h3");
            i0.ɵɵtext(97, "Mini Fab Buttons");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(98, "div", 0);
            i0.ɵɵelementStart(99, "button", 37);
            i0.ɵɵtext(100, "Basic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(101, "button", 38);
            i0.ɵɵtext(102, "Primary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "button", 39);
            i0.ɵɵtext(104, "Accent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "button", 40);
            i0.ɵɵtext(106, "Warn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "button", 41);
            i0.ɵɵtext(108, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(109, "button", 42);
            i0.ɵɵelementStart(110, "mat-icon");
            i0.ɵɵtext(111, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(112, "a", 43);
            i0.ɵɵtext(113, "Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatButton, i1.MatAnchor, i2.MatIcon], styles: [".example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .example-button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    return ButtonTypesExample;
}());
export { ButtonTypesExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonTypesExample, [{
        type: Component,
        args: [{
                selector: 'button-types-example',
                templateUrl: 'button-types-example.html',
                styleUrls: ['button-types-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXR5cGVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vYnV0dG9uLXR5cGVzL2J1dHRvbi10eXBlcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi10eXBlcy9idXR0b24tdHlwZXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBS2tDO3dGQUFyQixrQkFBa0I7MkRBQWxCLGtCQUFrQjtZQ1YvQiwwQkFBSTtZQUFBLDZCQUFhO1lBQUEsaUJBQUs7WUFDdEIsOEJBQ0U7WUFBQSxpQ0FBbUI7WUFBQSxxQkFBSztZQUFBLGlCQUFTO1lBQ2pDLGlDQUFtQztZQUFBLHVCQUFPO1lBQUEsaUJBQVM7WUFDbkQsaUNBQWtDO1lBQUEsc0JBQU07WUFBQSxpQkFBUztZQUNqRCxpQ0FBZ0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQzdDLGtDQUE0QjtZQUFBLHlCQUFRO1lBQUEsaUJBQVM7WUFDN0MsNkJBQTZCO1lBQUEscUJBQUk7WUFBQSxpQkFBSTtZQUN2QyxpQkFBTTtZQUVOLDJCQUFJO1lBQUEsK0JBQWM7WUFBQSxpQkFBSztZQUN2QiwrQkFDRTtZQUFBLGtDQUEwQjtZQUFBLHNCQUFLO1lBQUEsaUJBQVM7WUFDeEMsa0NBQTBDO1lBQUEsd0JBQU87WUFBQSxpQkFBUztZQUMxRCxrQ0FBeUM7WUFBQSx1QkFBTTtZQUFBLGlCQUFTO1lBQ3hELG1DQUF1QztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDcEQsbUNBQW1DO1lB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LyoqXG4gKiBAdGl0bGUgQnV0dG9uIHZhcmlldGllc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24tdHlwZXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXR5cGVzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydidXR0b24tdHlwZXMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uVHlwZXNFeGFtcGxlIHt9XG4iLCI8aDM+QmFzaWMgQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gIDxhIG1hdC1idXR0b24gcm91dGVyTGluaz1cIi5cIj5MaW5rPC9hPlxuPC9kaXY+XG5cbjxoMz5SYWlzZWQgQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgPGEgbWF0LXJhaXNlZC1idXR0b24gcm91dGVyTGluaz1cIi5cIj5MaW5rPC9hPlxuPC9kaXY+XG5cbjxoMz5TdHJva2VkIEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgPGEgbWF0LXN0cm9rZWQtYnV0dG9uIHJvdXRlckxpbms9XCIuXCI+TGluazwvYT5cbjwvZGl2PlxuXG48aDM+RmxhdCBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gIDxhIG1hdC1mbGF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiLlwiPkxpbms8L2E+XG48L2Rpdj5cblxuPGgzPkljb24gQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJ3YXJuXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48aDM+RmFiIEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1mYWI+QmFzaWM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmFiIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmFiIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZhYiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZhYiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mYWIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGEgbWF0LWZhYiByb3V0ZXJMaW5rPVwiLlwiPkxpbms8L2E+XG48L2Rpdj5cblxuPGgzPk1pbmkgRmFiIEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1taW5pLWZhYj5CYXNpYzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGEgbWF0LW1pbmktZmFiIHJvdXRlckxpbms9XCIuXCI+TGluazwvYT5cbjwvZGl2PlxuIl19