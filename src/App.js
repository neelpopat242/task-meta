import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './components/Navb';
import Title from './components/Title';
import CardClass from './components/CardClass';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navb/>
      <Title/>
      <CardClass/>
      <Footer/>
    </div>
  );
}

export default App;
