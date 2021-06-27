import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import {Switch, Route} from 'react-router-dom'
import Popular from './components/Movies/Popular';
import About from './components/About/About';
import Soon from './components/Movies/Soon'
import Ratings from './components/Movies/Ratings'
import Categories from './components/Categories/Categories';

function App() {

  return (
    <>
    <Header/>
    <div className='app'>
      <div className='wrapper'>
        <Switch>
          <Route path='/' component={Content} exact/>
          <Route path='/popular' component={Popular}/>
          <Route path='/ratings' component={Ratings}/>
          <Route path='/soon' render={(props) => (
            <Soon {...props} />)}/>
          <Route path='/about/:id' component={About} />
          <Route path='/categories' component={Categories} />
        </Switch>
      </div>
    </div>
    </>
  );
}

export default App;
