import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from "react-toastify"
import Header from './Header'
import './styles/index.css'

function UserHome () {

    let history = useHistory()
    // initialise toast config
    toast.configure()
    // init token
    const token = sessionStorage.getItem('token')
    //const info = JSON.parse(localStorage.getItem('userInfo'))
    const [tags, setTags] = useState([])
    const [posts, setPosts] = useState([])
    const [check, setCheck] = useState("")
    // statse for connextion :
    const [emailCon, setEmailCon] = useState("")
    const [passCon, setPassCon] = useState("")
    // states for posts :
    const [titlePost, setTitlePost] = useState("")
    const [descPost, setDescPost] = useState("")
    const [tagPost, setTagPost] = useState("")

    // function render tag data :
    const renderTagsData = () => {
        fetch("http://localhost:3001/api/tags/publicTags").then(res => {
            return res.json()
        }).then(data => {
            setTags(data)
        })
    }

    // function render post data :
    const renderPostsData = () => {
        fetch("http://localhost:3001/api/posts/all").then(res => {
            return res.json()
        }).then(data => {
            setPosts(data)
        })
    }

    // check if user conencted or not to publish a new post :
    const checkPost = (event) => {
        //console.log(event.target.value)
        setCheck(event.target.value)
    }

    // function for connexion :
    const connectTo = () => {

        fetch("http://localhost:3001/api/clients/auth", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email : emailCon,
                password : passCon
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            //console.log(data.accessToken || data.message)
            if(data.accessToken) {
                sessionStorage.setItem('token', data.accessToken)
                toast.success("Connecté(e)")
                window.location.reload()
            } else {
                toast.error(data.message)
            }
        })
    }

    // function to add posts :
    const addPost = () => {
        console.log(titlePost, descPost, tagPost)
        fetch("http://localhost:3001/api/posts/add", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                title : titlePost,
                desc : descPost,
                user_id : "Test_for_mement",
                is_valid : false,
                stat_post : "Pending",
                createdAt : Date.now(),
                tag : tagPost
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            if(data) {
                window.location.reload()
            } else {
                toast.error("Y a une Erreur Vérifier Vos Données")
            }
        })
    }

    // render function when component loaded :
    useEffect(() => {
        renderTagsData()
        renderPostsData()
        //console.log(token)
    }, [])

    return (
        <section id="container">
            <Header />
            <section id="main">
                <section class="wrapper site-min-height">
                    <div class="chat-room mt">
                        <aside class="mid-side">
                            <div class="chat-room-head">
                                <h3>Tous Les Question</h3>
                                <form action="#" class="pull-right position">
                                    <input type="text" placeholder="Search" class="form-control search-btn" />
                                </form>
                            </div>
                            <div className="room-desk">
                                <button data-toggle="modal" data-target={!token ? "#sign" : "#exampleModal"} class="pull-right btn btn-theme">Poser Une Question</button>
                                {/* modal start */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Ajouter Nouvel Post</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div className="group-control">
                                                <input onChange={event => setTitlePost(event.target.value)} placeholder="Entrer Votre Problème" className="form-control placeholde-no-fix" />
                                            </div>
                                            <br />
                                            <div className="group-control">
                                                {/* <label>Ecrire Votre Question :</label> */}
                                                <textarea onChange={event => setDescPost(event.target.value)} placeholder="Expliquer Votre Problème :" rows="10" cols="50" class="form-control placeholder-no-fix"></textarea>
                                            </div>
                                            <br />
                                            <div className="group-contro">
                                                {/* <label>Choisir Votre Tag :</label> */}
                                                <select id="sel" onChange={event => setTagPost(event.target.value)} className="form-control placeholder-no-fix">
                                                    <option className="">Selecionner Votre Tag ...</option>
                                                    {tags.map(i => (
                                                        <option>{i.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                                            <button type="button" class="btn btn-theme" onClick={addPost}>Poser</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* modal end */}
                                {/* modal to sign up or sign in */}
                                <div class="modal fade" id="sign" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Inscription / Connexion</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div className="d-flex">
                                                <div className="col-md-6">
                                                    <button style={{padding : "16px"}} class="btn btn-theme btn-block" value="insc" onClick={checkPost}>Inscription</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button style={{padding : "16px"}} class="btn btn-theme btn-block" value="conn" onClick={checkPost}>Connexion</button>
                                                </div>
                                            </div>
                                            {/* <div className="group-control">
                                                <label>Ecrire Votre Question :</label>
                                                <input className="form-control placeholder-no-fix" />
                                            </div> */}
                                            {check == "conn" ?
                                            <>
                                                <hr></hr>
                                                <div className="group-control">
                                                    {/* <label>Entrer Votre Email</label> */}
                                                    <input onChange={event => setEmailCon(event.target.value)} placeholder="Entrer Votre Email" type="text" className="form-control placeholder-no-fix" />
                                                </div>
                                                <br />
                                                <div className="group-control">
                                                    {/* <label>Entrer Votre Mot de passe</label> */}
                                                    <input onChange={event => setPassCon(event.target.value)} placeholder="Entrer Votre Mot de passe" type="password" className="form-control placeholder-no-fix" />
                                                </div>
                                                <hr></hr>
                                            </>
                                            :
                                            check == "insc" ?
                                            <>
                                                <hr></hr>
                                                <div className="group-control">
                                                    <input placeholder="Entrer Votre Nom" type="text" className="form-control placeholder-no-fix" />
                                                </div>
                                                <br />
                                                <div className="group-control">
                                                    <input placeholder="Entrer Votre Prenom" type="text" className="form-control placeholder-no-fix" />
                                                </div>
                                                <br />
                                                <div className="group-control">
                                                    <input placeholder="Entrer Votre Email" type="file" className="form-control placeholder-no-fix" />
                                                </div>
                                                <br />
                                                <div className="group-control">
                                                    <select id="sel" className="form-control placeholder-no-fix">
                                                        <option>Selectionner Votre Sexe</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                </div>
                                                <br />
                                                <div className="group-control">
                                                    <input placeholder="Entrer Votre address" type="text" className="form-control placeholder-no-fix" />
                                                </div>
                                                <br />
                                                <div className="group-control">
                                                    <input placeholder="Entrer Votre Telephone" type="text" className="form-control placeholder-no-fix" />
                                                </div>
                                                <br />
                                                <div className="group-control">
                                                    <input placeholder="Entrer Votre Mot de passe" type="text" className="form-control placeholder-no-fix" />
                                                </div>
                                                <hr></hr>
                                            </>
                                            :
                                            null
                                            }
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                                            {check == "conn" ?
                                                <button type="button" class="btn btn-theme" onClick={connectTo}>Connexion</button>
                                            :
                                            check == "insc" ?
                                                <button type="button" class="btn btn-theme">Inscription</button>
                                            :
                                            null
                                            }
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end of modal */}
                                {posts.map((i) => (
                                    <div class="room-box">
                                        <h5 class="text-primary"><a href="">{i.title}</a></h5>
                                        <p>{i.desc}</p>
                                        <p><span class="text-muted">Posté Par :</span> {i.user_id} | <span class="text-muted">Tag Mentionner :</span> {i.tag} | <span class="text-muted">Status :</span> {i.stat_post} | <span class="text-muted">Posté en :</span> {i.createdAt}</p>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default UserHome