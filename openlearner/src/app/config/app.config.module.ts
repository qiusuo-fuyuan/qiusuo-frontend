import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfigService} from './app.config.service';
import { AuthServiceConfig } from '../features/authentication';

export function loginProvidersConfig(appConfigService: AppConfigService): AuthServiceConfig {
  return appConfigService.getAuthConfig();
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[AppConfigService,
    {provide:AuthServiceConfig,useFactory:loginProvidersConfig,deps:[AppConfigService]}
  ]
})
export class AppConfigModule { }
