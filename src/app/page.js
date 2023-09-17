
import Projects from '@/pages/Projects';
import Tecnologies from '@/pages/Tecnologies';
import Footer from '../../src/components/footer';
import Navbar from '../../src/components/navbar';
import About from '../../src/pages/About';
import Main from '../../src/pages/Main';

export default function Home() {
  return (<>
    <Navbar />
    <Main />
    <About />
    <Projects />
    <Tecnologies />

    <Footer />
  </>
  )
}
