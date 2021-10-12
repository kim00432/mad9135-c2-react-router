import './users.css'
import { Link } from 'react-router-dom'

export default function Users(props) {
    console.log(props)
    return (
        <div>
          <h1>List of Users</h1>
            <div className="user_container">
                <div className="user_list">
                {props.data.map((item, index) => (
                    <div key={`${item.name.first}${item.name.last}`} className="user_card">
                        <div className="user_info">
                            <img src={item.picture.medium} alt=""></img>
                            <p>{`${item.name.first} ${item.name.last}`}</p>
                            <p>{item.email}</p>
                            <p>{item.cell}</p>
                            <Link to={`/users/${item.userId}`}>More Details</Link>
                        </div>
                    </div>
                ))}
                </div>
          </div>
        </div>
    )
}
