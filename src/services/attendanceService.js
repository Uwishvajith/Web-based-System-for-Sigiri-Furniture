import axios from "axios";

const HOST = "https://sigiri-furniture-app.herokuapp.com/";

export const markAttendance = async (userId) => {
  try {
    await axios.post(`${HOST}/api/user/${userId}/attendance`);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

export const getAttendanceList = async () => {
  try {
    const response = await axios.get(`${HOST}/api/attendance`);
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
