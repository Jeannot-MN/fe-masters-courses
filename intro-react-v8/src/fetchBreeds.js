export default async function fetchBreeds({ queryKey }) {
  const animal = queryKey[1];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!res.ok) throw new Error("Something went wrong while fetching breeds");

  return res.json();
}
