export const initialApiCall = async () => {
  try {

  const response = await fetch(`http://localhost:3001/api/v1/houses`);
  const resolvedResponse = await response.json();
  return resolvedResponse;
} catch (error) {
  return "Error fetching data"
  }
}

const initialCleaner = (array) => {
  const cleanedCards = array.map( card => {
    const {
      name,
      ancestralWeapons,
      founded,
      seats,
      titles,
      coatOfArms,
      words
    } = card

    return {
      name,
      ancestralWeapons,
      founded,
      seats,
      titles,
      coatOfArms,
      words
    }
  })
  return cleanedCards
}