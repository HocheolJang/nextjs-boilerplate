import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import '../src/styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../src/mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Fragment>
  );
}

export default MyApp;
