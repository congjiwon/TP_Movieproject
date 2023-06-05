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
let movieOriginName = document.querySelector("#movieOriginName");
let moviePoster = document.querySelector("#moviePoster");
let movieRelease = document.querySelector("#movieRelease");
let movieGenre = document.querySelector("#movieGenre");
let movieRuntime = document.querySelector("#movieRuntime");
let movieRate = document.querySelector("#movieRate");
let movieOverview = document.querySelector("#movieOverview");

const apiURL = "https://api.themoviedb.org/3/movie/" + id;

fetch(apiURL, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    console.log(response.genres);
    movieName.textContent = response.title;
    movieOriginName.textContent = response.original_title;
    movieRelease.textContent = "개봉 | " + response.release_date;
    movieGenre.textContent = "장르 | " + response.genres[1].name;
    movieRuntime.textContent = "러닝타임 | " + response.runtime + "분";
    movieRate.textContent =
      "평점 | " + Math.round(response.vote_average * 10) / 10;
    movieOverview.textContent = response.overview;
    moviePoster.innerHTML = `<img
                              class="movie_img"
                              src="https://image.tmdb.org/t/p/original${response.poster_path}"
                              alt=""
                            />`;
  })
  .catch((err) => console.error(err));
