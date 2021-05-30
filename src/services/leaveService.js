import axios from "axios";

const HOST = "http://sigiri-furniture-app.herokuapp.com";

export const addLeave = async (leavePayload) => {
  //console.log(leavePayload, "<<<<<<<<<<<<<<<<<<<<<<<<");
  try {
    await axios.post(`${HOST}/api/leave`, leavePayload);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

export const getAllleaves = async () => {
  console.log("done;");
  try {
    const response = await axios.get(`${HOST}/api/leave`);
    console.log(response, "res");
    return {
      ok: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};
