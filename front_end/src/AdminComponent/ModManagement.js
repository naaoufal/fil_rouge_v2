import { useEffect, useState } from 'react';
import Header from '../ClientComponent/Header';
import SideBar from './SideBar';

function ModManagement () {

    const token = localStorage.getItem('token')
    const [staffs, setStaffs] = useState([])
    const [firstname, setFirstName] = useState([])
    const [lastName, setLastName] = useState([])
    const gender = document.querySelector('#gender').value
    const [email, setEmail] = useState([])
    const [adress, setAdress] = useState([])
    const [phone, setPhone] = useState([])
    const [password, setPassword] = useState([])
    const [birth, setBirth] = useState([])

    // render staffs data :
    function renderStaff () {
        fetch("http://localhost:3001/api/staffs").then(res => {
            return res.json()
        }).then(data => {
            setStaffs(data)
        })
    }


    useEffect(() => {
        renderStaff()
    }, [])


    return (
        <section id="container">
            <Header />
            <SideBar />
            <section id="main-content">
                <section className="wrapper">
                    <h3><i className="fa fa-angle-right"></i>Dashboard</h3>
                    <div className="row">
                        <div class="col-md-12">
                            <div class="content-panel">
                                <h4><i class="fa fa-angle-right"></i> Gestion des Modérateurs</h4>
                                <hr />
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nom</th>
                                            <th>Prenom</th>
                                            <th>Sexe</th>
                                            <th>Email</th>
                                            <th>Telephone</th>
                                            <th>Date de naissance</th>
                                            <th>Address</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default ModManagement