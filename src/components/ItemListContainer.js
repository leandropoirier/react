import React, { useEffect, useState } from 'react'
import ItemCount  from './ItemCount'
import ItemList from './ItemList'

const productos = [
    {
        "id": 1,
        "name" :"Iphone 11",
        "src":"http://www.vicionet.com/Vel/426-large_default/apple-iphone-11-64gb-.jpg",
        "description" : "Iphone 11 64 gb morado",
        "category": "phone",
        "price": 192000,
        "quantity": 1,
    },
    {
        "id": 4,
        "name" :"Macbook air ",
        "src":"https://m.media-amazon.com/images/I/716NEN4UVXL._AC_SX450_.jpg",
        "description" : "Macbook air retina 256 gb",
        "category": "computer",
        "price": 252000,
        "quantity": 1,
    }
]


const ItemListContainer = (props) => {
    const[data,setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise (resolve => {
            setTimeout (()=>{
                resolve (productos)
                console.log(productos)
            },3000);
        });
        getData.then(res => setData(res))
    },[])

    const onAdd = (quantity) => {
        alert(`Se agregaron ${quantity} unidades al carrito`);
    }

    return (
    <div className='contenedor'>
        <h1 className='bienvenida'>{props.bienvenida}</h1>
        <div className='contador'>
            <ItemList data={data} />
            <ItemCount cuentaInicial={1} stock ={5} onAdd={onAdd}/>
        </div>
    </div>
    )
}

export default ItemListContainer
