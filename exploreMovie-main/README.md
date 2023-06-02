<div align="center">
	<h1> 🎬 MovieExplore 🍿 </h1>
</div>

<div align="center">
<h3>🖤<a href="https://oiooeo.github.io/exploreMovie/"> exploreMovie </a>🩷</h3>
</div>

<br>

<div align="center">
	<h4>✨ Languages ✨</h4>
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=javascript&logoColor=white"/>
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=HTML5&logoColor=white"/>
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=CSS3&logoColor=white"/>
</div>

<br>
<br>

---

<div align="center">
	<img width="1840" alt="스크린샷 2023-06-01 오후 4 06 48" src="https://github.com/oiooeo/exploreMovie/assets/72060405/c083a289-afea-4899-926d-83867f6e8be4">
	<br>
	<p>▼ 영화 ID를 알려주는 Alert 창 ▼</p>
	<img width="1840" alt="스크린샷 2023-06-01 오후 4 07 15" src="https://github.com/oiooeo/exploreMovie/assets/72060405/cf21ac3c-324c-4feb-8caf-c03d63183e31">
	<br>
	<p>▼ 검색 결과 ▼</p>
	<img width="1840" alt="스크린샷 2023-06-01 오후 4 07 34" src="https://github.com/oiooeo/exploreMovie/assets/72060405/53a35339-e624-41f9-a82f-31095cd2a34f">
	<img width="1840" alt="스크린샷 2023-06-01 오후 4 07 42" src="https://github.com/oiooeo/exploreMovie/assets/72060405/e91b16a4-942b-437e-a7a3-0fdf77f5b6d6">
</div>

## ⭐️ 필수요구사항

| Number | Check                      | 내용                                                                                                                                                                                                                                                       |
| ------ | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | ✅                         | jQuery 라이브러리 사용없이 순수 바닐라 자바스크립트 사용하기                                                                                                                                                                                               |
| 2      | ✅                         | TMDB 오픈 API를 이용하여 인기 영화 데이터 가져오기                                                                                                                                                                                                         |
| 3      | ✅                         | 영화정보 카드 리스트 UI 구현                                                                                                                                                                                                                               |
| 4      | ✅                         | 영화 검색 UI 구현                                                                                                                                                                                                                                          |
| 5      | ✅<br>✅<br>✅<br>✅<br>✅ | Javascript 문법 요소를 이용하여 구현<br>> const와 let만을 이용한 변수 선언 필수<br>> 화살표 함수 : 1개 이상 사용<br>> 배열 메소드 (forEach, map, filter, reduce, find) 중 2개 이상 사용: forEach, filter<br>> DOM 제어하기 : api 목록 중 2개 이상 사용하기 |
| 6      | ✅                         | github에 작업한 코드 업로드                                                                                                                                                                                                                                |

<details>
<summary>API 목록</summary>
<div markdown="1">

1. 문서 객체 생성과 선택

- `document.createElement(tagName)` : 새로운 HTML 요소를 생성합니다.
- ✅ `document.getElementById(id)` : id 속성을 기준으로 요소를 선택합니다.
- `document.getElementsByTagName(name)` : 태그 이름을 기준으로 요소를 선택합니다.
- `document.getElementsByClassName(name)` : 클래스 이름을 기준으로 요소를 선택합니다.
- ✅ `document.querySelector(selector)` : CSS 선택자를 이용하여 요소를 선택합니다.
- `document.querySelectorAll(selector)` : CSS 선택자를 이용하여 모든 요소를 선택합니다.

2. 문서 객체 조작

- ✅ `element.innerHTML` : 해당 요소 내부의 HTML 코드를 변경합니다.
- ✅ `element.textContent` : 해당 요소 내부의 텍스트를 변경합니다.
- ✅ `element.setAttribute(attr, value)` : 해당 요소의 속성 값을 변경합니다.
- `element.getAttribute(attr)` : 해당 요소의 속성 값을 가져옵니다.
- `element.style.property` : 해당 요소의 스타일 값을 변경합니다.
- `element.appendChild(child)` : 해당 요소의 하위 요소로 child를 추가합니다.
- `element.removeChild(child)` : 해당 요소의 하위 요소 중 child를 삭제합니다.
- `element.classList.add(class)` : 해당 요소의 클래스에 새로운 클래스를 추가합니다.
- `element.classList.remove(class)` : 해당 요소의 클래스 중에서 특정 클래스를 제거합니다.
- `element.classList.toggle(class)` : 해당 요소의 클래스 중에서 특정 클래스를 추가 또는 제거합니다.

3. 이벤트 처리

- ✅ `element.addEventListener(type, listener)` : 해당 요소에서 이벤트가 발생했을 때 호출할 함수를 등록합니다.
- `element.removeEventListener(type, listener)` : 해당 요소에서 등록된 함수를 제거합니다.
- `event.preventDefault()` : 이벤트가 발생했을 때 기본 동작을 취소합니다.
- `event.stopPropagation()` : 이벤트의 버블링을 방지하기 위해 이벤트 전파를 중지합니다.

4. 기타

- `window.location.href` : 현재 페이지의 URL을 가져옵니다.
- ✅ `window.alert(message)` : 경고 메시지를 출력합니다.
- `window.confirm(message)` : 확인 메시지를 출력하고 사용자의 답변에 따라 Boolean 값을 반환합니다.

</div>
</details>
<br>
<br>

## ⭐️ 선택요구사항

| Number | Check | 내용                                                                                                         |
| ------ | ----- | ------------------------------------------------------------------------------------------------------------ |
| 1      | ✅    | CSS (flex / grid 사용)<br>`.search {display: flex;}`<br>`.cards {display: grid;}`                            |
| 2      | ✅    | 웹사이트 랜딩 또는 새로고침 후 검색 입력란에 커서 자동 위치시키기<br>`<input id="search_input" autofocus />` |
| 3      | ✅    | 대소문자 관계 없이 검색 가능하게 하기<br>`searchInput.value.toLowerCase();`                                  |
| 4      | ✅    | 키보드 enter키를 입력해도 검색 버튼 클릭한 것과 동일하게 검색 실행시키기                                     |
| 5      | ✅    | 원하는 추가 기능<br>`header 클릭 시 새로고침`<br>`검색 결과에 따른 메시지 출력 (결과 갯수 또는 결과가 없다)` |
