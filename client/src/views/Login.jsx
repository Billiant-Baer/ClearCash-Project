import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-gradient  ">
            <div className="card p-4 shadow-lg rounded-3 border-0" style={{ maxWidth: '400px' }}>
                <h2 className="card-title text-center mb-4 text-info">Login</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-info">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-info">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="d-grid mb-3">
                        <Link type="submit" className="btn btn-outline-info btn-lg" to={"/show"}>Login</Link>
                    </div>
                    <div className="text-center">
                        <small className="text-muted">
                            Don't have an account? <Link to="/create/account" className="text-info">Sign up</Link>
                        </small>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
