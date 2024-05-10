import Login from './componets/Login'
import Profile from './componets/Profile'
import './App.css'
import UserContextProvider from './context/UserContextProvide'

function App() {

  return (
    <UserContextProvider>
       <h1>Hello , Tej Here</h1>
       <Login/>
       <Profile/>
    </UserContextProvider>
  )
}

export default App