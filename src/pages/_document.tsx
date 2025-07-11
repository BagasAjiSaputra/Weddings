import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"
          defer
        ></script>
        <script
          src="https://cdn.jsdelivr.net/nom/gsap@3.12.5/dist/ScrollTrigger.min.js"
          defer
        ></script>
      </Head>

      <body className="antialiased bg-[FAF8F6]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
