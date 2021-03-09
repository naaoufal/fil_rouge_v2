function Login () {
    return (
        <div className="container">  
            <div className="col-lg-4 col-md-3 col-sm-2"></div>
            <div className="col-lg-4 col-md-6 col-sm-8">
                <div class="row loginbox">                    
                    <div class="col-lg-12">
                        <span class="singtext" >Sign in </span>   
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <input class="form-control" type="text" placeholder="Please enter your user name" /> 
                    </div>
                    <div class="col-lg-12  col-md-12 col-sm-12">
                        <input class="form-control" type="password" placeholder="Please enter password" />
                    </div>
                    <div class="col-lg-12  col-md-12 col-sm-12">
                        <a href="#" class="btn  submitButton">Submit </a> 
                    </div>
                </div>
                <div class="row forGotPassword">
                    <a href="#" >Forgot Username / Password? </a> 
                </div>
            </div>
            <div class="col-lg-4 col-md-3 col-sm-2"></div>
        </div>
    )
}

export default Login