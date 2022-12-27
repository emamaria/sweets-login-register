import AppRouter from './app-routes/AppRouter';

import './main.scss'


function App() {

   console.log(process.env.REACT_APP_API)
  return (
    <div className="App">
    <AppRouter/> 
    </div>
  );
}

export default App;
