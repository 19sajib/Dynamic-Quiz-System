import './App.css';
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'

import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector }from 'react-redux'


function App() {

  const user = useSelector((state)=> state.authReducer.authData)

  return (
    <div>
      <Routes>
      <Route 
               path="/" 
               element={ user ? <Navigate to = "home" /> : <Navigate to = "auth" /> }
           />

          <Route
                path="/home"
                element={ user ? <Home /> : <Navigate to = "../auth" /> }
          />      

          <Route 
                path="auth"
                element={ user ? <Navigate to = "../home"/> : <Auth /> }
          />  

         <Route
                path="/quiz/:id"    
                element={ user ? <Quiz /> : <Navigate to = "../auth" /> } 
          /> 

      </Routes>
    </div>
  );
}

export default App;
