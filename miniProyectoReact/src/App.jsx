import { useEffect, useState } from "react";
import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Select from "./components/select/Select"
import Footer from "./components/footer/Footer";
import  star from "./img/star.png"








function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>

      
      
      
      
      
      
      <Navbar></Navbar>
      <div className="app m-5 ">
        <h1 className="title-up">Stays in Finland</h1>
        <div className="card-container ">
          <div className="row ">
            {data.slice(0, 12).map((listing, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100" style={{ height: "60%" }}>
                  <div className="bg-image hover-overlay ripple img-style rounded-8 border" data-mdb-ripple-color="light">
                    <img
                      src={listing.photo}
                      alt={listing.title}
                      className="img-fluid"
                      style={{ aspectRatio: "5/3" }}

                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                  <div className="card-body d-flex flex-column ">

                    <div><p className="card-text">{listing.city}, {listing.country}</p></div>
                    <div> <p className="card-text">{listing.type}</p></div>
                    <div><p className="card-text"><img src={star} className="img-fluid" alt="star" /> {listing.rating}</p></div>

                    <div className="d-flex justify-content-between align-items-center">{listing.beds !== null && <p className="card-text">Beds: {listing.beds}</p>}
                      {listing.superHost &&
                        <p className="card-text-host w-45 rounded-8 border">Superhost</p>}</div>

                    <div><h2 className="card-text-title d-flex justify-content-start align-items-center">{listing.title}</h2></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    
      




    </>
  );
}

export default App;
