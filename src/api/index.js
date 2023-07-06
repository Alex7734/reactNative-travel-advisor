import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
      {
        params: {
          bl_latitude: "43.60584077999597",
          tr_latitude: "43.62886852898228",
          bl_longitude: "25.30096259037221",
          tr_longitude: "25.3774638794635",
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
