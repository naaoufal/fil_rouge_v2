import Header from './Header'

function UserHome () {
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
                                <button data-toggle="modal" data-target="#exampleModal" class="pull-right btn btn-theme">Poser Une Question</button>
                                {/* modal start */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div className="group-control">
                                                <label>Ecrire ton Problème ...</label>
                                                <textarea class="form-control placeholder-no-fix"></textarea>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-theme">Save changes</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* modal end */}
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