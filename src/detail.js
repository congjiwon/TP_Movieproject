const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTU4YzgzNGRjNWU5ZTk4MmNkNWU5YzYyMWQ3ZjEzYiIsInN1YiI6IjY0NzA5ZWM1NTQzN2Y1MDBjMzI4MzY3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohD6y4xS5i0GFnbWHvCuUNrNPvenh2u3bCJLYPxKSA0",
  },
};

let id = location.href.substr(location.href.lastIndexOf("=") + 1);

let movieName = document.querySelector("#movieName");
let moviePoster = document.querySelector(".movie_img");

const apiURL = "https://api.themoviedb.org/3/movie/" + id;

fetch(apiURL, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.poster_path);
    movieName.textContent = response.title;
    moviePoster.innerHTML = `<img
                              class="movie_img"
                              src="https://image.tmdb.org/t/p/original${response.poster_path}"
                              alt=""
                            />`;
  })
  .catch((err) => console.error(err));
