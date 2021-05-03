import { useEffect, useState } from 'react';
import Header from '../ClientComponent/Header';
import SideBar from './SideBar';
import './style/main.css'

function TagManagement () {

    const token = localStorage.getItem('token')
    const [name, setName] = useState([])
    const [desc, setDesc] = useState([])
    const [tags, setTags] = useState([])

    // clear Inputs after submit :
    function resetInputs () {
        document.querySelector('#nm').value = ""
        document.querySelector('#desc').value = ""
    }

    // render tags data :
    function renderTags () {
        fetch("http://localhost:3001/api/tags/all", {
            headers : {
                'Authorization' : 'Bearer ' + token
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            setTags(data)
        })
    }

    // add new tag : 
    function addNewTag () {
        fetch("http://localhost:3001/api/tags/add", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body : JSON.stringify({
                name : name,
                desc : desc
            })
        }).then(res => {
            resetInputs()
            renderTags()
        })
    }

    // delete tag by Id :
    function deleteTag (id) {
        fetch(`http://localhost:3001/api/tags/delete/${id}`, {
            method : 'DELETE'
        }).then(res => {
            renderTags()
        })
    }

    useEffect(() => {
        renderTags()
        console.log(tags)
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
                                <h4><i class="fa fa-angle-right"></i> Gestion des Tags et Themes</h4>
                                <a className="btn btn-info" id="add" data-toggle="modal" href="#myModal">Ajouter Nouveau Tag</a>
                                {/* modal start */}
                                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Ajotuer Nouveau Tag</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div className="group-control">
                                                <p>Entrer Le nom de Tag :</p>
                                                <input onChange={event => setName(event.target.value)} type="text" name="nm" autocomplete="off" class="form-control placeholder-no-fix" id="nm"/>
                                            </div>
                                            <div className="group-control">
                                                <p>Enter Description du Tag :</p>
                                                <textarea onChange={event => setDesc(event.target.value)} className="form-control" name="desc" rows="8" cols="80" id="desc"></textarea>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button data-dismiss="modal" class="btn btn-default" type="button">Retour</button>
                                            <button class="btn btn-theme" onClick={addNewTag} type="button" data-dismiss="modal">Ajouter</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* modal end */}
                                <hr />
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Nom du Tag</th>
                                            <th>Description du Tag</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tags.map((i) => (
                                            <tr>
                                                <td>{i.name}</td>
                                                <td>{i.desc}</td>
                                                <td><button className="btn btn-success">Modifier</button> <button onClick={()=>deleteTag(i._id)} className="btn btn-warning">Supprimer</button></td>
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

export default TagManagement