import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ExporterService } from './services/exporter.service'

import { MatTableModule, MatButtonModule, MatIconModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { DataTableComponentComponent } from './data-table-component/data-table-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
     MatIconModule,
  MatInputModule,
  MatNativeDateModule
  ],
  providers: [ExporterService],
  bootstrap: [AppComponent]

})
export class AppModule { }
