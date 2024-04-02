import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home';
import Show from './views/Show';
import Create from './views/Create';
import CreateAccount from './views/CreateAccount';
import Login from './views/Login';



function App() {
  return (
    <>
      {/* {set up routes} */}
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Home />} />
        <Route path='/show' element={<Show/>} />

        {/* create Budget Route */}
        <Route path='/create' element={<Create />} />

        {/* This is the create account route */}
        <Route path='/create/account' element={<CreateAccount />} />

        {/* log in Route  */}
        <Route path='/login' element={<Login />} />

      </Routes>
    </>
  );
}

export default App
