import './App.css'
import Routing from './routes/Routing'
import { CookiesProvider } from 'react-cookie';


function App() {
  

  return (
     <CookiesProvider>
        <div>
          <Routing/>
        </div>
      </CookiesProvider>
  )
}

export default App