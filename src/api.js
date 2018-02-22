export const initialApiCall = async () => {
  const response = await fetch(`http://localhost:3001/api/v1/houses`);
  const resolvedResponse = await response.json();
  console.log(resolvedResponse);
  initialCleaner(resolvedResponse)
  return resolvedResponse
}

const initialCleaner = (array) => {

}