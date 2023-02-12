import '@/styles/globals.css'
import Head from "next/head";
import Layout from '@/layout';
import { GlobalContextProvider } from '@/context/GlobalContext';
// add bootstrap css 
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'bootstrap/dist/css/bootstrap.css'


export default function App({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Component {...pageProps} />
        </Layout>
    </GlobalContextProvider>
  );
}
