import React, { useState } from 'react'
import foodLogo from '../assets/Good-Food-King-Logo-Template.webp'

function FoodOrder({ name, setName, todo, setTodo, phone, setPhone, selectedIndex, setSelectedIndex, handleItemClick, selectedName, setSelectedName }) {

    const handleAdd = () => {
        if (name !== '' && phone !== '') {
            setTodo([...todo, { name, phone }])
        }
        setName('')
        setPhone('')
    }



    return (
        <>
            <div className="flexbox-food">
                <div className="food-order-flexbox" style={{ width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '50px', position: 'relative' }}>Best Food</h1>
                    <div className="line" style={{ background: 'black', width: '225px', height: '10px', }}></div>
                    <div className="food-order-customers mt-3" style={{ padding: '5px 10px', height: '380px', overflowY: 'auto' }}>
                        {todo.map((entry, index) => (
                            <div
                                onClick={() => handleItemClick(index)}
                                key={index}
                                className="d-flex flex-column"
                                style={{
                                    backgroundColor: selectedIndex === index ? 'black' : 'white', color: selectedIndex === index ? 'white' : 'black',
                                    border: '3px solid black', margin: '5px', padding: '5px', width: '230px', borderRadius: '10px', cursor: 'pointer'
                                }}>
                                <a>Name: {entry.name}</a>
                                <a>Phone: {entry.phone}</a>
                            </div>
                        ))}
                    </div>
                    <div className="food-todos d-flex flex-column align-items-center" style={{ transform: 'translateY(400px)', position: 'absolute', bottom: '60%' }}>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="food-input-name form-control" placeholder=' write your name...' required style={{ width: '200px' }} />
                        <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" className="food-input-phone form-control" placeholder='write your number...' required style={{ width: '200px' }} />
                        <button onClick={() => handleAdd()} className="food-add btn btn-success" style={{ width: '200px', marginTop: '10px' }}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodOrder
