import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MustMatchDirective } from './utils/must-match.directive';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  declarations: [AppComponent, TemplateFormComponent,MustMatchDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
