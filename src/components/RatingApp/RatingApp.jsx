import React from 'react'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
 //let rating=1;
let ratingChanged= (newRating) => {
  console.log(newRating);
  alert("tu as evalue l'app a : "+newRating);
 // rating=newRating;
};
 


function RatingApp() {
    return (
        <div>
        {/* <h1>hiii {rating}</h1>
            <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,   */}
<h1>
 choisissez Votre evaluation a nous ❤⭐ 
</h1>
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />

        </div>
    )
}

export default RatingApp;
