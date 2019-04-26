import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { ChatModule } from './chat/chat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule} from './material-modules';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PublicquestionsComponent } from './components/publicquestions/publicquestions.component';
import { RewardedquestionsComponent } from './components/rewardedquestions/rewardedquestions.component';
import { ConversationsComponent } from './components/conversations/conversations.component';
import { BroadcastingsComponent } from './components/broadcastings/broadcastings.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './features/authentication';
import { AppRoutingModule } from './app-routing.module';
import { AppConfigModule } from './config';

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
    AppConfigModule,
    AuthModule,
    ChatModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})


export class AppModule { }
