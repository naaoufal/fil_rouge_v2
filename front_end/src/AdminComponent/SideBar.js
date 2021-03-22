import { Link, useHistory } from "react-router-dom";

function SideBar () {

    // init history:
    const history = useHistory()

    // check token if exist:
    const token = localStorage.getItem('token')
    if(token) {
        console.log("this is work")
    } else {
        history.push("/AdminLogin")
    }

    return (
        <aside>
            <div id="sidebar" class="nav-collapse">
                <ul class="sidebar-menu" id="nav-accordion">
                <p class="centered"><a href="profile.html"><img src="img/ui-sam.jpg" class="img-circle" width="80" /></a></p>
                <h5 class="centered">Benmansour Naoufal</h5>
                <li class="mt">
                    <Link to="/AdminDashboard">
                    <i class="fa fa-dashboard"></i>
                    <span>Informations Générales</span>
                    </Link>
                </li>
                <li class="mt">
                    <Link to="">
                    <span>Gestion des Modérateurs</span>
                    </Link>
                </li>
                <li class="mt">
                    <Link to="">
                    <i class="fa fa-dashboard"></i>
                    <span>Dashboard</span>
                    </Link>
                </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar