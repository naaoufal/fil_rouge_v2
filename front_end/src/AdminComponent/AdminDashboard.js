import { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../ClientComponent/Header';
import SideBar from './SideBar';

function AdminDashboard () {

    // init history:
    let history = useHistory()

    const token = localStorage.getItem('token')
    const info = JSON.parse(localStorage.getItem('adminInfo'))
    //console.log(token)

    // logout function
    function logOut () {
        localStorage.clear()
        toast.configure()
        toast.warning("Vous etes Deconnecter " + info.firstname)
        history.push("/AdminLogin")
    }

    useEffect(() => {
        // check if token exist or not:
        if(token) {
            
        } else {
            history.push("/AdminLogin")
        }
    }, [])

    return (
        <section id="container">
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
            <SideBar />
            <section id="main-content">
                <section className="wrapper">
                    <h3><i className="fa fa-angle-right"></i>Dashboard</h3>
                    <div className="row">
                        <div class="col-md-12">
                            <div class="content-panel">
                                <h4><i class="fa fa-angle-right"></i>Informations Générales</h4>
                                <hr />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default AdminDashboard