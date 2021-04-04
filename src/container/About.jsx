import React, { Component } from "react";
import Alfan from '../Alfan.jpeg'
class About extends Component{
    render(){
        return (
            <div>
                <br/>
                <div className="artikel">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="gambar-artikel">
                                <img src={Alfan} alt="Gambar Tumbnail Artikel" />
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="konten-artikel">
                                <p></p>
                                <b>Nama   :</b>
                                <div className="judul-artikel">Alfan</div>
                                <b>Alamat Cell:</b>
                                <div className="judul-artikel">JL.IR.Rais IX/202</div>
                                <b>Hp :</b>
                                <div className="judul-artikel">085634328309</div>
                                <b>EMAIL :</b>
                                <div className="judul-artikel">alfannoufal@gmail.com</div>
                                <b>NIM :</b>
                                <div className="judul-artikel">1841720059</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About