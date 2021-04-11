import axios from "axios";

const HOST = "http://localhost:4000";

export const addEmployee = async (employeePayload) => {
  console.log(employeePayload, "<<<<<<<<<<<<<<<<<<<<<<<<");
  try {
    await axios.post(`${HOST}/api/employee`, employeePayload);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

export const getEmployee = async (employeeId) => {
  try {
    const { data } = await axios.get(`${HOST}/api/employee/${employeeId}`);
    return {
      ok: true,
      data: data.data.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

export const updateEmployee = async (userId, employeePayload) => {
  console.log(employeePayload, "<<<<<<<<<<<<<<<<<<<<<<<<");
  try {
    await axios.post(`${HOST}/api/employee/${userId}`, employeePayload);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};
