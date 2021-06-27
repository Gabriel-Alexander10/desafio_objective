import { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

import { HeroesProvider } from '../contexts/HeroesContext';

import GlobalStyle  from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroesProvider>
        <Component {...pageProps} />

        <GlobalStyle />
      </HeroesProvider>
    </QueryClientProvider>
  )
}

