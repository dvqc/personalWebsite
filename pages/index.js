import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <main>
      <h1>HomePage</h1>
      <img src="me.jpeg" className="pic" alt="My picture"></img>
      <p>Hey there, My name is Ibrahim and I am a full stack developer </p>
    </main>
  )
}
Home.getLayout = page => (
  <Layout>
    {page}
  </Layout>
)
export default Home
