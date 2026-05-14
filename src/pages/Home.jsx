import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import InstagramFeed from '../components/InstagramFeed'
import VideoSection from '../components/VideoSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <VideoSection />
      <Testimonials />
      <InstagramFeed />
    </main>
  )
}
