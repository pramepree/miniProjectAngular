"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroFormTemplateComponent = void 0;
var core_1 = require("@angular/core");
var alter_ego_directive_1 = require("../shared/alter-ego.directive");
var common_1 = require("@angular/common");
var forbidden_name_directive_1 = require("../shared/forbidden-name.directive");
var identity_revealed_directive_1 = require("../shared/identity-revealed.directive");
var forms_1 = require("@angular/forms");
var HeroFormTemplateComponent = /** @class */ (function () {
    function HeroFormTemplateComponent() {
        this.powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
        this.hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
    }
    HeroFormTemplateComponent = __decorate([
        core_1.Component({
            standalone: true,
            selector: 'app-hero-form-template',
            templateUrl: './hero-form-template.component.html',
            styleUrls: ['./hero-form-template.component.css'],
            imports: [
                forbidden_name_directive_1.ForbiddenValidatorDirective,
                forms_1.FormsModule,
                identity_revealed_directive_1.IdentityRevealedValidatorDirective,
                common_1.NgFor,
                common_1.NgIf,
                alter_ego_directive_1.UniqueAlterEgoValidatorDirective,
            ]
        })
    ], HeroFormTemplateComponent);
    return HeroFormTemplateComponent;
}());
exports.HeroFormTemplateComponent = HeroFormTemplateComponent;
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/ 
