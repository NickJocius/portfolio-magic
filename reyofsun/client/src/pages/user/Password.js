import React, { useState } from 'react';
import UserNav from '../../components/nav/UserNav';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import loadgif from '../../assets/images/loading.gif';

const Password = () => {

    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        await auth.currentUser.updatePassword(password)
            .then(() => {
                setLoading(false);
                setPassword("");
                toast.success("Successfully updated password");
            })
            .catch(err => {
                setLoading(false);
                toast.error(err.message);
            })
    };

    const passwordUpdateForm = () => {
        return <form onSubmit={handleSubmit} className="my-5 py-4">
            <div className="form-group">
                <label>Current Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Enter new Password"
                    disabled={loading}
                    value={password}
                />
                <button className="btn btn-primary" disabled={!password || password < 6 || loading}>Submit</button>
            </div>
        </form>
    };

    return (
        <div className="container-fluid">
            <div class="row">
                <div className="col-md-2">
                    <UserNav />
                </div>
                <div className="col">
                    {!loading ? (
                        <h4 className="my-4 py-3">Password Update</h4>
                    ) : (
                            <div className="d-flex justify-content-center align-content-center">
                                <img src={loadgif} alt="loading gif" className="m-auto" />
                            </div>
                        )
                    }
                    {passwordUpdateForm()}
                </div>
            </div>
        </div>
    )
}

export default Password;
