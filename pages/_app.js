import '../styles/globals.css'
import App from 'next/App'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    const getLayout = Component.getLayout || (page => page)

    return getLayout(<Component {...pageProps}></Component>)
  }
}

export default MyApp