
import './App.css';
  import {SideBar} from './Components/SideBar';
import { SignUp } from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <div className='flex'>
      {/* <SideBar/> */}
      <SignUp/>
      </div>
   
    </div>
  );
}

export default App;
