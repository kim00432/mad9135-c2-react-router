import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Users from '../Users/Users';
import Details from '../Details/Details';
import Addresses from '../Addresses/Addresses';
import {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
  const [data, setData] = useState([]) 

  async function fetchData() {
    function generateRandomNum(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const randomNum = generateRandomNum(16, 32)
    let url = `https://randomuser.me/api/?results=${randomNum}&format=json&nat=au,ca,nz,gb,us&seed=kim00432`
    let resp = await fetch(url)
    let data = await resp.json()
    setData(data.results) //new array being put into 'data'
    //changing a state variable tells react to look and see
    //if something needs to be re-rendered 
  }
  useEffect(()=>{
    //all useEffect functions run on the initial render of the components
    console.log('useEffect was called')
    fetchData()
  }, []) //here we are monitoring for changes to name 
  console.log(data)

  return (
    <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path="/users" exact>
              <Users data={data}/>
            </Route>
            <Route path="/users/:id" exact>
              <Details data={data}/>
            </Route>
            <Route path="/addresses" exact>
              <Addresses data={data}/>
            </Route>
            <Route path="/" exact component={Home} />
            <Redirect to='/' />
          </Switch>
        </main>
    </div>
  );
}

export default App;
