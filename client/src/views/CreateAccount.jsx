import React from 'react';
import { Link } from 'react-router-dom';
const CreateAccount = () => {
    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-gradient">
            <div className="card p-4 shadow-lg rounded-3 border-0" style={{ maxWidth: '400px' }}>
                <h1 className="card-title text-center mt-3 mb-3 text-info">Create Account</h1>
                <div className="row mb-3 ">
                    <div className="col">
                    <label htmlFor="exampleInputEmail1" className="form-label text-info">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                    <label htmlFor="exampleInputEmail1" className="form-label text-info">Password</label>
                        <input type="password" className="form-control" id="password" aria-describedby="password" />
                    </div>
                </div>

                <div className="form-control text-info d-flex justify-content-center">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>

                <div className="d-grid mt-3">
                    <Link className="btn btn-outline-info btn-lg" to="/show">Create Account</Link>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
