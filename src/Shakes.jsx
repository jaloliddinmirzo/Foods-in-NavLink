import React, { useState } from 'react'
import URL from './Base';
import { Card } from './Card';
import { foto } from './All';
import { Animated } from 'react-animated-css';
function Shakes() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || [])

  const click = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setItems(
      data.menu.filter((item) => item.category == "shakes")
    )
  }
  click()
  return (
    <>
      <Animated animationIn="bounceInUp" className='section-center' animationOut="fadeOut" isVisible={true}>
        {items.map(item => <Card key={item.id} {...item} img={foto[item.id]} />)}
      </Animated>
    </>
  )
}

export default Shakes