import "./App.css";
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  darkTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { MintNFT } from "./components/MintNft";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <main className="bg min-h-screen">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider coolMode>
            <MintNFT />
            <Footer />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </main>
  );
}

export default App;
