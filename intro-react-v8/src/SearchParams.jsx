import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import PetList from "./PetList";
import useBreedList from "./useBreedList";

import fetchPets from "./fetchPets";
import { AdoptedPetContext } from "./AdoptedPetContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState();
  const [breeds] = useBreedList(animal);
  const result = useQuery(["pets", requestParams], fetchPets);

  const [adoptedPets] = useContext(AdoptedPetContext);

  const pets = result?.data?.pets || [];

  return (
    <>
      <div>
        {adoptedPets.map((ap) => (
          <div key={ap.id}>
            <div className="pet image-container">
              <img src={ap.images[0]} alt={ap.name} />
            </div>
          </div>
        ))}
      </div>
      <div className="search-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);

            const obj = {
              location: formData.get("location") || "",
              animal: animal || "",
              breed: formData.get("breed") || "",
            };

            setRequestParams(obj);
          }}
        >
          <label htmlFor="location">
            Location
            <input id="location" name="location" placeholder="Location" />
          </label>

          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={animal}
              onChange={(event) => {
                setAnimal(event.target.value);
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
            <select id="breed" name="breed" disabled={!breeds.length}>
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

        <PetList pets={pets || []} />
      </div>
    </>
  );
};

export default SearchParams;
