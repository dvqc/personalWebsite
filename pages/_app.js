import '../styles/globals.scss'

function MyApp(props){
    const { Component, pageProps } = props

    const getLayout = Component.getLayout || (page => page)

    return getLayout(<Component {...pageProps}></Component>)
}

export default MyApp