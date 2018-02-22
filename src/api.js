export const initialApiCall = async () => {
  const response = await fetch(`http://localhost:3001/api/v1/houses`);
  const resolvedResponse = await response.json();
  return initialCleaner(resolvedResponse)
  
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