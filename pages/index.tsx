import Featured from "../components/featured";
import TopBar from "../components/topbar";
import Phrases from "../components/phrases";
import Footer from "../components/footer";

export default function App() {
  return (
    <div className="app">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <TopBar/>
          <Featured/>
          <Phrases/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
