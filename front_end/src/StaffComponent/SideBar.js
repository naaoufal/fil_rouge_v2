import { Link, useHistory } from "react-router-dom";

function SideBarStaff () {

    return (
        <aside>
            <div id="sidebar" class="nav-collapse">
                <ul class="sidebar-menu" id="nav-accordion">
                <p class="centered"><Link><img src="" class="img-circle" width="80" /></Link></p>
                <h5 class="centered">Staff Name</h5>
                <br /> <br />
                    <li>
                        <Link to="/StaffDashboard">
                        <span>Informations Générales</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <span>Gestion des Members</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/posts">
                        <span>Gestion des Evénements et Ateliers</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tags">
                        <span>Gestion des Compétitions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts">
                        <span>Gestion des Contacts</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBarStaff