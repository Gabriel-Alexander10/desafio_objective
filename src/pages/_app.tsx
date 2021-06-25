import { AppProps } from 'next/app';

import { HeroesProvider } from '../hooks/HeroesContext';

import GlobalStyle  from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeroesProvider>
      <Component {...pageProps} />

      <GlobalStyle />
    </HeroesProvider>
  )
}

