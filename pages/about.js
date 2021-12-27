import Layout from '../components/Layout'
import AboutCard from '../components/AboutCard'
import TechIcon from '../components/TechIcon'
import List from '../components/List'
import IconsList from '../components/IconsList'
import styles from '../styles/About.module.css'


const About = () => {
    return (
        <main>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.aboutIntro}>
                A full stack developer who is always looking to learn and grow, have some experience in databases design and administration,
                machine learning, front end and back end development. A problem solver, independent employee with high attention to
                detail, equipped with diverse skills, able to work independently as well as collaborate in a team setting.
            </p>

            <AboutCard title="My Education" >
                <List items={['Master degree in computer science from the The University '
                    + 'of Science and Technology – Houari Boumediene, Algiers, Algeria.']}>
                </List>
            </AboutCard>

            <AboutCard title="My Services" >
                <List items={['Frontend and backend development', 'Rest Apis',
                    'Static sites and server side rendering for better SEO']}>
                </List>
            </AboutCard>
            <AboutCard title="My Skills" >
                <IconsList title="Languages">
                    <TechIcon imgSrc="/icons/html5.svg" text="HTML" />
                    <TechIcon imgSrc="/icons/css3.svg" text="CSS" />
                    <TechIcon imgSrc="/icons/javascript.svg" text="JavaScript" />
                    <TechIcon imgSrc="/icons/python.svg" text="Python" />
                    <TechIcon imgSrc="/icons/sql.svg" text="SQL" />
                </IconsList>
                <IconsList title="Frameworks and libraries">
                    <TechIcon imgSrc="/icons/reactjs.svg" text="ReactJS" />
                    <TechIcon imgSrc="/icons/nodejs.svg" text="Node.js" />
                    <TechIcon imgSrc="/icons/express.svg" text="Express" />
                    <TechIcon imgSrc="/icons/nextjs.svg" text="Next.js" />
                    <TechIcon imgSrc="/icons/bootstrap.svg" text="Bootstrap" />
                    <TechIcon imgSrc="/icons/material-ui.svg" text="Material-UI" />
                    <TechIcon imgSrc="/icons/tailwind.svg" text="Tailwind CSS" />
                    <TechIcon imgSrc="/icons/flask.svg" text="Flask" />
                </IconsList>
                <IconsList title="Databases">
                    <TechIcon imgSrc="/icons/mongodb.svg" text="MongoDB" />
                    <TechIcon imgSrc="/icons/firebase.svg" text="Firebase" />
                    <TechIcon imgSrc="/icons/oracle.svg" text="Oracle" />
                </IconsList>
                <IconsList title="Other tools">
                    <TechIcon imgSrc="/icons/figma.svg" text="Figma" />
                    <TechIcon imgSrc="/icons/git.svg" text="Git" />
                    <TechIcon imgSrc="/icons/postman.svg" text="Postman" />
                </IconsList>
            </AboutCard>
        </main>
    )
}
About.getLayout = page => (
    <Layout>
        {page}
    </Layout>
)
export default About