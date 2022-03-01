import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CrudComponent } from './crud.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

@NgModule({
  declarations: [
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent, CrudComponent],
  imports: [
    HttpClientModule,
    FormsModule
  ]
})
export class CrudModule { }
