import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo ut inventore deleniti aperiam atque et sapiente totam id magni ipsa consectetur ratione minus aliquam labore odit, dolorum tenetur officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo ut inventore deleniti aperiam atque et sapiente totam id magni ipsa consectetur ratione minus aliquam labore odit, dolorum tenetur officiis.</p>
    </div>
  )
}
Home.getLayout = page => (
  <Layout>
    {page}
  </Layout>
)
export default Home
