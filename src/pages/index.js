import Acomplishments from "../components/Acomplishments/Acomplishments";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Aakashpic from "../components/AakashAvtar/Aakashpic";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <Aakashpic />
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
