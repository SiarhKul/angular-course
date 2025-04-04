import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [


  ],
  bootstrap: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {
}
