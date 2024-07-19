import About from "./components/about/page";
import Contact from "./components/contact/page";
import Feedback from "./components/feedback/page";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
import Hero from "./components/hero/page";
import Insight from "./components/insight/page";
import Member from "./components/member/page";
import Passion from "./components/passion/page";
import Service from "./components/service/page";
import Video from "./components/video/page";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <Video />
      <About />
      <Service />
      <Passion />
      <Member />
      <Feedback />
      <Contact />
      <Insight />
      <Footer />
    </main>
  );
}
