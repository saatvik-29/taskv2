import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Feature from '@/components/Feature';
import ProdFeatures from '@/components/ProdFeatures';
import Testimoniol from '@/components/Testimonial';
import Blog from '@/components/Blog';
import LogoProud from '@/components/LogoProud';
import Contactus from '@/components/Contactus';
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Feature />
      <ProdFeatures />
      <Testimoniol />
      <Blog />
      <LogoProud/>  
      <Contactus />
    </main>
    
  );
}
