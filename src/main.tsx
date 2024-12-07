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
     в документаци по темизации  App оборачивается в ChakraProvider https://www.chakra-ui.com/docs/theming/overview 
    !!но при установке там рекмендуется именно Provider. Сюда тему добавить не могу -https://www.chakra-ui.com/docs/get-started/installation*/ }
    <Provider>
      <App />
    </Provider>

{/* TODO: так можно передать тему, но полетит вся разметка😒 */}
    {/* <ChakraProvider  value={system}>      
        <App />      
    </ChakraProvider> */}

  </StrictMode>
);

// TODO: пробовала так внутри provider.tsx - цвета на применяются
// import {
//   ChakraProvider,
//   createSystem,
//   defineConfig,
// } from "@chakra-ui/react";
// import {
//   ColorModeProvider,
//   type ColorModeProviderProps,
// } from "../components/ui/color-mode";

// const config = defineConfig({
//   theme: {
//     tokens: {
//       colors: {
//         primary: { value: "#0FEE0F" },
//         secondary: { value: "#EE0F0F" },
//       },
//     },
//   },
// });

// const system = createSystem(config);

// export function Provider(props: ColorModeProviderProps) {
//   return (
//     <ChakraProvider value={system}>
//           <ColorModeProvider {...props} />
//     </ChakraProvider>
//   );
// }

{/* <Box color="primary" >
  Hello World
</Box> */}