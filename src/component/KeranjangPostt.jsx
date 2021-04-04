import React from "react";

const KeranjangPostt = (krjng) => {
    return (
        <tr>
            <td align="center">{krjng.no}</td>
            <td align="center">{krjng.id}</td>
            <td align="center"><img src={krjng.gambar} alt="gambar" width="150" height="150"/></td>
            <td align="center">{krjng.nama}</td>
            <td align="center">{krjng.harga}</td>
            <td align="center">{krjng.qty}</td>
            <td align="center">{krjng.harga * krjng.qty}</td>
        </tr>
    )
}

export default KeranjangPostt;