import React from 'react';
import { StompContext } from './context';

export const StompProvider = ({ stompClient: StompClient }) => {

  return (
    <StompContext.Provider value={stompClient}>
      {children}
    </StompContext.Provider> 
  );
};