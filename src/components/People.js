import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

export default function People() {
  const { data, status } = useQuery("planets", fetchPeople);
  console.log(data);
  console.log(status);
  return (
    <div>
      <h1>People</h1>
      <p>{status === "loading" && <div>Loading Data...</div>}</p>
      <p>{status === "error" && <div>Error Fetching Data</div>}</p>
      <p>
        {status === "success" && (
          <div>
            {data &&
              data.results.map((person) => (
                <Person key={person.name} person={person} />
              ))}
          </div>
        )}
      </p>
    </div>
  );
}
