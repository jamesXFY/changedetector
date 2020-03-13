import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetectorConsoleComponent } from './components/detector-console/detector-console.component';
import { CountComponent } from './components/ChildComponents/count/count.component';
import { HttpClientModule } from '@angular/common/http';
import { ListenersDirective } from './directives/listeners.directive';
import { UserfilterPipe } from './shared/userfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DetectorConsoleComponent,
    CountComponent,
    ListenersDirective,
    UserfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
