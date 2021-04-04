

import React from "react";
import {
    Button
} from 'react-bootstrap';

const Post = (microwave) => {
    return(
        <div className="col col-sm-2 portofolio-item mt-4">
            <div className="card h-100">
                <img src={microwave.gambar} alt="Gambar" className="card-img-top mh-100"/>
                <div className="card-body">
                    <h6 className="card-title w-75 float-left">ID : {microwave.id}</h6>
                    <h5 className="card-title w-75 float-left">{microwave.nama}</h5>
                    <h5 className="card-title w-75 text-primary">Harga {microwave.harga}</h5>
                    <h5 className="card-title w-75 text-primary">Stok :{microwave.stok}</h5>
                    <hr/>
                    <Button variant="dark"  onClick={microwave.tambahMicrowave.bind(this, microwave.id)}>Beli</Button>
                </div>
            </div>
        </div>
    )
}
export default Post;
