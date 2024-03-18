import { useState } from "react";
import "./gym.css";
import { useEffect } from "react";

let Gym = () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "672444eaf8msh8b507bd5de45338p1fdda4jsn1ef9821237db",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const [exercises, setExercise] = useState([]);
  const [constdata , setConstData] = useState([]);
  const [count , setCount] = useState(19);
  

  async function fetchData() {
    let data = await fetch(url, options);
    let parsedData = await data.json();
    setExercise([...exercises, ...parsedData]);
    setConstData([...constdata , ...parsedData])
  }

  useEffect(() => {
    fetchData();
  }, []);
  

  let searchFunctionality = (value) => {
    let arr = [...constdata]
    let filtered = arr.filter((Element , index) => {
        let name =  Element.name.toLowerCase();
        let target = Element.target.toLowerCase();
        let bodyPart = Element.bodyPart.toLowerCase()
        let searchs = value.toLowerCase();
        if( index <= count && name.includes(searchs) || target.includes(searchs) || bodyPart.includes(searchs)){
            return true;
        }
        
    });
    setExercise([...filtered]);
  }

  
 

  return (
    <div className="main-cont">
      <div className="header">
        <h2>Where Fitness Meets Fun and Results Are Achieved</h2>
        <p>
          Include an inspiring image or video that showcases your gym's
          energetic atmosphere, trainers, or members working out.
        </p>
      </div>

      <div className="gallery">
        <div className="images">
          <img
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
            className="image"
          />
          <img
            src="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
            className="image"
          />
          <img
            src="https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
            className="image"
          />
          <img
            src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
            className="image"
          />
          <img
            src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
            className="image"
          />
          <img
            src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
            className="image"
          />
        </div>
      </div>

      <div className="search_exercise">
        <h1>Exercise List</h1>
        <input
          type="text"
          placeholder="Search by target, body part, or exercise"
          onChange={(e) => searchFunctionality(e.target.value)} />
        <div className="exercises">

          {exercises.map((Element, index) =>  {
            
            console.log(count);
            if(index <= count){
             return <div className="exercise" key={index}>
                        <div className="gif">
                <img
                  src= {Element.gifUrl}
                  alt="#"
                />
                        </div>
                        <h2>{Element.name}</h2>
                        <p>{Element.target}</p>
                        <p>{Element.bodyPart}</p>
                    </div>
            }
          })}

        </div>
        <button onClick={() => setCount((prev) => prev + 20)}>Load More</button>
      </div>
    </div>
  );
};

export default Gym;
