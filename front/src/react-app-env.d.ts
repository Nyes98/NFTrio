/// <reference types="react-scripts" />

import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

declare module "*.json" {
  const value: any;
  export default value;
}
