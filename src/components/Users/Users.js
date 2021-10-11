import './users.css'
// import Details from '../Details/Details'
import {Route, NavLink, useParams} from 'react-router-dom'

export default function Users(props) {
    let list = props.data 
  
    // function findUser(id) {
    //     return list.find((item, index)=> {
    //         let url = item.picture.large
    //         let splitUrl = url.split("/")
    //         let getId = splitUrl[splitUrl.length-1].split(".")
    //         return id == parseInt(getId[0])
    //     })
    // }

    return (
        <div>
          <h1>List of Users</h1>
            <div className="user_container">
                <div className="user_list">
                {list.map((item, index) => (
                    <div key={`${item.name.first} ${item.name.last}`} className="user_card">
                        <div className="user_info">
                            <img src={item.picture.medium} alt=""></img>
                            <p>{`${item.name.first} ${item.name.last}`}</p>
                            <p>{item.email}</p>
                            <p>{item.cell}</p>
                        </div>
                    </div>
                ))}
                </div>
          </div>

          {/* <div className="user-details">
                <Route path="/users/:id">
                    <Details findUser={findUser} data={props.data}/>
                </Route>
          </div> */}
        </div>
    )
}
