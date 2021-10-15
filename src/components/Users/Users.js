import './users.css'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'

export default function Users(props) {
    console.log(props)
    if(props.data.length === 0) {return <Loader />}
    return (
        <div>
            <div className="user_container">
                <div className="user_list">
                {props.data.map((item, index) => (
                    <Link to={`/users/${item.userId}`}>
                        <div key={`${item.userId}`} className="user_card">
                            <div className="user_info">
                                <img src={item.picture.medium} alt="" className="user_img"></img>
                                <p>{`${item.name.first} ${item.name.last}`}</p>
                                <p>{item.email}</p>
                                <p>{item.cell}</p>
                            </div>
                        </div>
                    </Link>
                ))}
                </div>
          </div>
        </div>
    )
}
