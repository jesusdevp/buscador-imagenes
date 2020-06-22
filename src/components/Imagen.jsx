import React from "react";
import PropTypes from "prop-types";

const Imagen = ({ imagen }) => {
  //extraer las variables
  const {
    largeImageURL,
    likes,
    previewURL,
    tags,
    views,
    user,
    downloads,
  } = imagen;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text text-info ">Me gusta: {likes} </p>
          <p className="card-text text-primary ">Descargas: {downloads} </p>
          <p className="card-text"> Vistas: {views} </p>
          <p className="card-text text-success">Por: {user}</p>
        </div>
        <div className="card-footer">
          <a
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
};

Imagen.propTypes = {
  imagen: PropTypes.object.isRequired,
};

export default Imagen;
