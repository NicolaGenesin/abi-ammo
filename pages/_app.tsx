import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Bender Regular",
    body: "Bender Regular",
  },
  colors: {
    vulcan: {
      800: "#383932",
      850: "#232321",
      900: "#131312",
      950: "#191c1c",
      1000: "#131313",
      1050: "#101010",
    },
    tarkovYellow: {
      10: "#55877f70",
      50: "#877f70",
      100: "#dbc59c",
    },
    vanishedWhite: {
      100: "#4d5154",
    },
    purple: {
      200: "#E9D8FD",
      300: "#D6BCFA",
      600: "#805ad5",
      700: "#714dbf",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Component {...pageProps} />
      </Box>
      <style jsx global>{`
        html,
        body {
          height: 100% !important;
          width: 100% !important;
          background-color: #111 !important;
          background-image: url(/background.jpeg) !important;
          background-repeat: no-repeat !important;
          background-attachment: fixed !important;
          background-size: cover !important;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </ChakraProvider>
  );
}
