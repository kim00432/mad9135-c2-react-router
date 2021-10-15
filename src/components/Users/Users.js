import './users.css'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'

export default function Users(props) {
    if(props.data.length === 0) {return <Loader />}
    return (
        <div>
            <div className="user_container">
                <div className="user_list">
                {props.data.map((item, index) => (
                    <Link to={`/users/${item.userId}`} key={`${item.userId}`}>
                        <div className="user_card">
                            <div className="user_info">
                                <img src={item.picture.medium} alt="" className="user_img"></img>
                                <p className="user_info_name">{`${item.name.first} ${item.name.last}`}</p>
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
