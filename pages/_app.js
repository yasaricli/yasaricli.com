import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

// Import base styles
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="/favicon.png" type="image/png" rel="icon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i"
          rel="stylesheet"
        />
      </Head>

      <NextNProgress height={4} color="#eee" />
      <Component {...pageProps} />
    </>
  );
}
