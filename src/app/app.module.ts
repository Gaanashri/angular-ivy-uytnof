import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, MatIconModule, HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
