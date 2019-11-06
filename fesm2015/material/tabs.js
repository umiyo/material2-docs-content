import { NgIf, NgForOf, AsyncPipe, DatePipe, CommonModule } from '@angular/common';
import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵtextInterpolate, ɵɵtemplate, ɵɵadvance, ɵɵtextInterpolate1, ɵɵpipe, ɵɵproperty, ɵɵpipeBind1, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵelement, ɵɵreference, ɵɵpipeBind2, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { FormControl, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTabGroup, MatTab, MatTabLabel, MatTabContent, MatTabNav, MatTabLink, MatTabsModule } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { MatFormField } from '@angular/material/form-field';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with aligned labels
 */
class TabGroupAlignExample {
}
TabGroupAlignExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-align-example',
                templateUrl: 'tab-group-align-example.html',
                styleUrls: ['tab-group-align-example.css'],
            },] },
];
/** @nocollapse */ TabGroupAlignExample.ɵfac = function TabGroupAlignExample_Factory(t) { return new (t || TabGroupAlignExample)(); };
/** @nocollapse */ TabGroupAlignExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupAlignExample, selectors: [["tab-group-align-example"]], decls: 21, vars: 0, consts: [["mat-align-tabs", "start"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["mat-align-tabs", "center"], ["mat-align-tabs", "end"]], template: function TabGroupAlignExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group", 0);
        ɵɵelementStart(1, "mat-tab", 1);
        ɵɵtext(2, "Content 1");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-tab", 2);
        ɵɵtext(4, "Content 2");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-tab", 3);
        ɵɵtext(6, "Content 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-tab-group", 4);
        ɵɵelementStart(8, "mat-tab", 1);
        ɵɵtext(9, "Content 1");
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-tab", 2);
        ɵɵtext(11, "Content 2");
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-tab", 3);
        ɵɵtext(13, "Content 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-tab-group", 5);
        ɵɵelementStart(15, "mat-tab", 1);
        ɵɵtext(16, "Content 1");
        ɵɵelementEnd();
        ɵɵelementStart(17, "mat-tab", 2);
        ɵɵtext(18, "Content 2");
        ɵɵelementEnd();
        ɵɵelementStart(19, "mat-tab", 3);
        ɵɵtext(20, "Content 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(TabGroupAlignExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-align-example',
                templateUrl: 'tab-group-align-example.html',
                styleUrls: ['tab-group-align-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group animations
 */
class TabGroupAnimationsExample {
}
TabGroupAnimationsExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-animations-example',
                templateUrl: 'tab-group-animations-example.html',
                styleUrls: ['tab-group-animations-example.css'],
            },] },
];
/** @nocollapse */ TabGroupAnimationsExample.ɵfac = function TabGroupAnimationsExample_Factory(t) { return new (t || TabGroupAnimationsExample)(); };
/** @nocollapse */ TabGroupAnimationsExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupAnimationsExample, selectors: [["tab-group-animations-example"]], decls: 18, vars: 0, consts: [["animationDuration", "0ms"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["animationDuration", "2000ms"]], template: function TabGroupAnimationsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h3");
        ɵɵtext(1, "No animation");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-tab-group", 0);
        ɵɵelementStart(3, "mat-tab", 1);
        ɵɵtext(4, "Content 1");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-tab", 2);
        ɵɵtext(6, "Content 2");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-tab", 3);
        ɵɵtext(8, "Content 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "h3");
        ɵɵtext(10, "Very slow animation");
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-tab-group", 4);
        ɵɵelementStart(12, "mat-tab", 1);
        ɵɵtext(13, "Content 1");
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-tab", 2);
        ɵɵtext(15, "Content 2");
        ɵɵelementEnd();
        ɵɵelementStart(16, "mat-tab", 3);
        ɵɵtext(17, "Content 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(TabGroupAnimationsExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-animations-example',
                templateUrl: 'tab-group-animations-example.html',
                styleUrls: ['tab-group-animations-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TabGroupAsyncExample_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, " Loading tabs...\n");
    ɵɵelementContainerEnd();
} }
function TabGroupAsyncExample_mat_tab_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const tab_r2 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate(tab_r2.label);
} }
function TabGroupAsyncExample_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab");
    ɵɵtemplate(1, TabGroupAsyncExample_mat_tab_3_ng_template_1_Template, 1, 1, "ng-template", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", tab_r2.content, " ");
} }
/**
 * @record
 */
