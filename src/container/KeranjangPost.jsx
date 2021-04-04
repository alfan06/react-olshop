import React, { Component } from "react";
import KeranjangPostt from "../component/KeranjangPostt";


class KeranjangPost extends Component {
    state = {
        listKeranjang: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/keranjang')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        var no = 0;
        var total = 0;
        return (
            <div className="post-microwave">
                <center><h2>Keranjang</h2></center>
                <div className="tabel">
                    <table border="2" cellpadding="5" width="100%">
                        <tr>
                            <th align="center">No</th>
                            <th align="center">ID Produk</th>
                            <th align="center">Gambar</th>
                            <th align="left">Nama</th>
                            <th align="center">Harga</th>
                            <th align="center">Qty</th>
                            <th align="center">Subtotal</th>
                        </tr>
                        {
                            this.state.listKeranjang.map(microwave => {
                                no += 1;
                                total+=microwave.harga*microwave.qty
                                return (
                                    <KeranjangPostt
                                        no={no}
                                        key={microwave.id}
                                        id={microwave.id}
                                        nama={microwave.nama}
                                        harga={microwave.harga}
                                        gambar={microwave.gambar}
                                        stok={microwave.stok}
                                        qty={microwave.qty}
                                        tambahMicrowave={this.handleGetMicrowave} />
                                )
                            })
                        }
                        <tr>
                            <td colspan="6" align="right">Total : </td>
                            <td align="center">{total}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default KeranjangPost;