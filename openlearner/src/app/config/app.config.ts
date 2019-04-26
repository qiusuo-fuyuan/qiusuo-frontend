export interface PaymentProviderConfig {
    name:string;
    clientId:string;
}



export interface LoginProviderConfig {
    name:string;
    clientId:string;
}


export interface AppConfig {
    env: {
        name: string;
    };

    logging: {
        console:boolean;
    };

    loginProviders: LoginProviderConfig[];
    paymentProviders: PaymentProviderConfig[];
    
    apiServer: {
        backendUrl: string;
    }
}