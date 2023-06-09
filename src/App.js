import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/New';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friends from './components/Friends/Friends';



const App = (props) => {
  return (

    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav/>
        <div className="app-wrapper-content">
        <Routes>
          <Route path='dialogs/*' element={<Dialogs state={props.state.messagePage}/>} />
          <Route path='profile/*' element={<Profile state={props.state.profilePage}/>} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/friends' element={<Friends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}





export default App;
