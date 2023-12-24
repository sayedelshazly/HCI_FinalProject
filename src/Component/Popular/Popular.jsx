import React from 'react'
import './populer.css'
import data_porduct from '../Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULER IN WOMAN</h1>
        <hr />
        <div className="popular-item">
            {data_porduct.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular