import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const manifestUrl =
"https://apricot-grubby-booby-751.mypinata.cloud/ipfs/QmaW14koeoQqeCuPNEALxq7tfWbnmKgjMRzrooQxo7FPXT"

root.render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>
);
