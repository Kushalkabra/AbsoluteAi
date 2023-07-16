import React from 'react'
import Ai from '../../Images/Ai.png'
import Image from '../../Images/Image.jpg'
function Header() {
  return (
    <div>
     <nav class="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">

  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <a href="/"><img src={Image} width={180} height={80} margin-left="30px" /></a>
   
  </div>
</nav>
    </div>
  )
}

export default Header