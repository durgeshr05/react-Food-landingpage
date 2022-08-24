import React from 'react'

function About() {
  return (
    <div className="about">
        <div className="container">
           <div className="row">
            <div className="col-6 p-25 ">
                <h3>About Us</h3>
                <h1>WELCOME TO KHATE RAHO</h1>
                <p>
                This affection for pizza took us to different pizza spots and we attempted various valid and fascinating arrangements. While we generally appreciate the experience yet more we went about it, more we understood that there was something missing. We couldnt call attention to out yet the experience was not finished, was not healthy.
                </p>
                <button className="btn btn-smart">READ MORE</button>


            </div>
            <div className="col-6">
                <div className="about__img">
                    <img className="img-responsive" src="https://i0.wp.com/www.eatlanka.com/wp-content/uploads/2020/11/cheese-pizza-filling-hd-wallpaper-preview.jpg" alt="About Pizza"/>
                </div>
            </div>
            
           </div>
        </div>
    </div>
  )
}

export default About