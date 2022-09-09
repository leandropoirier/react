import React from 'react';
import '../app/item.css'

const Item =({info}) =>{
    return (
    <div className="card">
        <img src={info.src} alt="" />
        <div className="card-body">
            <h5 className="card-title">{info.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{info.description}</li>
            <li className="list-group-item">${info.price}</li>
            <li className="list-group-item">stock: {info.quantity}</li>
        </ul>
    </div>
    );
}

export default Item;
