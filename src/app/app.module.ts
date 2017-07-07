
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BolgDtlComponent } from './bolg/bolg-dtl/bolg-dtl.component';
import { BolgListComponent } from './bolg/bolg-list/bolg-list.component';
import { TagcloudComponent } from './header/tagcloud/tagcloud.component';

const routeConfig: Routes = [
   {path:'',redirectTo:'/app-content/app-bolg-list',pathMatch:'full'},
    {path:'app-content',component:ContentComponent,children:[
      {path:'app-bolg-list',component:BolgListComponent},
       {path:'app-bolg-dtl',component:BolgDtlComponent},
    ]},
    {path:'tagcloud',component:TagcloudComponent},
   {path:'blog',component:BolgListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ContentComponent,
    SidebarComponent,
    BolgDtlComponent,
    BolgListComponent,
    TagcloudComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
