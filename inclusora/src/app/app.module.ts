import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InclusionCheckButtonComponent } from './inclusion-check-button/inclusion-check-button.component';
import { TextInputComponent } from './text-input/text-input.component';
import { FormComponent } from './form/form.component';
import {MatIconModule} from '@angular/material/icon';
import { PeopleImageComponent } from './people-image/people-image.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SuggestionCardComponent } from './suggestion-card/suggestion-card.component';
import {MatCardModule} from '@angular/material/card';
import { ResultsPanelComponent } from './results-panel/results-panel.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { NoWordsFoundMessageComponent } from './no-words-found-message/no-words-found-message.component';


@NgModule({
  declarations: [
    AppComponent
  , TitleBarComponent, InclusionCheckButtonComponent, TextInputComponent, FormComponent, PeopleImageComponent, FooterComponent, SuggestionCardComponent, ResultsPanelComponent, ResultsPageComponent, NoWordsFoundMessageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
