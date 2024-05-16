import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { YourService } from './your-service.service'; // import YourService
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavtopComponent } from './navtop/navtop.component';
import { TableComponent } from './table/table.component';
import { TextinputComponent } from './textinput/textinput.component';
import { OopComponent } from './oop/oop.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormTemplateComponent } from './hero-form-template/hero-form-template.component';

@NgModule({
  declarations: [
      AppComponent,
      NavtopComponent,
      TableComponent,
      TextinputComponent,
      OopComponent,
      HeroFormTemplateComponent,
  ],
  providers: [YourService],
  bootstrap: [AppComponent],
  imports: [
      BrowserModule,
      HttpClientModule, FormsModule, ReactiveFormsModule,
      NameEditorComponent,
      ProfileEditorComponent
  ]
})
export class AppModule { }
