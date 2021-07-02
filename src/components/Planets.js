import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

export default function Planets() {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);
  console.log(status);
  return (
    <div>
      <h1>Planets</h1>
      <p>{status === "loading" && <div>Loading Data...</div>}</p>
      <p>{status === "error" && <div>Error Fetching Data</div>}</p>
      <p>
        {status === "success" && (
          <div>
            {data &&
              data.results.map((planet) => (
                <Planet key={planet.name} planet={planet} />
              ))}
          </div>
        )}
      </p>
    </div>
  );
}
