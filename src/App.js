import React , {Component} from 'react';
import Header from './components/Header';
import './App.css';
import About from './components/About';
import Walla from './components/Walla';
import Server from './components/Server';
import Vimag from './components/Vimag';
import Yara from './components/Yara';
import Get from './components/Get';
import Tes from './components/Tes';
import Noun from './components/Noun';
import Footer from './components/Footer';



class App extends Component {

  render () {
  return (
  <>
  <Header/>
  <About/>
  <Walla/>
  <Server/>
  <Vimag/>
  <Yara/>
  <Get/>
  <Tes/>
  <Noun/>
  <Footer/>
  </>
  );
}
}

export default App;
