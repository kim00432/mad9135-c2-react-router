import {useParams} from 'react-router-dom'


export default function Details(props) {
     function findUser(id) {
        return props.data.find((item, index)=> {
            return id == parseInt(item.userId)
        })
    }

    // const [page, setPage] = useState({})

    let { id } = useParams() //hooks from React router dom
    let data = findUser(id)
    console.log(data)

    // useEffect(()=> {
    //     let data = findUser(id)
    //     setPage(data)
    //     //wait until after render
    // }, [])

    return (
        <div className="user-details">   
            <img src={data.picture.large} alt=""></img>
            <p>{data.name.first} {data.name.last}</p>
            <p>Cell: {data.cell}</p>
            <p>Email: {data.email}</p>
            <p>Address: {data.address}</p>
            <p>Login Information</p>
            <p>Username: {data.login.username}, Password: {data.login.password}</p>
            <p>UUID: {data.login.uuid}</p>
        </div>
    )
}
