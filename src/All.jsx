import React, { useEffect, useState } from 'react'
import photo from './images/item-1.jpeg'
import photo2 from './images/item-2.jpeg'
import photo3 from './images/item-3.jpeg'
import photo4 from './images/item-4.jpeg'
import photo5 from './images/item-5.jpeg'
import photo6 from './images/item-6.jpeg'
import photo7 from './images/item-7.jpeg'
import photo8 from './images/item-8.jpeg'
import photo9 from './images/item-9.jpeg'
import URL from './Base'
import { Card } from './Card'
import { Animated } from 'react-animated-css'

export const foto = ["", photo, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9]
function All({ condition }) {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || [])


    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("items"));
        if (storedTodos) {
            setItems(storedTodos);
        } else getData()
    }, [])


    const getData = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        setItems(data.menu)
    }
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);
    return (
        <>
            <Animated animationIn="bounceInLeft" className='section-center' animationOut="fadeOut" isVisible={true}>
                {items.map(item => <Card key={item.id} {...item} img={foto[item.id]} />)}
            </Animated>
        </>

    )
}
export default All