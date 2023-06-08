// detail.js

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTU4YzgzNGRjNWU5ZTk4MmNkNWU5YzYyMWQ3ZjEzYiIsInN1YiI6IjY0NzA5ZWM1NTQzN2Y1MDBjMzI4MzY3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohD6y4xS5i0GFnbWHvCuUNrNPvenh2u3bCJLYPxKSA0",
  },
};

let id = location.href.substr(location.href.lastIndexOf("=") + 1); //문자열을 id 변수에 할당 되기 전 숫잘 변환 (string → number 조건 충족)

let movieName = document.querySelector("#movieName");
let movieOriginName = document.querySelector("#movieOriginName");
let moviePoster = document.querySelector("#moviePoster");
let movieRelease = document.querySelector("#movieRelease");
let movieGenre = document.querySelector("#movieGenre");
let movieRuntime = document.querySelector("#movieRuntime");
let movieRate = document.querySelector("#movieRate");
let movieOverview = document.querySelector("#movieOverview");
let movieVideo = document.querySelector("#movieVideo");
// 리뷰 dom 요소 선택
let reviewForm = document.querySelector("#reviewForm");
let reviewInput = document.querySelector("#review");
let authorInput = document.querySelector("#author");
let passwordInput = document.querySelector("#password");
let commentsSection = document.querySelector("#comments");
let scoreInput = document.getElementById("score");

const apiURL = "https://api.themoviedb.org/3/movie/" + id;
const apiMovieURL =
  "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US";

fetch(apiURL, options)
  .then((response) => response.json())
  .then((response) => {
    genresArr = [];
    for (i = 0; i < response.genres.length; i++) {
      genresArr.push(" " + response.genres[i].name);
    }
    movieName.textContent = response.title;
    movieOriginName.textContent = response.original_title;
    movieRelease.textContent = "개봉 | " + response.release_date;
    movieGenre.textContent = "장르 | " + genresArr;
    movieRuntime.textContent = "러닝타임 | " + response.runtime + "분";
    movieRate.textContent =
      "평점 | " + Math.round(response.vote_average * 10) / 10; // 숫자 결과를 문자열로 변환 (number → string 조건 충족)
    movieOverview.textContent = response.overview;
    moviePoster.innerHTML = `<img
                              class="movie_img"
                              src="https://image.tmdb.org/t/p/original${response.poster_path}"
                              alt=""
                            />`;

    displayReviews(); //리뷰 표시
  })
  .catch((err) => console.error(err));

// 리뷰 표시하는 함수
function displayReviews() {
  let reviews = getReviewsFromLocalStorage();
  let movieId = location.href.substr(location.href.lastIndexOf("=") + 1);
  let filteredReviews = reviews.filter((review) => review.movieId === movieId); // movie id 필터링해서 표시하기
  commentsSection.innerHTML = "";

  for (let i = 0; i < filteredReviews.length; i++) {
    //필터링
    let review = filteredReviews[i];
    let star = "⭐️";
    let score = star.repeat(review.score);

    let commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    commentDiv.innerHTML = `
      <h3>${review.author} <span class="score">${score}</span> <span class="time">${review.time}</span></h3>
      <p>${review.content}</p>
      <div class="comment-options">
        <input type="password" class="comment-password" placeholder="확인 비밀번호 (숫자 4자리)" />
        <button class="comment-edit">수정</button>
        <button class="comment-delete">삭제</button>
      </div>
    `;

    // edit과 delete 클래스 요소를 변수에 할당
    let editButton = commentDiv.querySelector(".comment-edit");
    let deleteButton = commentDiv.querySelector(".comment-delete");

    // 콜백함수로 확인 비밀번호를 가져오고 editreview 함수 호출. 순회중인 리뷰 인덱스
    editButton.addEventListener("click", () => {
      let password = commentDiv.querySelector(".comment-password").value;
      editReview(i, password);
    });

    // delete 함수 호출
    deleteButton.addEventListener("click", () => {
      let password = commentDiv.querySelector(".comment-password").value;
      deleteReview(i, password);
    });

    commentsSection.appendChild(commentDiv);
  }
}

