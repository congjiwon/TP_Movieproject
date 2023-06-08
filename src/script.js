// TMDB API KEY
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTU4YzgzNGRjNWU5ZTk4MmNkNWU5YzYyMWQ3ZjEzYiIsInN1YiI6IjY0NzA5ZWM1NTQzN2Y1MDBjMzI4MzY3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohD6y4xS5i0GFnbWHvCuUNrNPvenh2u3bCJLYPxKSA0",
  },
};

const resultArray = [];
const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search_btn");

// Top Rated 영화 목록 API 받아오기
// index.html id="movies" 부분에 카드 추가 (forEach 사용)
fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);
    // 전체 영화 나열
    response.results.forEach((movie) => {
      resultArray.push(movie);

      let temp_html = `<div class="movie-card" onClick="location.href='detail.html?id='+${
        movie.id
      }">
                        <img
                          class="movie_img"
                          src="https://image.tmdb.org/t/p/original${
                            movie.poster_path
                          }"
                          alt=""
                        />
                        <p class="movie_name"><b>${movie.title}</b></p>
                        <p class="movie_rate ${getColor(
                          movie.vote_average
                        )}">✦ 평점 <b>${movie.vote_average}</b> ✦</p>
                        <p class="movie_desc">${movie.overview}</p>
                      </div>`;

      document
        .querySelector("#movies")
        .insertAdjacentHTML("beforeend", temp_html);
    });

    // 평점순으로 정렬
    const vote_btn = document.getElementById("vote");
    const arr1 = [];
    for (let i = 0; i < resultArray.length; i++) {
      arr1.push(resultArray[i]);
    }

    vote_btn.addEventListener("click", () => {
      arr1.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });
      document.querySelector("#movies").innerHTML = "";
      arr1.forEach((movie) => {
        console.log(movie.id);

        let temp_html = `<div class="movie-card" onClick="location.href='detail.html?id='+${
          movie.id
        }">
                          <img
                            class="movie_img"
                            src="https://image.tmdb.org/t/p/original${
                              movie.poster_path
                            }"
                            alt=""
                          />
                          <p class="movie_name"><b>${movie.title}</b></p>
                          <p class="movie_rate ${getColor(
                            movie.vote_average
                          )}">✦ 평점 <b>${movie.vote_average}</b> ✦</p>
                          <p class="movie_desc">${movie.overview}</p>
                        </div>`;

        document
          .querySelector("#movies")
          .insertAdjacentHTML("beforeend", temp_html);
      });
    });

    // 인기순으로 정렬
    const popular_btn = document.getElementById("popular");
    popular_btn.addEventListener("click", () => {
      window.location.reload();
    });

    // 검색
    searchButton.addEventListener("click", () => {
      function checkEng() {
        let input = searchInput.value;
        let regex = /^[A-Za-z0-9]+$/; // 영어,숫자 포함된 문자열인지 확인

        if (!regex.test(input)) {
          alert("영어 또는 숫자로만 검색이 가능합니다");
          return false;
        }
        return true;
      }
      checkEng();

      document.querySelector("#movies").innerHTML = "";

      const searchTerm = searchInput.value.toLowerCase();
      const filteredMovies = resultArray.filter((resultArray) =>
        resultArray.title.toLowerCase().includes(searchTerm)
      );

      // 검색 결과가 1개 이상일 때 main에 띄울 부분
      // 결과에 맞는 영화와 갯수 표시
      if (filteredMovies.length >= 1) {
        document
          .querySelector(".info-card")
          .setAttribute("style", "display: flex");
        document.querySelector(".info-card").textContent =
          "검색 결과 : " + filteredMovies.length + "개";

        filteredMovies.forEach((movie) => {
          let search_html = `<div class="movie-card" onClick="location.href='detail.html?id='+${
            movie.id
          }">
                              <img
                                class="movie_img"
                                src="https://image.tmdb.org/t/p/original${
                                  movie.poster_path
                                }"
                                alt=""
                              />
                              <p class="movie_name"><b>${movie.title}</b></p>
                              <p class="movie_rate ${getColor(
                                movie.vote_average
                              )}">✦ 평점 <b>${movie.vote_average}</b> ✦</p>
                              <p class="movie_desc">${movie.overview}</p>
                            </div>`;

          document
            .querySelector("#movies")
            .insertAdjacentHTML("beforeend", search_html);
        });
        // 검색 결과가 없을 때 main에 띄울 부분
      } else {
        document
          .querySelector(".info-card")
          .setAttribute("style", "display: flex");
        document.querySelector(".info-card").textContent =
          "일치하는 영화가 없습니다";
      }
    });
  })
  .catch((err) => console.error(err));

function getColor(vote_average) {
  if (vote_average >= 8) {
    return "pink";
  } else if (vote_average >= 7) {
    return "yellow";
  } else {
    return "blue";
  }
}
