import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'


export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [ sepolia ],
  connectors: [
    injected(),
    // metaMask(),
  ],
  transports: {
    // [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

// const config = getDefaultConfig({
//     appName: 'RainbowKit demo',
//     projectId: 'YOUR_PROJECT_ID',
//     chains: [mainnet],
//     transports: {
//       [mainnet.id]: http(),
//     },
// })