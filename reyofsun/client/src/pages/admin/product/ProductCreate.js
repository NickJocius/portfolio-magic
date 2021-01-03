import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import {
    getCategory,
    updateCategory
} from "../../../functions/category";
import loadgif from '../../../assets/images/loading.gif';



const ProductCreate = () => {


    return (
        <div className="AdminDash container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>
                <div className="col">
                    {!loading ? (
                        <h4>Update Category</h4>)
                        : (
                            <div className="Loading d-flex justify-content-center align-content-center">
                                <img src={loadgif} alt="loading gif" className="m-auto" />
                            </div>

                        )}
                </div>
            </div>
        </div>
    )
}

export default ProductCreate;
