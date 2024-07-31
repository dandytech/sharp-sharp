export const updateImage = (url) => {
  const user = window.localStorage.getItem("user_sharp_data");
  //convert data from string to jSON to store as object
  const parsedUser = JSON.parse(user);
  const payload = {
    ...parsedUser, //get new array
    photo: url,
  };

  //save it back as string
  localStorage.setItem("user_sharp_data", JSON.stringify(payload));
  window.location.reload(); //reload page after photo upload
};

export const updateLocalData = (data) => {
  //save it back as string
  localStorage.setItem("user_sharp_data", JSON.stringify(data));
  window.location.reload(); //reload page after photo upload
};
