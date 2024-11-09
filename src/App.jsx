import React from 'react'
import FoodOrder from './components/FoodOrder'
import Client from './components/Client'
import { useState } from 'react'

function App() {


    const [name, setName] = useState('')
    const [todo, setTodo] = useState([])
    const [phone, setPhone] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedName, setSelectedName] = useState('');

    const handleItemClick = (index) => {
        setSelectedIndex(index); // Update the selected index on click
    };

    return (
        <div className='d-flex p-5 gap-5'>
            <FoodOrder name={name} setName={setName} todo={todo} setTodo={setTodo} phone={phone} setPhone={setPhone} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} handleItemClick={handleItemClick} selectedName={selectedName} setSelectedName={setSelectedName} />
            <Client name={name} setName={setName} />
        </div>
    )
}

export default App
