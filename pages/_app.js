import '../styles/globals.css'

function MyApp({ Component, pageProps }){
    const { Component, pageProps } = this.props

    const getLayout = Component.getLayout || (page => page)

    return getLayout(<Component {...pageProps}></Component>)
}

export default MyApp