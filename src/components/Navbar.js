import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdArticle } from "react-icons/md";


export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-primary text-white">
  <div class="container-fluid justify-content-center">
  <MdArticle style={{ fontSize: '5rem' }}/>
    <a class="ms-3 navbar-brand text-dark text-center fs-1 fw-bold" href="#">Top Articles</a>
 
  </div>
</nav>
  )
}
