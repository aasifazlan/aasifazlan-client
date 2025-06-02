import Hero from '../components/Hero';
import ShoCase from '../components/ShoCase';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SampleWebsites from '../components/SampleWebsites';
// import AboutMeShowcase from '../components/AboutMeShowcase';
 

const Home = () => {
  return (
    <>
      <Hero />
      
      <Skills />
       
     
      <section
        id="projects"
        className="min-h-screen bg-[#151515] text-black py-20 px-6"
      >
        <Projects />
      </section>
      
      <ShoCase />
      <section id='artilces'>
        <SampleWebsites/>
      </section>
      
       <Services />
      
    </>
  );
};

export default Home;
