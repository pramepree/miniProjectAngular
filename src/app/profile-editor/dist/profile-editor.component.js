"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileEditorComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var ProfileEditorComponent = /** @class */ (function () {
    function ProfileEditorComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.profileForm = this.formBuilder.group({
            firstName: ['', forms_2.Validators.required],
            lastName: [''],
            address: this.formBuilder.group({
                street: [''],
                city: [''],
                state: [''],
                zip: ['']
            }),
            aliases: this.formBuilder.array([this.formBuilder.control('')])
        });
    }
    Object.defineProperty(ProfileEditorComponent.prototype, "aliases", {
        get: function () {
            return this.profileForm.get('aliases');
        },
        enumerable: false,
        configurable: true
    });
    ProfileEditorComponent.prototype.updateProfile = function () {
        this.profileForm.patchValue({
            firstName: 'Nancy',
            address: {
                street: '123 Drew Street'
            }
        });
    };
    ProfileEditorComponent.prototype.addAlias = function () {
        this.aliases.push(this.formBuilder.control(''));
    };
    ProfileEditorComponent.prototype.onSubmit = function () {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
    };
    ProfileEditorComponent = __decorate([
        core_1.Component({
            standalone: true,
            selector: 'app-profile-editor',
            templateUrl: './profile-editor.component.html',
            styleUrls: ['./profile-editor.component.css'],
            imports: [common_1.NgFor, forms_1.ReactiveFormsModule, common_1.JsonPipe]
        })
    ], ProfileEditorComponent);
    return ProfileEditorComponent;
}());
exports.ProfileEditorComponent = ProfileEditorComponent;
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/ 
