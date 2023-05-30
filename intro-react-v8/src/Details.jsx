import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import fetchPet from "./fetchPet";
import ErrorBoundry from "./ErrorBoundry";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { AdoptedPetContext } from "./AdoptedPetContext";

const Details = () => {
  const { id } = useParams();
  const petDetails = useQuery(["details", id], fetchPet);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [adoptedPets, setAdoptedPets] = useContext(AdoptedPetContext);

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
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
      {showModal && (
        <Modal>
          <div>
            <h1>Would you like to adopt {pet.name}</h1>
            <div className="buttons">
              <button
                onClick={() => {
                  setAdoptedPets([...adoptedPets, pet]);
                  setShowModal(false);
                  navigate("/");
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

function DetailsWrapper() {
  return (
    <ErrorBoundry>
      <Details />
    </ErrorBoundry>
  );
}
export default DetailsWrapper;
