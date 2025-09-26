import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Recipes from "./components/Recipes"
import ChefSection from "./components/ChefSection"
import InstagramFeed from "./components/InstagramFeed"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Recipes />
      <ChefSection />
      <InstagramFeed />
      <Newsletter />
      <Footer />
    </>
  )
}
