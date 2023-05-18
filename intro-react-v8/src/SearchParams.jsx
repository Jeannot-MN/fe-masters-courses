import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState();
  const [breed, setBreed] = useState();

  const breeds = ["JMN"];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(event) => {
              setAnimal(event.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((element, index) => {
              return (
                <option key={index} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            disabled={!breeds.length}
            onChange={(event) => {
              setBreed(event.target.value);
            }}
          >
            <option />
            {breeds.map((element, index) => {
              return (
                <option key={index} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
