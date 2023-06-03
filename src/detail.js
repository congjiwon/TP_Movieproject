const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTU4YzgzNGRjNWU5ZTk4MmNkNWU5YzYyMWQ3ZjEzYiIsInN1YiI6IjY0NzA5ZWM1NTQzN2Y1MDBjMzI4MzY3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohD6y4xS5i0GFnbWHvCuUNrNPvenh2u3bCJLYPxKSA0",
  },
};

let id = location.href.substr(location.href.lastIndexOf("=") + 1);
const apiURL = "https://api.themoviedb.org/3/movie/" + id;

fetch(apiURL, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let movieName = document.querySelector("#movieName");
    movieName.textContent = id + response.title;
  })
  .catch((err) => console.error(err));
