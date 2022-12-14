import { useSelector }from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'
import User from './Pages/User';
import Navbar from './Components/Navbar';
import CreateQuiz from './Pages/CreateQuiz';
import QuizSummary from './Pages/QuizSummary';



function App() {

  const user = useSelector((state)=> state.authReducer.authData)

  return (
    <div>
      <Navbar />
      <Routes>
      <Route 
               path="/" 
               element={ user ? <Navigate to = "../home" /> : <Navigate to = "auth" /> }
           />

          <Route
                path="/home"
                element={ user ? <Home /> : <Navigate to = "../auth" /> }
          />      

          <Route 
                path="/auth"
                element={ user ? <Navigate to = "../home"/> : <Auth /> }
          />

          <Route 
                path="/user/:id"
                element={ user ? <User /> : <Navigate to = "../auth"/> }
          />  

         <Route
                path="/quiz/:id"    
                element={ user ? <Quiz /> : <Navigate to = "../auth" /> } 
          /> 

         <Route
                path="/quiz/:id/summary"    
                element={ user ? <QuizSummary /> : <Navigate to = "../auth" /> } 
          /> 

         <Route
                path="/create"    
                element={ user ? <CreateQuiz /> : <Navigate to = "../auth" /> } 
          /> 

      </Routes>
    </div>
  );
}

export default App;
