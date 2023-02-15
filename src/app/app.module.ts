import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { BodyComponent } from './body/body.component';
import { OptionsComponent } from './body/options/options.component';
import { CollectionsComponent } from './body/collections/collections.component';
import { LocalitiesComponent } from './localities/localities.component';
import { GetappComponent } from './body/getapp/getapp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    OptionsComponent,
    CollectionsComponent,
    LocalitiesComponent,
    GetappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
