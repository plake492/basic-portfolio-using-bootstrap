import axios from "axios";

export default {
  getConcertResults: function(search) {
    return axios.get(
      `https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`
    );
  },
  getMovieResults: function(search) {
    return axios.get(
      `http://www.omdbapi.com/?t="${search}&y=&plot=short&apikey=trilogy`
    );
    //   .then(data => {
    //     console.log(data);
    //   });
  }
};
