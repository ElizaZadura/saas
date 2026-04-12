import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Business Idea Generator</title>
        <meta name="description" content="AI-powered business idea generation" />
      </Head>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}