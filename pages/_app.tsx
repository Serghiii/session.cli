import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import axios from 'axios';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store'

function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = process.env.API_URL;
  axios.defaults.withCredentials = true

  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
