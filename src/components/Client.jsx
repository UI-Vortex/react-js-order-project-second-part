import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Client({ name, setName }) {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes')
            .then(res => setData(res.data.recipes))
            .catch((error) => console.log(error))
    }, [])

    console.log(data)

    return (
        <>
            <div className="flexbox-client">
                <div className="client">
                    <h1 style={{ fontSize: '50px', marginLeft: '100px' }}>Client Name: {name}</h1>
                    <div className="line" style={{ background: 'black', width: '1000px', height: '10px' }}></div>
                </div>
                <div className="client-ordered-food d-flex" style={{ height: '480px', display: ' flex', flexWrap: 'wrap', gap: '55px', overflowY: 'auto' }}>
                    {
                        data.map((items) => {
                            return <div key={items.id}>
                                <div className="card p-2 mt-4" style={{ width: '18rem' }}>
                                    <img src={items.image} className="card-img-top" alt="error" />
                                    <div className="card-body">
                                        <h5 className="card-title">{items.name}</h5>
                                        <b className="card-text">{items.difficulty}</b>
                                        <p className="card-text">{items.cuisine}</p>
                                        <a href="#" className="btn btn-primary">More information</a>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="client-food" style={{ transform: 'translateY(50px)' }}>
                    <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Choose Food You like
                        </button>
                        <ul className="dropdown-menu w-100 bg-warning">
                            {
                                data.map((list) => {
                                    return <li key={list.name}><a className="dropdown-item" href="#">{list.name}</a></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Client
