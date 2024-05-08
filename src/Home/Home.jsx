import "./Home.css";

import { Link } from "react-router-dom";

export function Home() {
  

  return (
    <>
      <div className="banner text-white">
        <h3>Health On The Go</h3>
        <h5>Solución de movilidad y salud</h5>
      </div>

      <section className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <img
              src="../../src/assets/barbershop-logo.png"
              alt="img"
              className="w-50"
            />
            <hr />
          </div>
        </div>
      </section>

      <section className="container my-2">
        <div className="row text-center">
          <div className="col-6 my-3">
            <div
              className="card text-bg-dark h-100 p-4"
              style={{ height: "300px" }}
            >
              <img
                src="../../src/assets/salud.jpg"
                alt="img"
                className="card-img-top"
                style={{ objectFit: "cover", height: "100%" }}
              />
              
              <Link to="/salud" className="btn btn-primary p-2">
                Ingresar
              </Link>
            </div>
          </div>

          <div className="col-6 my-3">
            <div
              className="card text-bg-dark h-100 p-4"
              style={{ height: "300px" }}
            >
              <img
                src="../../src/assets/movi.png"
                alt="img"
                className="card-img-top"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <button className="btn btn-primary p-2">Ingresar</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
