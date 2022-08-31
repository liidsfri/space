import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './sections/crew/pages/crew/crew.component';
import { DestinationComponent } from './sections/destination/pages/destination/destination.component';
import { DesktopComponent } from './sections/home/pages/desktop/desktop.component';
import { TechnologyComponent } from './sections/technology/pages/technology/technology.component';

const routes: Routes = [
  { path: '', component: DesktopComponent },
  { path: 'destination', component: DestinationComponent},
  { path: 'crew', component: CrewComponent},
  { path: 'technology', component: TechnologyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
