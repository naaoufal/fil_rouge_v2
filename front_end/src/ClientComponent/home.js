import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from "react-toastify"
import Header from './Header'
import ModalConn from './Modals/ModalConn'
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

    
    

    // function to add posts :
    const addPost = () => {
        //console.log(titlePost, descPost, tagPost)
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
                                <ModalConn />
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