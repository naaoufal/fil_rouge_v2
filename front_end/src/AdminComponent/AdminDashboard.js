import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Header from '../ClientComponent/Header';
import SideBar from './SideBar';

function AdminDashboard () {

    // init history:
    let history = useHistory()

    const token = localStorage.getItem('token')
    console.log(token)

    // check if token exist or not:
    if(token) {
        console.log("this is good")
    } else {
        history.push("/AdminLogin")
    }

    return (
        <section id="container">
            <Header />
            <SideBar />
            
        </section>
    )
}

export default AdminDashboard