function ExampleTab() { }
if (false) {
    /** @type {?} */
    ExampleTab.prototype.label;
    /** @type {?} */
    ExampleTab.prototype.content;
}
/**
 * \@title Tab group with asynchronously loading tab contents
 */
class TabGroupAsyncExample {
    constructor() {
        this.asyncTabs = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }), 1000);
        }));
    }
}
TabGroupAsyncExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-async-example',
                templateUrl: 'tab-group-async-example.html',
                styleUrls: ['tab-group-async-example.css'],
            },] },
];
/** @nocollapse */
TabGroupAsyncExample.ctorParameters = () => [];
/** @nocollapse */ TabGroupAsyncExample.ɵfac = function TabGroupAsyncExample_Factory(t) { return new (t || TabGroupAsyncExample)(); };
/** @nocollapse */ TabGroupAsyncExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupAsyncExample, selectors: [["tab-group-async-example"]], decls: 5, vars: 6, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-tab-label", ""]], template: function TabGroupAsyncExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, TabGroupAsyncExample_ng_container_0_Template, 2, 0, "ng-container", 0);
        ɵɵpipe(1, "async");
        ɵɵelementStart(2, "mat-tab-group");
        ɵɵtemplate(3, TabGroupAsyncExample_mat_tab_3_Template, 3, 1, "mat-tab", 1);
        ɵɵpipe(4, "async");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.asyncTabs) === null);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ɵɵpipeBind1(4, 4, ctx.asyncTabs));
    } }, directives: [NgIf, MatTabGroup, NgForOf, MatTab, MatTabLabel], pipes: [AsyncPipe], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(TabGroupAsyncExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-async-example',
                templateUrl: 'tab-group-async-example.html',
                styleUrls: ['tab-group-async-example.css'],
            }]
    }], function () { return []; }, null);
if (false) {
    /** @type {?} */
    TabGroupAsyncExample.prototype.asyncTabs;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic use of the tab group
 */
class TabGroupBasicExample {
}
TabGroupBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-basic-example',
                templateUrl: 'tab-group-basic-example.html',
                styleUrls: ['tab-group-basic-example.css'],
            },] },
];
/** @nocollapse */ TabGroupBasicExample.ɵfac = function TabGroupBasicExample_Factory(t) { return new (t || TabGroupBasicExample)(); };
/** @nocollapse */ TabGroupBasicExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupBasicExample, selectors: [["tab-group-basic-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupBasicExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group");
        ɵɵelementStart(1, "mat-tab", 0);
        ɵɵtext(2, " Content 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-tab", 1);
        ɵɵtext(4, " Content 2 ");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-tab", 2);
        ɵɵtext(6, " Content 3 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(TabGroupBasicExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-basic-example',
                templateUrl: 'tab-group-basic-example.html',
                styleUrls: ['tab-group-basic-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TabGroupCustomLabelExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 1);
    ɵɵtext(1, "thumb_up");
    ɵɵelementEnd();
    ɵɵtext(2, " First ");
} }
function TabGroupCustomLabelExample_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 1);
    ɵɵtext(1, "thumb_up");
    ɵɵelementEnd();
    ɵɵtext(2, " Second ");
} }
function TabGroupCustomLabelExample_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 1);
    ɵɵtext(1, "thumb_up");
    ɵɵelementEnd();
    ɵɵtext(2, " Third ");
} }
/**
 * \@title Using tabs with a custom label template
 */
