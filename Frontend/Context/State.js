import React, { useEffect, useState } from "react";

import Context from "./Context";

import axios from "axios";

const StateData = (props) => {
    const [counter, setcounter] = useState(0) 
    const [cartdetails, setCartdetails] = useState([])


    const Increase = () => {
        setcounter(counter + 1)
    }

    // const RefreshData = (props) => {
    //     useEffect(() => {
    //         async function Cart() {
    //             try {
    //                 const CartDetail = await axios.get("http://192.168.121.210:5000/apidata/Cartdata")
    //                 setCartdetails(CartDetail.data)
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //         Cart()
    //     }, [])
    // }

    return (
        <Context.Provider value={{ counter, setcounter, Increase }}>
            {props.children}
        </Context.Provider>
    )
}

export default StateData