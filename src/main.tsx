import { StrictMode } from "react";
import { Provider } from "@/components/ui/provider";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react";

// TODO: это для темы чтобы передавать в СhakraProvider
// const config = defineConfig({
//   theme: {
//     tokens: {
//       colors: {},
//     },
//   },
// })
// const system = createSystem(config)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*TODO: настройка темы
     в документаци тема передантся именно в ChakraProviderhttps://www.chakra-ui.com/docs/theming/overview 
    !!но при установке там рекмендуется именно Provider -https://www.chakra-ui.com/docs/get-started/installation*/}
    <Provider>
      <App />
    </Provider>

    
  </StrictMode>
);
