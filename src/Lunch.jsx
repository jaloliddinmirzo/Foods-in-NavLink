import React, { useState } from 'react'
import URL from './Base';
import { Card } from './Card';
import { foto } from './All';

function Lunch() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || [])

  const click = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setItems(
      data.menu.filter((item) => item.category == "lunch")
    )
  }
  click()
  return (
    <>
      {items.map(item => <Card key={item.id} {...item} img={foto[item.id]} />)}
    </>
  )
}

export default Lunch