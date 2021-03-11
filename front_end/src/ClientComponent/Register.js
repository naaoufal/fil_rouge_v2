

function Register () {

    

    return (
        <div id="login-page">
            <div class="container">
            <div class="form-login" action="index.html">
                <h2 class="form-login-heading">S'inscrire</h2>
                <div class="login-wrap">
                <input type="text" class="form-control" placeholder="Entrer Votre Nom" autofocus />
                <input type="text" class="form-control" placeholder="Entrer Votre Prenom" autofocus />
                <input type="date" class="form-control" autofocus />
                <input type="password" class="form-control" placeholder="Mot de Passe" />
                <label class="checkbox">
                    <span class="pull-right">
                    <a data-toggle="modal" href="login.html#myModal">Mot de passe oublié ?</a>
                    </span>
                    </label>
                <button class="btn btn-theme btn-block" type="button" ><i class="fa fa-lock"></i> S'identifier</button>
                <hr />
                <div class="registration">
                    Vous n'avez pas encore de compte ?<br/>
                    <a class="" href="#">
                    Créer un compte
                    </a>
                </div>
                </div>
                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        
                        <h4 class="modal-title">Mot de passe oublié ?</h4>
                    </div>
                    <div class="modal-body">
                        <p>Enter your e-mail address below to reset your password.</p>
                        <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix" />
                    </div>
                    <div class="modal-footer">
                        <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
                        <button class="btn btn-theme" type="button">Submit</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Register