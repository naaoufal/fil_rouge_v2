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
                <p class="centered"><Link><img src="" class="img-circle" width="80" /></Link></p>
                <h5 class="centered">Benmansour Naoufal</h5>
                <br /> <br />
                <li>
                    <Link to="/AdminDashboard">
                    <span>Informations Générales</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                    <span>Gestion des Modérateurs</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                    <span>Gestion des Posts</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                    <span>Gestion des Tags et Themes</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                    <span>Gestion des Contacts</span>
                    </Link>
                </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar