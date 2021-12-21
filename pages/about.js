import Layout from '../components/Layout'

const About =  () => {
    return (
        <div>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo ut inventore deleniti aperiam atque et sapiente totam id magni ipsa consectetur ratione minus aliquam labore odit, dolorum tenetur officiis.</p>
        </div>
    )
}
About.getLayout = page => (
    <Layout>
        {page}
    </Layout>
)
export default About