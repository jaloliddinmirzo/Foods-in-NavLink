import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./index.css"
import All from './All'
import { Animated } from 'react-animated-css'




const Home = () => {

  return (
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <NavLink to={"/"}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : "filter-btn"
          }}
        >All</NavLink>


        <NavLink to={"/breakfast"}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : "filter-btn"
          }}
        >Breakfast</NavLink>

        <NavLink to={"/lunch"}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : "filter-btn"
          }}
        >lunch</NavLink>

        <NavLink to={"/shakes"}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : "filter-btn"
          }}
        >shakes</NavLink>
      </div>

        <div className="section-center">
          <Outlet></Outlet>
        </div>
    </section>
  )
}

export default Home