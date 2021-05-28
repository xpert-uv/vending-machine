import React from 'react'
import Snack from './Snack';
import "./VendingMachine.css";
const VendingMachine = () => {
    return (
        <div>
            <h1>Hello<br /> Welcome to VendingMachine</h1>
            <p>What do you like ?</p>
            <div className="items">
                <Snack item="chips" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafehhYdMn30r9L3XXYraSmRQaaW1i6WvFNeU65G5Nz1i-6QqkJIKW-6t1_A&usqp=CAc"} />
                <Snack item="Snickers" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MYdUXfqNOh8disSZKoQCqZZ76sOoXoETiEvMPXPU1qmDTeK8qb2KSI6K7KVnp2DJEMEZrMQ&usqp=CAc"} />
                <Snack item="M&M" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhZbpG-380PryeGx-8xGGp1QW8m1EcU9j_AeqtbbhRQRC0el9t-BEF9pWig&usqp=CAc"} />
                <Snack item=" coke" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ40zVbAPhXRP8S3h3H2PPUqHwQmgzMY3vYKINxWD5C7v--rYsYaew1exDJRv7Hh_2HQllnPQ&usqp=CAc"} />
                <Snack item="Pepsi" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBu_6SFmJ0tk8C8OMkjNIV9tKPTks6RMyNqAk5t3e3nQbWbGnTpO2KW3WvMh5H9fymrHmRTTA&usqp=CAc"} />
                <Snack item="Orange" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJi6YaW5Ag7Xt24WKRVOM5hqm_nwI46ulf9i9OMpWmM9GHBl9CjDZChBRujD9Hl09bLzJFFQ&usqp=CAc"} />
            </div>
        </div>
    )
}

export default VendingMachine
