import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from './screens/ProfileScreen';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL
          })
        )
      }

      else {
        dispatch(
          logout(
            {}
          )
        )
      }
    })

    return unsubscribe;
  }, [])

  return (
    <div className="App">
      {!user ? (
        <LoginScreen />
      ) : (
        <Router>
          <Routes>  
            <Route index element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
