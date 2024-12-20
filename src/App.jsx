
import LoginPage from './Components/login/login'
import Tools from './Components/tools/tools'

function App() {
const user = localStorage.getItem('legitimate')
  return (
    <>
    {user === 'anonymous' ?
    <Tools /> : 
     <LoginPage />}
    </>
  )
}

export default App
