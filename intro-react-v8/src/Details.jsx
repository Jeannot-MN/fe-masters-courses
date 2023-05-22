import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const petDetails = useQuery(["details", id], fetchPet);

  if (petDetails.isLoading) {
    return (
      <div className="loading-pane">
        <h2>💫</h2>
      </div>
    );
  }

  const pet = petDetails.data.pets[0];
  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;
