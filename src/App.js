import Header from '../src/components/header/header.jsx'
import Invest from '../src/components/invest/invest.jsx'
import Earn from './components/earn/earn.jsx'
import Innovations from './components/innovations/innovations.jsx';
import Roadmap from './components/roadmap/roadmap.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Invest />
      <Earn />
      <Innovations />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
