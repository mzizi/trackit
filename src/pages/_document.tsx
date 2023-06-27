import dotenv from "dotenv-safe";
import { Head, Html, Main, NextScript } from "next/document";

dotenv.config();

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