// 로컬 스토리지에서 리뷰 목록을 가져옴
function getReviewsFromLocalStorage() {
  let reviews = localStorage.getItem("reviews");
  if (reviews) {
    return JSON.parse(reviews); // 문자열을 javascript 객체로 변환
  } else {
    return []; // 존재하지 않으면 빈 배열 반환
  }
}
// 로컬 스토리지에 저장
function saveReviewToLocalStorage(review) {
  let reviews = getReviewsFromLocalStorage(); // 겟리뷰에서 함수 호출
  let movieId = location.href.substr(location.href.lastIndexOf("=") + 1);
  review.movieId = movieId; // 리뷰 저장시 id도 함께 저장
  reviews.push(review); // 리뷰 배열에 추가한다 (push 메소드 사용)
  localStorage.setItem("reviews", JSON.stringify(reviews)); // json 문자열로 저장
}

// 리뷰 수정
function editReview(index, password) {
  let reviews = getReviewsFromLocalStorage();
  let review = reviews[index]; // 해당 인덱스에 위치한 리뷰를 가져옴

  if (review.password === password) {
    // 패스워드가 일치하는 지 확인 (조건문 중첩-2중 if 사용)
    let newContent = prompt("수정할 내용을 입력하세요:", review.content); // 일치하면 prompt 사용하여 수정할 내용을 입력받음
    if (newContent) {
      review.content = newContent; // 뉴 콘텐트를 받음
      localStorage.setItem("reviews", JSON.stringify(reviews)); // 셋 아이템 사용하여 다시 배열하고 저장
      displayReviews(); //표시
    }
  } else {
    alert("확인 비밀번호가 일치하지 않습니다."); // 일치하지 않는 경우
  }
}

// 리뷰 삭제
function deleteReview(index, password) {
  let reviews = getReviewsFromLocalStorage();
  let review = reviews[index];

  if (review.password === password) {
    reviews.splice(index, 1); // 인덱스 위치의 요소를 1개 제거한다는 말 (splice 메소드 사용)
    localStorage.setItem("reviews", JSON.stringify(reviews));
    displayReviews();
  } else {
    alert("확인 비밀번호가 일치하지 않습니다.");
  }
}

// 폼 제출 이벤트
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 새로고침 방지

  // 비민번호 내용 작성자 input 저장.
  let reviewContent = reviewInput.value;
  let author = authorInput.value;
  let password = passwordInput.value;
  let score = scoreInput.value;
  let time = currentTime();

  let passwordStandard = /^\d{4}$/;
  if (!passwordStandard.test(password) && reviewContent && author) {
    alert("비밀번호는 숫자 4자리로 입력해야합니다");
  } else if (reviewContent && author && password) {
    let review = {
      content: reviewContent,
      author: author,
      score: score,
      password: password,
      time: time,
    };
    saveReviewToLocalStorage(review); // 로컬 스토리지에 저장
    reviewInput.value = "";
    authorInput.value = "";
    passwordInput.value = "";
    displayReviews(); // 함수 호출
  } else {
    alert("리뷰, 작성자, 확인 비밀번호를 모두 입력해주세요.");
  }
});

//댓글 입력한 시간 가져로는 시간 함수
const currentTime = function () {
  let today = new Date();

  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);

  let hours = ("0" + today.getHours()).slice(-2);
  let minutes = ("0" + today.getMinutes()).slice(-2);
  let seconds = ("0" + today.getSeconds()).slice(-2);

  let now =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  return now;
};

fetch(apiMovieURL, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.results);
    if (2 < response.results.length) {
      let videoID00 = response.results[0].key;
      let videoID01 = response.results[1].key;
      let videoID02 = response.results[2].key;
      movieVideo.innerHTML = `<iframe height="100%" src="https://www.youtube.com/embed/${videoID00}?autoplay=1"></iframe>
      <iframe height="100%" src="https://www.youtube.com/embed/${videoID01}?autoplay=1"></iframe>
      <iframe height="100%" src="https://www.youtube.com/embed/${videoID02}?autoplay=1"></iframe>`;
    } else if (1 < response.results.length) {
      let videoID00 = response.results[0].key;
      let videoID01 = response.results[1].key;
      movieVideo.innerHTML = `<iframe height="100%" src="https://www.youtube.com/embed/${videoID00}?autoplay=1"></iframe>
      <iframe height="100%" src="https://www.youtube.com/embed/${videoID01}?autoplay=1"></iframe>`;
    } else if (0 < response.results.length) {
      let videoID00 = response.results[0].key;
      movieVideo.innerHTML = `<iframe height="100%" src="https://www.youtube.com/embed/${videoID00}?autoplay=1"></iframe>`;
    } else {
      movieVideo.innerHTML = `<p class="noVideo">재생할 예고편이 없습니다.</p>`;
    }
  })
  .catch((err) => console.error(err));
