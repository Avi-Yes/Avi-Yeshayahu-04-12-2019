export const saveLocally = newLocation => {
  let favLocation = getFavLocations();
  const isExists = isLocationExists(newLocation.id);
  if (!isExists) {
    console.log("isExists", isExists);
    favLocation.push(newLocation);
    localStorage.setItem("favLocation", JSON.stringify(favLocation));
  }
};

export const removeLocally = locationId => {
  let favLocation = getFavLocations();
  let result = favLocation.filter(loc => loc.id !== locationId);
  localStorage.setItem("favLocation", JSON.stringify(result));
};

export const getFavLocations = () => {
  return JSON.parse(localStorage.getItem("favLocation")) || [];
};

export const isLocationExists = newLocationId =>
  getFavLocations().some(location => newLocationId === location.id);
