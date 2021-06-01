import { useEffect, useState } from 'react';
import Header from '../ClientComponent/Header';
import SideBar from './SideBar';

function ModManagement () {

    const token = localStorage.getItem('token')
    const [staffs, setStaffs] = useState([])
    const [firstname, setFirstName] = useState([])
    const [lastName, setLastName] = useState([])
    const [email, setEmail] = useState([])
    const [adress, setAdress] = useState([])
    const [phone, setPhone] = useState([])
    const [password, setPassword] = useState([])
    const [birth, setBirth] = useState([])

    // clear Input function :
    function clearInputs () {
        document.querySelector('#fr').value = ""
    }

    // email and phone regex :
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneformat = /^\d{10}$/;

    // render staffs data :
    function renderStaff () {
        fetch("http://localhost:3001/api/staffs/all", {
            headers : {
                'Authorization' : 'Bearer ' + token
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            setStaffs(data)
        })
    }

    // add new staff :
    function addMod () {
        const em = document.querySelector('#em').value
        const ph = document.querySelector('#ph').value
        const gender = document.querySelector('#gender').value

        // check if data fields not Empty !!! :
        if (firstname && lastName && email && adress && phone && password && birth != "") {
            // check for validation email and phone :
            if(em.match(mailformat) && phone.match(phoneformat)){

                // post new staff
                fetch("http://localhost:3001/api/staffs/add", {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json',
                        'Authorization' : 'Bearer ' + token
                    },
                    body : JSON.stringify({
                        firstname : firstname,
                        lastname : lastName,
                        gender : gender,
                        email : email,
                        adress : adress,
                        phone : phone,
                        password : password,
                        birth : birth,
                        is_reseted : false,
                        suspended : false
                    })
                }).then(res => {
                    return res.json()
                }).then(data => {
                    clearInputs()
                    console.log(data)
                })
                window.location.reload()
                // const html = `<div class="panel panel-success"><div class="panel-heading">Modérateur Bien Ajouter !!!</div></div>`
                // document.getElementById('err').innerHTML = html
            } else {
                const html = `<div class="panel panel-danger"><div class="panel-heading">Y a Un Erreur En Email ou Téléphone !!!</div></div>`
                document.getElementById('err').innerHTML = html
            }
        } else {
            const html = `<div class="panel panel-danger"><div class="panel-heading">Remplir les Inputs SVP !!!</div></div>`
            document.getElementById('err').innerHTML = html
        }
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
                                <a className="btn btn-primary" id="add" data-toggle="modal" href="#myModal">Ajouter Nouveau Modérateur</a>
                                {/* modal start */}
                                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Ajotuer Nouveau Tag</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div className="group-control">
                                                <p>Entrer Le nom de Modérateur :</p>
                                                <input onChange={event => setFirstName(event.target.value)} type="text" name="nm" autocomplete="off" class="form-control placeholder-no-fix" id="nm"/>
                                            </div>
                                            <div className="group-control">
                                                <p>Entrer Le Prenom de Modérateur :</p>
                                                <input onChange={event => setLastName(event.target.value)} type="text" name="pr" autocomplete="off" class="form-control placeholder-no-fix" id="pr"/>
                                            </div>
                                            <div className="form-group">
                                                <p>Choisir Votre Sexe :</p>
                                                <select id="gender" className="form-control">
                                                    <option className="">Choisir Votre Sexe</option>
                                                    <option value="female">Female</option>
                                                    <option value="male">Male</option>
                                                </select>
                                            </div>
                                            <div className="group-control">
                                                <p>Entrer Email de Modérateur :</p>
                                                <input onChange={event => setEmail(event.target.value)} type="email" name="em" autocomplete="off" class="form-control placeholder-no-fix" id="em"/>
                                            </div>
                                            <div className="group-control">
                                                <p>Entrer L'address de Modérateur :</p>
                                                <input onChange={event => setAdress(event.target.value)} type="text" name="ad" autocomplete="off" class="form-control placeholder-no-fix" id="ad"/>
                                            </div>
                                            <div className="group-control">
                                                <p>Entrer Téléphone de Modérateur :</p>
                                                <input onChange={event => setPhone(event.target.value)} type="text" name="ph" autocomplete="off" class="form-control placeholder-no-fix" id="ph"/>
                                            </div>
                                            <div className="group-control">
                                                <p>Entrer Mot de Passe de Modérateur :</p>
                                                <input onChange={event => setPassword(event.target.value)} type="password" name="ps" autocomplete="off" class="form-control placeholder-no-fix" id="ps"/>
                                            </div>
                                            <div className="group-control">
                                                <p>Entrer Date de Naissance de Modérateur :</p>
                                                <input onChange={event => setBirth(event.target.value)} type="date" name="em" autocomplete="off" class="form-control placeholder-no-fix" id="em"/>
                                            </div>
                                            <br/>
                                            <div id="err"></div>
                                        </div>
                                        <div class="modal-footer">
                                            <button data-dismiss="modal" class="btn btn-default" type="button">Retour</button>
                                            <button class="btn btn-theme" onClick={addMod} type="button">Ajouter</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* modal end */}
                                <hr />
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            {/* <th>#</th> */}
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
                                        {staffs.map((i) => (
                                            <tr key={i._id}>
                                                <td>{i.firstname}</td>
                                                <td>{i.lastname}</td>
                                                <td>{i.gender}</td>
                                                <td>{i.email}</td>
                                                <td>{i.phone}</td>
                                                <td>{i.birth.slice(0, 10)}</td>
                                                <td>{i.adress}</td>
                                                <td><button className="btn btn-success">Modifier</button> <button className="btn btn-warning">Supprimer</button></td>
                                            </tr>
                                        ))}
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