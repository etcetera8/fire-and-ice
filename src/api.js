export const initialApiCall = async () => {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/houses`);
    const resolvedResponse = await response.json();
    const cleanedMembers = await swornMemberCall(resolvedResponse);
    
    const membersAdded = resolvedResponse.map((house, index) => {
      house.swornMembers = cleanedMembers[index];
      return house;
    });
    return membersAdded;
  } catch (error) {
    return "Error fetching data";
  }
};

export const swornMemberCall = async (arrayOfHouses) => {
  const unresolvedPromises = arrayOfHouses.map( async (house) => {
    const unresolvedMembers = house.swornMembers.map(async (url) => {
      let memberFetch = await fetch(url);
      let memberInfo = await memberFetch.json();
      return memberInfo;
    });
    return await Promise.all(unresolvedMembers);
  });
  return Promise.all(unresolvedPromises);
};
