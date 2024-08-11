import axios from "axios";

const apiUrl = "https://dummyjson.com/users";

const gettingDataOfUsers = async () => {
  try {
    const data = await axios.get(apiUrl);
    return data;
  } catch (error) {}
};

export default gettingDataOfUsers;
