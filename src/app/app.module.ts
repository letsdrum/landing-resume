import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { WhatIDoingComponent } from './what-i-doing/what-i-doing.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { DialogContactComponent } from './profile/dialog-contact/dialog-contact.component';
import { BottomsheetComponent } from './profile/bottomsheet/bottomsheet.component';
import { MatDialogModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SkillsComponent,
    WhatIDoingComponent,
    InterestsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    ScrollSpyDirective,
    DialogContactComponent,
    BottomsheetComponent
  ],
  entryComponents: [DialogContactComponent, BottomsheetComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatDialogModule,
    OverlayModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
