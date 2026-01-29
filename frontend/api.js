import axios from "axios";

const BASE_URL = "http://localhost:5000/api/mail";

export const sendReservation = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/send`, data);
    return response.data; // { message: "Email sent successfully" }
  } catch (error) {
    console.error("Failed to send reservation:", error.response?.data || error);
    throw error;
  }
};
