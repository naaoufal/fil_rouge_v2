import { useEffect } from "react"
import { Link, useHistory } from "react-router-dom";
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function Header () {

    // init history
    let history = useHistory()

    // check if token exist:
    const token = localStorage.getItem('token')
    if(token) {
        console.log("this is work")
    } else {
        history.push("/AdminLogin")
    }

    // call information of admin:
    const info = JSON.parse(localStorage.getItem('adminInfo'))

    // logout function:
    function logOut () {
        localStorage.clear()
        toast.configure()
        toast.info("Vous etes Deconnecter " + info.firstname)
        history.push("/AdminLogin")
    }

    return (
        <header className="header black-bg">
            <div class="sidebar-toggle-box">
                <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
            </div>
            <Link class="logo"><b>You<span>Forum</span></b></Link>
            <div class="top-menu">
                <ul class="nav pull-right top-menu">
                    <li><Link onClick={logOut} class="logout">Se Deconnecter</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header