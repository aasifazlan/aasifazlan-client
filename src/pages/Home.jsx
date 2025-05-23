import Hero from '../components/Hero';
import ShoCase from '../components/ShoCase';
import ShowcaseSection from '../components/ShowcaseSection';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
 

const Home = () => {
  return (
    <>
      <Hero />
      <ShoCase />
      <ShowcaseSection />
      <Services />
      <section
        id="projects"
        className="min-h-screen bg-[#151515] text-black py-20 px-6"
      >
        <Projects />
      </section>
      <Skills />
      
    </>
  );
};

export default Home;