class TabGroupCustomLabelExample {
}
TabGroupCustomLabelExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-custom-label-example',
                templateUrl: 'tab-group-custom-label-example.html',
                styleUrls: ['tab-group-custom-label-example.css'],
            },] },
];
/** @nocollapse */ TabGroupCustomLabelExample.ɵfac = function TabGroupCustomLabelExample_Factory(t) { return new (t || TabGroupCustomLabelExample)(); };
/** @nocollapse */ TabGroupCustomLabelExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupCustomLabelExample, selectors: [["tab-group-custom-label-example"]], decls: 10, vars: 0, consts: [["mat-tab-label", ""], [1, "example-tab-icon"]], template: function TabGroupCustomLabelExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group");
        ɵɵelementStart(1, "mat-tab");
        ɵɵtemplate(2, TabGroupCustomLabelExample_ng_template_2_Template, 3, 0, "ng-template", 0);
        ɵɵtext(3, " Content 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-tab");
        ɵɵtemplate(5, TabGroupCustomLabelExample_ng_template_5_Template, 3, 0, "ng-template", 0);
        ɵɵtext(6, " Content 2 ");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-tab");
        ɵɵtemplate(8, TabGroupCustomLabelExample_ng_template_8_Template, 3, 0, "ng-template", 0);
        ɵɵtext(9, " Content 3 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab, MatTabLabel, MatIcon], styles: [".example-tab-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(TabGroupCustomLabelExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-custom-label-example',
                templateUrl: 'tab-group-custom-label-example.html',
                styleUrls: ['tab-group-custom-label-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with dynamic height based on tab contents
 */
class TabGroupDynamicHeightExample {
}
TabGroupDynamicHeightExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-dynamic-height-example',
                templateUrl: 'tab-group-dynamic-height-example.html',
                styleUrls: ['tab-group-dynamic-height-example.css'],
            },] },
];
/** @nocollapse */ TabGroupDynamicHeightExample.ɵfac = function TabGroupDynamicHeightExample_Factory(t) { return new (t || TabGroupDynamicHeightExample)(); };
/** @nocollapse */ TabGroupDynamicHeightExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupDynamicHeightExample, selectors: [["tab-group-dynamic-height-example"]], decls: 7, vars: 0, consts: [["dynamicHeight", ""], ["label", "Short tab"], [1, "example-small-box", "mat-elevation-z4"], ["label", "Long tab"], [1, "example-large-box", "mat-elevation-z4"]], template: function TabGroupDynamicHeightExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group", 0);
        ɵɵelementStart(1, "mat-tab", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵtext(3, " Small content ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-tab", 3);
        ɵɵelementStart(5, "div", 4);
        ɵɵtext(6, " Large content ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], styles: [".example-small-box[_ngcontent-%COMP%], .example-large-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 300px;\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(TabGroupDynamicHeightExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-dynamic-height-example',
                templateUrl: 'tab-group-dynamic-height-example.html',
                styleUrls: ['tab-group-dynamic-height-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const _c0 = ["selectAfterAdding", ""];
function TabGroupDynamicExample_mat_tab_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tab", 5);
    ɵɵtext(1);
    ɵɵelementStart(2, "button", 6);
    ɵɵlistener("click", function TabGroupDynamicExample_mat_tab_12_Template_button_click_2_listener($event) { ɵɵrestoreView(_r13); const index_r11 = ctx.index; const ctx_r12 = ɵɵnextContext(); return ctx_r12.removeTab(index_r11); });
    ɵɵtext(3, " Delete Tab ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("label", tab_r10);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" Contents for ", tab_r10, " tab ");
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r9.tabs.length === 1);
} }
/**
 * \@title Tab group with dynamically changing tabs
 */
class TabGroupDynamicExample {
    constructor() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
    }
    /**
     * @param {?} selectAfterAdding
     * @return {?}
     */
    addTab(selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
}
TabGroupDynamicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-dynamic-example',
                templateUrl: 'tab-group-dynamic-example.html',
                styleUrls: ['tab-group-dynamic-example.css'],
            },] },
];
/** @nocollapse */ TabGroupDynamicExample.ɵfac = function TabGroupDynamicExample_Factory(t) { return new (t || TabGroupDynamicExample)(); };
/** @nocollapse */ TabGroupDynamicExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupDynamicExample, selectors: [["tab-group-dynamic-example"]], decls: 13, vars: 3, consts: [[1, "example-input-label"], ["matInput", "", "type", "number", 3, "formControl"], ["mat-raised-button", "", 1, "example-add-tab-button", 3, "click"], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]], template: function TabGroupDynamicExample_Template(rf, ctx) { if (rf & 1) {
        const _r14 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "span", 0);
        ɵɵtext(2, " Selected tab index: ");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-form-field");
        ɵɵelement(4, "input", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "div");
        ɵɵelementStart(6, "button", 2);
        ɵɵlistener("click", function TabGroupDynamicExample_Template_button_click_6_listener($event) { ɵɵrestoreView(_r14); const _r8 = ɵɵreference(9); return ctx.addTab(_r8.checked); });
        ɵɵtext(7, " Add new tab ");
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-checkbox", null, _c0);
        ɵɵtext(10, " Select tab after adding ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-tab-group", 3);
        ɵɵlistener("selectedIndexChange", function TabGroupDynamicExample_Template_mat_tab_group_selectedIndexChange_11_listener($event) { return ctx.selected.setValue($event); });
        ɵɵtemplate(12, TabGroupDynamicExample_mat_tab_12_Template, 4, 3, "mat-tab", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("formControl", ctx.selected);
        ɵɵadvance(7);
        ɵɵproperty("selectedIndex", ctx.selected.value);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [MatFormField, MatInput, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatButton, MatCheckbox, MatTabGroup, NgForOf, MatTab], styles: [".example-input-label[_ngcontent-%COMP%], .example-add-tab-button[_ngcontent-%COMP%], .example-delete-tab-button[_ngcontent-%COMP%] {\n  margin: 8px;\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(TabGroupDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-dynamic-example',
                templateUrl: 'tab-group-dynamic-example.html',
                styleUrls: ['tab-group-dynamic-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TabGroupDynamicExample.prototype.tabs;
    /** @type {?} */
    TabGroupDynamicExample.prototype.selected;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with the headers on the bottom
 */
class TabGroupHeaderBelowExample {
}
TabGroupHeaderBelowExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-header-below-example',
                templateUrl: 'tab-group-header-below-example.html',
                styleUrls: ['tab-group-header-below-example.css'],
            },] },
];
/** @nocollapse */ TabGroupHeaderBelowExample.ɵfac = function TabGroupHeaderBelowExample_Factory(t) { return new (t || TabGroupHeaderBelowExample)(); };
/** @nocollapse */ TabGroupHeaderBelowExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupHeaderBelowExample, selectors: [["tab-group-header-below-example"]], decls: 7, vars: 0, consts: [["headerPosition", "below"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupHeaderBelowExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group", 0);
        ɵɵelementStart(1, "mat-tab", 1);
        ɵɵtext(2, " Content 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-tab", 2);
        ɵɵtext(4, " Content 2 ");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-tab", 3);
        ɵɵtext(6, " Content 3 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(TabGroupHeaderBelowExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-header-below-example',
                templateUrl: 'tab-group-header-below-example.html',
                styleUrls: ['tab-group-header-below-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TabGroupLazyLoadedExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext();
    ɵɵtextInterpolate1(" Content 1 - Loaded: ", ɵɵpipeBind2(1, 1, ctx_r15.getTimeLoaded(1), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext();
    ɵɵtextInterpolate1(" Content 2 - Loaded: ", ɵɵpipeBind2(1, 1, ctx_r16.getTimeLoaded(2), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext();
    ɵɵtextInterpolate1(" Content 3 - Loaded: ", ɵɵpipeBind2(1, 1, ctx_r17.getTimeLoaded(3), "medium"), " ");
} }
/**
 * \@title Tab group where the tab content is loaded lazily (when activated)
 */
class TabGroupLazyLoadedExample {
    constructor() {
        this.tabLoadTimes = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
}
TabGroupLazyLoadedExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-lazy-loaded-example',
                templateUrl: 'tab-group-lazy-loaded-example.html',
                styleUrls: ['tab-group-lazy-loaded-example.css'],
            },] },
];
/** @nocollapse */ TabGroupLazyLoadedExample.ɵfac = function TabGroupLazyLoadedExample_Factory(t) { return new (t || TabGroupLazyLoadedExample)(); };
/** @nocollapse */ TabGroupLazyLoadedExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupLazyLoadedExample, selectors: [["tab-group-lazy-loaded-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["matTabContent", ""], ["label", "Second"], ["label", "Third"]], template: function TabGroupLazyLoadedExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group");
        ɵɵelementStart(1, "mat-tab", 0);
        ɵɵtemplate(2, TabGroupLazyLoadedExample_ng_template_2_Template, 2, 4, "ng-template", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-tab", 2);
        ɵɵtemplate(4, TabGroupLazyLoadedExample_ng_template_4_Template, 2, 4, "ng-template", 1);
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-tab", 3);
        ɵɵtemplate(6, TabGroupLazyLoadedExample_ng_template_6_Template, 2, 4, "ng-template", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab, MatTabContent], pipes: [DatePipe], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(TabGroupLazyLoadedExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-lazy-loaded-example',
                templateUrl: 'tab-group-lazy-loaded-example.html',
                styleUrls: ['tab-group-lazy-loaded-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TabGroupLazyLoadedExample.prototype.tabLoadTimes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with stretched labels
 */
class TabGroupStretchedExample {
}
TabGroupStretchedExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-stretched-example',
                templateUrl: 'tab-group-stretched-example.html',
                styleUrls: ['tab-group-stretched-example.css'],
            },] },
];
/** @nocollapse */ TabGroupStretchedExample.ɵfac = function TabGroupStretchedExample_Factory(t) { return new (t || TabGroupStretchedExample)(); };
/** @nocollapse */ TabGroupStretchedExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupStretchedExample, selectors: [["tab-group-stretched-example"]], decls: 7, vars: 0, consts: [["mat-stretch-tabs", "", 1, "example-stretched-tabs", "mat-elevation-z4"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupStretchedExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group", 0);
        ɵɵelementStart(1, "mat-tab", 1);
        ɵɵtext(2, " Content 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-tab", 2);
        ɵɵtext(4, " Content 2 ");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-tab", 3);
        ɵɵtext(6, " Content 3 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], styles: [".example-stretched-tabs[_ngcontent-%COMP%] {\n  max-width: 800px;\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(TabGroupStretchedExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-stretched-example',
                templateUrl: 'tab-group-stretched-example.html',
                styleUrls: ['tab-group-stretched-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const _c0$1 = ["colorToggle", "matButtonToggleGroup"];
const _c1 = ["backgroundColorToggle", "matButtonToggleGroup"];
/**
 * \@title Customizing the theme options on the tab group
 */
class TabGroupThemeExample {
}
TabGroupThemeExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-theme-example',
                templateUrl: 'tab-group-theme-example.html',
                styleUrls: ['tab-group-theme-example.css'],
            },] },
];
/** @nocollapse */ TabGroupThemeExample.ɵfac = function TabGroupThemeExample_Factory(t) { return new (t || TabGroupThemeExample)(); };
/** @nocollapse */ TabGroupThemeExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupThemeExample, selectors: [["tab-group-theme-example"]], decls: 25, vars: 2, consts: [["value", "primary", "aria-label", "Change color"], ["value", "primary"], ["value", "accent"], [1, "example-button-toggle-label"], [3, "color", "backgroundColor"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupThemeExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "mat-button-toggle-group", 0, _c0$1);
        ɵɵelementStart(3, "mat-button-toggle", 1);
        ɵɵtext(4, " Primary ");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-button-toggle", 2);
        ɵɵtext(6, " Accent ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "span", 3);
        ɵɵtext(8, " Color ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "div");
        ɵɵelementStart(10, "mat-button-toggle-group", 0, _c1);
        ɵɵelementStart(12, "mat-button-toggle", 1);
        ɵɵtext(13, " Primary ");
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-button-toggle", 2);
        ɵɵtext(15, " Accent ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(16, "span", 3);
        ɵɵtext(17, " Background Color ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "mat-tab-group", 4);
        ɵɵelementStart(19, "mat-tab", 5);
        ɵɵtext(20, " Content 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(21, "mat-tab", 6);
        ɵɵtext(22, " Content 2 ");
        ɵɵelementEnd();
        ɵɵelementStart(23, "mat-tab", 7);
        ɵɵtext(24, " Content 3 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r18 = ɵɵreference(2);
        const _r19 = ɵɵreference(11);
        ɵɵadvance(18);
        ɵɵproperty("color", _r18.value)("backgroundColor", _r19.value);
    } }, directives: [MatButtonToggleGroup, MatButtonToggle, MatTabGroup, MatTab], styles: [".example-button-toggle-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 16px;\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(TabGroupThemeExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-theme-example',
                templateUrl: 'tab-group-theme-example.html',
                styleUrls: ['tab-group-theme-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TabNavBarBasicExample_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 4);
    ɵɵlistener("click", function TabNavBarBasicExample_a_1_Template_a_click_0_listener($event) { ɵɵrestoreView(_r23); const link_r21 = ctx.$implicit; const ctx_r22 = ɵɵnextContext(); return ctx_r22.activeLink = link_r21; });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const link_r21 = ctx.$implicit;
    const ctx_r20 = ɵɵnextContext();
    ɵɵproperty("active", ctx_r20.activeLink == link_r21);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", link_r21, " ");
} }
/**
 * \@title Basic use of the tab nav bar
 */
class TabNavBarBasicExample {
    constructor() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = undefined;
    }
    /**
     * @return {?}
     */
    toggleBackground() {
        this.background = this.background ? undefined : 'primary';
    }
    /**
     * @return {?}
     */
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
}
TabNavBarBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-nav-bar-basic-example',
                templateUrl: 'tab-nav-bar-basic-example.html',
                styleUrls: ['tab-nav-bar-basic-example.css'],
            },] },
];
/** @nocollapse */ TabNavBarBasicExample.ɵfac = function TabNavBarBasicExample_Factory(t) { return new (t || TabNavBarBasicExample)(); };
/** @nocollapse */ TabNavBarBasicExample.ɵcmp = ɵɵdefineComponent({ type: TabNavBarBasicExample, selectors: [["tab-nav-bar-basic-example"]], decls: 8, vars: 2, consts: [["mat-tab-nav-bar", "", 3, "backgroundColor"], ["mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "disabled", ""], ["mat-raised-button", "", 1, "example-action-button", 3, "click"], ["mat-tab-link", "", 3, "active", "click"]], template: function TabNavBarBasicExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nav", 0);
        ɵɵtemplate(1, TabNavBarBasicExample_a_1_Template, 2, 2, "a", 1);
        ɵɵelementStart(2, "a", 2);
        ɵɵtext(3, "Disabled Link");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "button", 3);
        ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_4_listener($event) { return ctx.toggleBackground(); });
        ɵɵtext(5, " Toggle background\n");
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 3);
        ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_6_listener($event) { return ctx.addLink(); });
        ɵɵtext(7, " Add link\n");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("backgroundColor", ctx.background);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.links);
    } }, directives: [MatTabNav, NgForOf, MatTabLink, MatButton], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-right: 8px;\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(TabNavBarBasicExample, [{
        type: Component,
        args: [{
                selector: 'tab-nav-bar-basic-example',
                templateUrl: 'tab-nav-bar-basic-example.html',
                styleUrls: ['tab-nav-bar-basic-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TabNavBarBasicExample.prototype.links;
    /** @type {?} */
    TabNavBarBasicExample.prototype.activeLink;
    /** @type {?} */
    TabNavBarBasicExample.prototype.background;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    TabGroupAlignExample,
    TabGroupAnimationsExample,
    TabGroupAsyncExample,
    TabGroupBasicExample,
    TabGroupCustomLabelExample,
    TabGroupDynamicExample,
    TabGroupDynamicHeightExample,
    TabGroupHeaderBelowExample,
    TabGroupLazyLoadedExample,
    TabGroupStretchedExample,
    TabGroupThemeExample,
    TabNavBarBasicExample,
];
class TabGroupExamplesModule {
}
TabGroupExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatTabsModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ TabGroupExamplesModule.ɵmod = ɵɵdefineNgModule({ type: TabGroupExamplesModule });
/** @nocollapse */ TabGroupExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function TabGroupExamplesModule_Factory(t) { return new (t || TabGroupExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatTabsModule,
            ReactiveFormsModule,
        ]] });
/*@__PURE__*/ ɵɵsetNgModuleScope(TabGroupExamplesModule, { declarations: [TabGroupAlignExample,
        TabGroupAnimationsExample,
        TabGroupAsyncExample,
        TabGroupBasicExample,
        TabGroupCustomLabelExample,
        TabGroupDynamicExample,
        TabGroupDynamicHeightExample,
        TabGroupHeaderBelowExample,
        TabGroupLazyLoadedExample,
        TabGroupStretchedExample,
        TabGroupThemeExample,
        TabNavBarBasicExample], imports: [CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,
        ReactiveFormsModule], exports: [TabGroupAlignExample,
        TabGroupAnimationsExample,
        TabGroupAsyncExample,
        TabGroupBasicExample,
        TabGroupCustomLabelExample,
        TabGroupDynamicExample,
        TabGroupDynamicHeightExample,
        TabGroupHeaderBelowExample,
        TabGroupLazyLoadedExample,
        TabGroupStretchedExample,
        TabGroupThemeExample,
        TabNavBarBasicExample] });
/*@__PURE__*/ ɵsetClassMetadata(TabGroupExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatTabsModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null);

export { TabGroupAlignExample, TabGroupAnimationsExample, TabGroupAsyncExample, TabGroupBasicExample, TabGroupCustomLabelExample, TabGroupDynamicExample, TabGroupDynamicHeightExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample, TabGroupStretchedExample, TabGroupThemeExample, TabNavBarBasicExample, TabGroupExamplesModule };
//# sourceMappingURL=tabs.js.map
