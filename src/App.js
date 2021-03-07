
import './App.css';
import Home from './Home'
import Nave from './Nave'
import Gallery from './Gallery'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'
import NotAPage from './NotAPage'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
   <Nave />
<Switch>
<Route exact path='/' component={Home} />
<Route path='/gallery' component={Gallery} />
<Route path='/contact' component={Contact} />
<Route component={NotAPage} />


    <Home className="mt-5" />  



</Switch>

    <Footer className="mt-5" />  

       
  
    </div>
  );
}

export default App;
