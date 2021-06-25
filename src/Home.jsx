
import './App.css';
import Header from './components/Header'
import Choose from './components/Choose'
import Calculator from './components/Calculator';
import Loan from './components/Loan';
import Reviews from './components/Reviews';
import Footer from './components/Footer'

function Home() {
  return (
    
    <div className="Home">
    
    <Header/>
    <Choose/>
    <Calculator/>
    <Loan/>
    <Reviews/>
    <Footer/>
    
    </div>
  );
}

export default Home;
