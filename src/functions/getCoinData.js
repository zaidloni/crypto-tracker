import axios from "axios";
import { COIN_GECKO_URL } from "../constants";

export const getCoinData = async (id, slice) => {
  const API_URL = COIN_GECKO_URL + `${id}`;
  var response_data;
  if (slice) {
    response_data = await axios.get(API_URL.slice(0, -1), {
      crossDomain: true,
    });
  } else {
    response_data = await axios.get(API_URL, {
      crossDomain: true,
    });
  }


  if (!response_data) {
    console.log("No data");
    return;
  }
  return response_data.data;
};
