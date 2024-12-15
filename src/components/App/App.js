import Header from "../Header";
import React, { useEffect, useState } from "react";
import "./App.css";
import { getData } from "../../services/swDataHandler";
import Card from '../Card'

function App() {
  const [entityType, setEntityType] = useState("people");
  const [entityId, setEntityId] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const entityData = await getData(entityId, entityType);
      setData(entityData);
    };
    fetchData();
  }, [entityType, entityId]);

  const handleNextClick = () => {
    setEntityId((prev) => prev + 1);
  };

  return (
    <div className="container">
      <Header setEntityType={setEntityType} />

      <div className="card">
        <button onClick={handleNextClick}>Next</button>
        <br />
        <Card entityId={entityId} entityType={entityType} data={data}/>
        {/*{entityType === "people" && (*/}
        {/*  <div className="card-info">*/}
        {/*    <div>*/}
        {/*      <img*/}
        {/*        src={`https://starwars-visualguide.com/assets/img/characters/${entityId}.jpg`}*/}
        {/*        alt={data.name}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*    <h3>{data.name}</h3>*/}
        {/*    <ul>*/}
        {/*      <li>Gender: {data.gender}</li>*/}
        {/*      <li>Birth Year: {data.birth_year}</li>*/}
        {/*      <li>Eye color: {data.eye_color}</li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*)}*/}

        {/*{entityType === "planets" && (*/}
        {/*  <div className="card-info">*/}
        {/*    <img*/}
        {/*      src={`https://starwars-visualguide.com/assets/img/planets/${entityId}.jpg`}*/}
        {/*      alt={data.name}*/}
        {/*      onError={(e) => {*/}
        {/*        e.target.src =*/}
        {/*          "https://starwars-visualguide.com/assets/img/planets/5.jpg";*/}
        {/*      }}*/}
        {/*    />*/}
        {/*    <h3>{data.name}</h3>*/}
        {/*    <ul>*/}
        {/*      <li>Population: {data.population}</li>*/}
        {/*      <li>Orbital Period: {data.orbital_period}</li>*/}
        {/*      <li>Diameter: {data.diameter}</li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*)}*/}

        {/*{entityType === "starships" && (*/}
        {/*  <div className="card-info">*/}
        {/*    <img*/}
        {/*      src={`https://starwars-visualguide.com/assets/img/starships/${entityId}.jpg`}*/}
        {/*      alt={data.name}*/}
        {/*      onError={(e) => {*/}
        {/*        e.target.src =*/}
        {/*          "https://starwars-visualguide.com/assets/img/starships/10.jpg";*/}
        {/*      }}*/}
        {/*    />*/}
        {/*    <h3>{data.name}</h3>*/}
        {/*    <ul>*/}
        {/*      <li>Model: {data.model}</li>*/}
        {/*      <li>Manufacturer: {data.manufacturer}</li>*/}
        {/*      <li>Cost In Credits: {data.cost_in_credits}</li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </div>
  );
}

export default App;
