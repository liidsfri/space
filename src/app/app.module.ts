import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopComponent } from './sections/home/pages/desktop/desktop.component';
import { HeadComponent } from './sections/head/head.component';
import { DestinationComponent } from './sections/destination/pages/destination/destination.component';
import { CrewComponent } from './sections/crew/pages/crew/crew.component';
import { TechnologyComponent } from './sections/technology/pages/technology/technology.component';
import { DescriptionComponent } from './sections/destination/pages/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    HeadComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
