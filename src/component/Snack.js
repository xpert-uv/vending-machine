import React from 'react'
import "../snacks.css"
const Snack = ({ item, src }) => {

    return (
        <div className="snacks">
            <img src={src} alt={item} />
            {item}

        </div>
    )
}

export default Snack
