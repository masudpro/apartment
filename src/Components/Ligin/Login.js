import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8 col-lg-6 mt-5 pt-5">
                    <form class="loginForm">
                        <h4 className="text-left pb-4"><strong>Create an account</strong></h4>
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" placeholder="First Name" required=""/>
                            <input type="text" name="name" class="form-control" placeholder="Last Name" required=""/>
                            <input type="email" name="email" class="form-control" placeholder="User Name Or Email" required=""/>
                            <input name="password" type="password" class="form-control" placeholder="Password" required=""/>
                            <input name="retypePassword" type="password" class="form-control" placeholder="Confirm Password" required=""/>
                            <label class="pr-2 text-danger"> </label>
                            <input type="submit" class="form-control submitButton" value="SUBMIT"/>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;