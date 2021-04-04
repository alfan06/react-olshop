import React, { Component } from "react";
import Post from "../component/ProductPost";

class ProductPost extends Component{
    state = {
        listMicrowave: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/microwave')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMicrowave: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleGetMicrowave = data => {
        fetch(`http://localhost:3001/microwave/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var dataMicrowave = { ...this.state.insertKeranjang };
                dataMicrowave["id"] = res["id"];
                dataMicrowave["nama"] = res["nama"];
                dataMicrowave["gambar"] = res["gambar"];
                dataMicrowave["harga"] = res["harga"];
                dataMicrowave["stok"] = res["stok"];
                dataMicrowave["qty"] = 1;
                this.setState({
                    insertKeranjang: dataMicrowave
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            // .then(() => {
            //     this.handleTombolSimpan();
            // });
    };

    handleCekKeranjang = data => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                nama: res["nama"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch("http://localhost:3002/keranjang", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.insertKeranjang),
        })
        .then((Response) => {
            this.ambilDataDariServerAPI();
        });
    };

    render() {
        return (
            <div className="post-microwave">
                <h2 className="text-center">Katalog Microwave</h2>
                <div className="row justify-content-center">
                {
                    this.state.listMicrowave.map(microwave => {
                        return (<Post key={microwave.id} id={microwave.id} nama={microwave.nama} harga={microwave.harga} gambar={microwave.gambar} stok={microwave.stok} tambahMicrowave={this.handleGetMicrowave} />)
                    })
                }
                </div>
            </div>
        )
    }
}
export default ProductPost;