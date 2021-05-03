import Header from '../ClientComponent/Header';
import SideBar from './SideBar';
import './style/main.css'

function TagManagement () {



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
                                            <h4 class="modal-title">Mot de passe oublié ?</h4>
                                        </div>
                                        <div class="modal-body">
                                            <p>Entrer Le nom de Tag</p>
                                            <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix" />
                                        </div>
                                        <div class="modal-footer">
                                            <button data-dismiss="modal" class="btn btn-default" type="button">Retour</button>
                                            <button class="btn btn-theme" type="button">Ajouter</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* modal end */}
                                <hr />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default TagManagement