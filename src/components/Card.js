import React from 'react';
import defaultImage from '../img/backup3-img.jpeg'

function Card({ entityId, entityType, data }) {
  const imageSrc = `https://starwars-visualguide.com/assets/img/${entityType === 'people' ? 'characters' : entityType}/${entityId}.jpg`;
  return (
    <div className="card-info">
      <div>
        <img
          onError={(e) => {
            e.target.src = defaultImage;
          }}
          src={imageSrc}
          alt={data.name}
        />
      </div>
      <h3>{data.name}</h3>
      <ul>

        {entityType === "people" && (
          <>
            <li>Gender: {data.gender}</li>
            <li>Birth Year: {data.birth_year}</li>
            <li>Eye color: {data.eye_color}</li>
          </>
        )}

        {entityType === "planets" && (
          <>
            <li>Population: {data.population}</li>
            <li>Orbital Period: {data.orbital_period}</li>
            <li>Diameter: {data.diameter}</li>
          </>
        )}

        {entityType === "starships" && (
          <>
            <li>Model: {data.model}</li>
            <li>Manufacturer: {data.manufacturer}</li>
            <li>Cost In Credits: {data.cost_in_credits}</li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Card;