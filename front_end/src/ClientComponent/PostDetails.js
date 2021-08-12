import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from "react-toastify"
import Header from './Header'
import './styles/index.css'

function PostDetails () {
    return (
        <section id="container">
            <Header />
            <section id="main">
                <section class="wrapper site-min-height">
                    <div class="chat-room mt">
                        <aside class="mid-side">
                            <div class="chat-room-head">
                                <h3>Le titre de Problème</h3>
                            </div>
                            <div className="room-desk">
                                <div class="room-box">
                                    <p>here we put the description of data </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </section>
        </section>
    )
}


export default PostDetails;