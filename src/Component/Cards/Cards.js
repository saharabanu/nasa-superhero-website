import React from 'react';
import './Cards.css';

const Cards = (props) => {

    const {name, img, designation, age, salary, contry} = props.card || {}
    // console.log(props);
    return (
        <div className="col-md-4 g-4  ">
            <div className="card mb-3 card h-100 " >
          <div className="col-md-4">
                <img src={img} className="img-fluid rounded-circle image" alt="..."/>
           </div>
  <div className="row g-0 ">
    
     <div className="col-md-8 ">
        <div className="">
      <div className="card-body ">
        <h5 className="card-title ">Name: {name}</h5>
        <p className="card-text ">Designation: {designation}</p>
        <p ><small className="text-dark">Age: {age}</small></p>
        <p ><small className="text-dark">Monthly Salary:${salary}</small></p>
        <p ><small className="text-dark">Country: {contry}</small></p>
               <button
                 onClick = {() => props.addedPerson(props.card)}
                className="btn btn-warning text-center text-white button-size "><i className="fas fa-rocket"></i> Hired Me</button>
         <br />
         <div className="social">
              <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
              <a href="https://github.com"><i className="fab fa-github"></i></a>
              <a href="https://instagram.com"><i className="fab fa-instagram-square"></i></a>
          </div>

      </div>
      </div>
    </div> 


  </div>
</div>
        </div>


    );
};

export default Cards; 