import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Snack from './Snack';
import "./VendingMachine.css";
import Items from "./Items";
const VendingMachine = () => {
    return (
        <div>
            <h1>Hello<br /> Welcome to VendingMachine</h1>
            <p>What do you like ?</p>
            <BrowserRouter>

                <>
                    <nav>
                        <Link to="/chips"> <Snack item="chips" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafehhYdMn30r9L3XXYraSmRQaaW1i6WvFNeU65G5Nz1i-6QqkJIKW-6t1_A&usqp=CAc"} /></Link>
                        <Link to='/snickers'><Snack item="Snickers" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MYdUXfqNOh8disSZKoQCqZZ76sOoXoETiEvMPXPU1qmDTeK8qb2KSI6K7KVnp2DJEMEZrMQ&usqp=CAc"} /></Link>
                        <Link to='/m&m'><Snack item="M&M" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhZbpG-380PryeGx-8xGGp1QW8m1EcU9j_AeqtbbhRQRC0el9t-BEF9pWig&usqp=CAc"} /></Link>
                        <Link to='/coke'><Snack item=" coke" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ40zVbAPhXRP8S3h3H2PPUqHwQmgzMY3vYKINxWD5C7v--rYsYaew1exDJRv7Hh_2HQllnPQ&usqp=CAc"} /></Link>
                        <Link to="/pepsi"><Snack item="Pepsi" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBu_6SFmJ0tk8C8OMkjNIV9tKPTks6RMyNqAk5t3e3nQbWbGnTpO2KW3WvMh5H9fymrHmRTTA&usqp=CAc"} /></Link>
                        <Link to="orange"><Snack item="Orange" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJi6YaW5Ag7Xt24WKRVOM5hqm_nwI46ulf9i9OMpWmM9GHBl9CjDZChBRujD9Hl09bLzJFFQ&usqp=CAc"} /></Link>
                    </nav>
                    <div className="items">
                        <Route exact path="/chips">
                            <Snack item="chips" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafehhYdMn30r9L3XXYraSmRQaaW1i6WvFNeU65G5Nz1i-6QqkJIKW-6t1_A&usqp=CAc"} />
                        </Route>
                        <Route exact path="/snickers">
                            <Snack item="Snickers" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MYdUXfqNOh8disSZKoQCqZZ76sOoXoETiEvMPXPU1qmDTeK8qb2KSI6K7KVnp2DJEMEZrMQ&usqp=CAc"} />
                        </Route>
                        <Route exact path="/m&m">
                            <Snack item="M&M" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhZbpG-380PryeGx-8xGGp1QW8m1EcU9j_AeqtbbhRQRC0el9t-BEF9pWig&usqp=CAc"} />
                        </Route>
                        <Route exact path="/coke">
                            <Snack item=" coke" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ40zVbAPhXRP8S3h3H2PPUqHwQmgzMY3vYKINxWD5C7v--rYsYaew1exDJRv7Hh_2HQllnPQ&usqp=CAc"} />
                        </Route>
                        <Route exact path="/pepsi">
                            <Snack item="Pepsi" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBu_6SFmJ0tk8C8OMkjNIV9tKPTks6RMyNqAk5t3e3nQbWbGnTpO2KW3WvMh5H9fymrHmRTTA&usqp=CAc"} />
                        </Route>
                        <Route exact path="/orange">
                            <Snack item="Orange" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJi6YaW5Ag7Xt24WKRVOM5hqm_nwI46ulf9i9OMpWmM9GHBl9CjDZChBRujD9Hl09bLzJFFQ&usqp=CAc"} />
                        </Route>

                    </div>
                </>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine
