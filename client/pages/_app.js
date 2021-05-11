import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';

import TopNav from '../components/TopNav'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <TopNav />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp;
