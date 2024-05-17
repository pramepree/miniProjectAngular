"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var your_service_service_1 = require("./your-service.service"); // import YourService
var forms_1 = require("@angular/forms");
var navtop_component_1 = require("./navtop/navtop.component");
var table_component_1 = require("./table/table.component");
var textinput_component_1 = require("./textinput/textinput.component");
var oop_component_1 = require("./oop/oop.component");
var name_editor_component_1 = require("./name-editor/name-editor.component");
var profile_editor_component_1 = require("./profile-editor/profile-editor.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navtop_component_1.NavtopComponent,
                table_component_1.TableComponent,
                textinput_component_1.TextinputComponent,
                oop_component_1.OopComponent,
            ],
            providers: [your_service_service_1.YourService],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                name_editor_component_1.NameEditorComponent,
                profile_editor_component_1.ProfileEditorComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
