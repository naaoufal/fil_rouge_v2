import Header from './Header'

function UserHome () {
    return (
        <section id="container">
            <Header />
            <section id="main-content">
                <section class="wrapper site-min-height">
                    <div class="chat-room mt">
                        <aside class="mid-side">
                            <div class="chat-room-head">
                                <h3>Question</h3>
                                <form action="#" class="pull-right position">
                                    <input type="text" placeholder="Search" class="form-control search-btn " />
                                </form>
                            </div>
                            <div className="room-desk">
                                <h4 class="pull-left">Les Questions Les Plus Fréquentes</h4>
                                <a href="#" class="pull-right btn btn-theme02">Poser Une Question</a>
                                <div class="room-box">
                                    <h5 class="text-primary"><a href="">Dashboard</a></h5>
                                    <p>We talk here about our dashboard. No support given.</p>
                                    <p><span class="text-muted">Admin :</span> Sam Soffes | <span class="text-muted">Members :</span> 98 | <span class="text-muted">Last Activity :</span> 2 min ago</p>
                                </div>
                                <div class="room-box">
                                    <h5 class="text-primary"><a href="">Dashboard</a></h5>
                                    <p>We talk here about our dashboard. No support given.</p>
                                    <p><span class="text-muted">Admin :</span> Sam Soffes | <span class="text-muted">Members :</span> 98 | <span class="text-muted">Last Activity :</span> 2 min ago</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default UserHome