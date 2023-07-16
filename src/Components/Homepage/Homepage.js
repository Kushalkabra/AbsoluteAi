import React from 'react'
import './Homepage.css'
import writing from '../../Images/writing.png'

import socialmedia from '../../Images/socialmedia.png'
import marketing from '../../Images/marketing.png'
import seo from '../../Images/seo.png'
import design from '../../Images/design.png'
import travel from '../../Images/travel.png'
function Homepage() {
  return (
    <div>
         <header>
                <h1>One Stop For All Your Needs</h1>
            </header>
        <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="/Writing" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="icon"> <img src={writing} width={70} height={70} /> </div>
        
        <div class="ag-courses-item_title">
          
         Writing
        </div>

        
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="/Social" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="icon"> <img src={socialmedia} width={90} height={90} /> </div>
        <div class="ag-courses-item_title">
          Social Media
        </div>

       
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="/Marketing" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="icon"> <img src={marketing} width={90} height={90} /> </div>
        <div class="ag-courses-item_title">
          Marketing
        </div>

       
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="/Seo" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="icon"> <img src={seo} width={90} height={90} /> </div>
        <div class="ag-courses-item_title">
          SEO
        </div>

        
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="/Design" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="icon"> <img src={design} width={90} height={90} /> </div>
        <div class="ag-courses-item_title">
          Design
        </div>

       
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="/Travel" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="icon"> <img src={travel} width={90} height={90} /> </div>
        <div class="ag-courses-item_title">
          Travel
        </div>
      </a>
    </div>

   

  </div>
</div>
    </div>
  )
}

export default Homepage