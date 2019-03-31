import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ChatModule } from './chat/chat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule} from './material-modules';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PublicquestionsComponent } from './components/publicquestions/publicquestions.component';
import { RewardedquestionsComponent } from './components/rewardedquestions/rewardedquestions.component';
import { ConversationsComponent } from './components/conversations/conversations.component';
import { BroadcastingsComponent } from './components/broadcastings/broadcastings.component';
import { FormsModule } from '@angular/forms';
import { GoogleSiginProvider } from './services/authentication/providers/google-signin.provider';
import { FacebookSiginProvider } from './services/authentication/providers/facebook-sigin.provider';
import { WechatSiginProvider } from './services/authentication/providers/wechat-sigin.provider';

const appRoutes: Routes = [
  { path: 'login',component: LoginComponent},
  { path:'', redirectTo:'/rooms',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    PublicquestionsComponent,
    RewardedquestionsComponent,
    ConversationsComponent,
    BroadcastingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ChatModule
  ],
  providers: [GoogleSiginProvider],
  bootstrap: [AppComponent]
})


export class AppModule { }
