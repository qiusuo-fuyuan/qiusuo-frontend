import { createContext } from 'react';

export type StompClient = any;

export const StompContext = createContext<StompClient>(null);