import './details.css'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export default function Details(props) {
    function findUser(id) {
        return props.data.find((item, index) => id == parseInt(item.userId))
    }

    let { id } = useParams() //hooks from React router dom
    let detail = findUser(id)
    console.log(detail)

    if(props.data.length === 0) {return <Loader />}
    if(!detail) {return <Redirect to="/" />}

    return (
        <div className="user_details_container">  
            <div className="user_details">
                <div className="user_details_info1">
                    <p className="user_name">{detail.name.first} {detail.name.last}</p>
                    <img src={detail.picture.large} alt=""></img>
                </div>
                <div className="user_details_info2">
                    <p className="user_cell">Cell: <span className="user_cell_info">{detail.cell}</span></p>
                    <p className="user_email">Email: <span className="user_email_info">{detail.email}</span></p>
                    <p className="user_address">Address: <span className="user_address_info">{detail.address}</span></p>
                    <div className="user_login">
                        <p className="user_login_title">Login Information</p>
                        <p className="user_login_username">Username: {detail.login.username}</p>
                        <p className="user_login_password">Password: {detail.login.password}</p>
                        <p className="user_login_uuid">UUID: {detail.login.uuid}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
