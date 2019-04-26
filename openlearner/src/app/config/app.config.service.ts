import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppConfig} from './app.config';
import { GoogleLoginProvider, AuthServiceConfig, AuthServiceConfigItem} from '../features/authentication';

@Injectable()
export class AppConfigService implements OnInit{
    private settings: AppConfig;
    private authServiceConfig: AuthServiceConfig;

    constructor(private http: HttpClient) {
    
    }

    ngOnInit() {
        this.load()
    }

    load() {
        const configFile = `assets/config/config.${environment.name}.json`;;
        return new Promise<void>((resolve,reject) => {
            this.http.get(configFile).toPromise().then((response:AppConfig) => {
                this.settings = response;
                this.authServiceConfig = this.createAuthConfig();

                resolve();
            }).catch((response : any) => {
                reject(`Could not load file '${configFile}': ${JSON.stringify(response)}`);
            });
        });
    }

    createAuthConfig(): AuthServiceConfig {
        let loginProviders: AuthServiceConfigItem[] = new Array();

        this.settings.loginProviders.forEach(logInProviderConfig => {
            if(logInProviderConfig.name == 'Google') {
                loginProviders.push(
                {
                    id: GoogleLoginProvider.PROVIDER_ID,
                    provider: new GoogleLoginProvider(logInProviderConfig.clientId)
                });
            }
        });
        return new AuthServiceConfig(loginProviders);
    }

    getAuthConfig():AuthServiceConfig {
        return this.authServiceConfig;
    }
}