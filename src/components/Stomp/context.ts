import { createContext } from 'react';
import { Client as StompClient } from 'src/lib';

export const StompContext = createContext<StompClient>(null);