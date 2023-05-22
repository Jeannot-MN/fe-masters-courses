import { useQuery } from "@tanstack/react-query";
import fetchBreeds from "./fetchBreeds";

export default function useBreedList(animal) {
  const breedsApiResponse = useQuery(["breeds", animal], fetchBreeds);
  return [breedsApiResponse?.data?.breeds || [], breedsApiResponse.status];
}
