import { Client as StompClient, StompConfig } from 'Lib/stomp';
import React, { ReactNode } from 'react';
import { StompContext } from './context';

type StompProviderProps = {
  config: StompConfig
  children: ReactNode[] | ReactNode
};


/* What we need to do here is to create the stomp client. And set it as the value 
 for the StompContext
*/
export const StompProvider = (props: StompProviderProps) => {
  const { config, children } = props;
  const client: StompClient = new StompClient(config);

  client.onConnect = function (frame) {
    console.log(frame);
    // Do something, all subscribes must be done is this callback
    // This is needed because this will be executed after a (re)connect
  };

  client.onStompError = function (frame) {
    // Will be invoked in case of error encountered at Broker
    // Bad login/passcode typically will cause an error
    // Complaint brokers will set `message` header with a brief message. Body may contain details.
    // Compliant brokers will terminate the connection after any error
    console.log(`Broker reported error: ${  frame.headers.message}`);
    console.log(`Additional details: ${  frame.body}`);
  };

  client.activate();
  return (
    <StompContext.Provider value={client}>
      {children}
    </StompContext.Provider> 
  );
};