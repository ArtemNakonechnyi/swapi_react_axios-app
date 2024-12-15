import axios from "axios";

export const getData = async (entityId, entityType) => {
  const baseURL = "https://swapi.dev/api/";
  try {
    const response = await axios.get(`${baseURL}${entityType}/${entityId}`);
    let validProps;
    switch (entityType) {
      case "people":
        validProps = ["name", "gender", "birth_year", "eye_color"];
        break;
      case "planets":
        validProps = ["name", "population", "orbital_period", "diameter"];
        break;
      case "starships":
        validProps = ["name", "model", "manufacturer", "cost_in_credits"];
        break;
      default:
        console.log("Entity is not available");
    }

    const filteredData = validProps.reduce((obj, field) => {
      if (response.data[field]) {
        obj[field] = response.data[field];
      }
      return obj;
    }, {});

    return filteredData;
  } catch (err) {
    return { name: "not available" };
  }
};
