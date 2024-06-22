import axios from "axios";
const backendUrl = process.env.REACT_APP_API_ENDPOINT;

export const addToSavedData = async (token, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let header = {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "application/json",
      };
      let response = await axios.post(
        `${backendUrl}/user/add-to-schema`,
        data,
        { headers: header }
      );
      resolve(response.data);
    } catch (err) {
      reject(err);
    }
  });
};

export const deleteSavedData = async (token, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let header = {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "application/json",
      };
      let response = await axios.delete(
        `${backendUrl}/user/delete-saved-data/${data}`,
        { headers: header }
      );
      resolve(response.data);
    } catch (err) {
      reject(err);
    }
  });
};

export const editSavedData = async (token, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let header = {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "application/json",
      };
      let response = await axios.put(
        `${backendUrl}/user/edit-saved-data`,data,
        { headers: header }
      );
      resolve(response.data);
    } catch (err) {
      reject(err);
    }
  });
};

export const fetchSavedDataForuser = async (token, data) => {
  console.log("dfa",process.env);
  return new Promise(async (resolve, reject) => {
    try {
      let header = {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "application/json",
      };
      let response = await axios.get(
        `${backendUrl}/user/fetch-saved-data/${data}`,
        { headers: header }
      );
      resolve(response.data);
    } catch (err) {
      reject(err);
    }
  });
};
