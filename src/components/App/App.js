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
    let url = `https://randomuser.me/api/?results=24&nat=au,ca,nz,gb,us&format=json&seed=kim00432`
    let resp = await fetch(url)
    let data = await resp.json()
    destructuring(data.results)
  }
  useEffect(()=>{
    //all useEffect functions run on the initial render of the components
    console.log('useEffect was called')
    fetchData()
  }, []) //here we are monitoring for changes to name 
  console.log(data)

  function destructuring(data) {
    let addressArr = []
    for(let i=0; i < data.length; i++) {
        addressArr[i] = {
            street: `${data[i].location.street.number} ${data[i].location.street.name}`, 
            city: data[i].location.city, 
            state: data[i].location.state, 
            country: data[i].location.country,
            postcode: data[i].location.postcode
        }
    }
    let fullAddressArr = addressArr.map(a => {
        return `${a.street}, ${a.city}, ${a.state}, ${a.country}, ${a.postcode}`
    })
    
    let index = 0;
    let newArr = [];
    data.forEach((element) => {
        let url = element.picture.large.split("/")
        let getId = url[url.length-1].split(".")
        let newObj = { 
            userId: parseInt(getId[0]),
            address: fullAddressArr[index],
            ...element
        }
        newArr.push(newObj)
        index++;
    });
    console.log(newArr)
    setData(newArr)
    //new array being put into 'data'
    //changing a state variable tells react to look and see
    //if something needs to be re-rendered 
  }

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
            <Route path="/users/:id">
              <Details data={data}/>
            </Route>
            <Route path="/addresses">
              <Addresses data={data}/>
            </Route>
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </main>
    </div>
  );
}

export default App;
