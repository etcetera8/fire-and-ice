export const initialApiCall = async () => {
  try {

  const response = await fetch(`http://localhost:3001/api/v1/houses`);
  const resolvedResponse = await response.json();
  const cleanedMembers = swornMemberCall(resolvedResponse)
  return resolvedResponse;
} catch (error) {
  return "Error fetching data"
  }
}

export const swornMemberCall = async (arrayOfHouses) => {
  const unresolvedPromises = arrayOfHouses.map( async (house) => {
    const unresolvedMembers = house.swornMembers.map(async (url) => {
      let memberFetch = await fetch(url)
      let memberInfo = await memberFetch.json();
      return memberInfo.name
    })
    return await Promise.all(unresolvedMembers)
  })
  console.log("hi,",await Promise.all(unresolvedPromises));
  return Promise.all(unresolvedPromises)
}

//http://localhost:3001/api/v1/character/:id

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
