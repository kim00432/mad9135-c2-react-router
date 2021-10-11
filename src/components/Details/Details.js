import {useParams, useLocation, useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function Details(props) {
    // console.log(props)
    // // props.item - will ne our single planet object 

    // const [detail, setDetail] = useState({})


    let { id } = useParams() //hooks from React router dom
    // let loc = useLocation()
    // let history = useHistory()
   
    // useEffect(()=> {
    //     let p = props.findUser(id)
    //     setDetail(p)
    //     //wait until after render
    // }, [])

    return (
        <div className="user-details">
            <p>{id}</p>      
            <p>This is the user details</p>
        </div>
    )
}
