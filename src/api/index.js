import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lon, tr_lat, tr_lon, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat,
          tr_latitude: tr_lat,
          bl_longitude: bl_lon,
          tr_longitude: tr_lon,
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "85027806dbmsh23a84391e32ee61p19d4e9jsnc7cd0977f065",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
