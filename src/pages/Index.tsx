import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import MissionValues from '@/components/MissionValues';
import Creators from '@/components/Creators';
import Join from '@/components/Join';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <MissionValues />
        <Creators />
        <Join />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
