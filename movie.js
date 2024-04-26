const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjI3NzE0MDM1MzEzNjBiZWU2YmRiNmIwZDUwOGVmMiIsInN1YiI6IjY2Mjc1ZTJiNjNkOTM3MDE4Nzc1NjUyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qGlRoILTnebygsMdUJdB_cYmdPsxI-EhBB49Aaja0Pg'
  }
};

fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {                           // fetch 불러온거 (API)              
    let movie_list = response.results; // 불러온 데이터를 변수에 할당해준다
    let temp_html = ``; // temp_html 을 아무런 값도 없이 초기화 한다
    movie_list.forEach(doc => {          // 데이터 불러온걸 순회해서 변수들에 넣어준다
      let movietitle = doc['name'].replace(' ','-');  // raplace (' ' , '-') id 의 띄어쓰기는 읽지 않음, 그래서 id 의 띄어쓰기를 - (하이픈) 으로 바꾸면 되지 않을까~ 해서 replace 를 사용했음
      //The Attack of Titan -> The-Attack-of-Titan
      let overview = doc['overview']; //데이터에 변수 지정
      let image = 'https://image.tmdb.org/t/p/w500' + doc['poster_path']; //데이터에 변수 지정
      let vote_average = doc['vote_average']; //데이터에 변수 지정
      let card_id = doc['id']; // 데이터에 변수 지정


      // temp_html 의 += 카드 여러개 만든다는 뜻

      // html 요소를 만들어서 각 요소에 데이터를 넣는다.
      temp_html += `
   
      
        <li class="item" id=${movietitle} movie-id="${card_id}"> 
          <img src=${image} class="card-image">
          <div class="cont">
            <strong class="card-title">${movietitle}</strong>
            <p >${overview}</p>
            <p style="color: chartreuse;">grade : ${vote_average}</p>
          </div>
        </li>

        `;

        // fetch 로 데이터를 가져오면서 계속 변경되는 "item" 의 id 값을 ${movietitle} 로 지정해 데이터를 받아온다.

      document.getElementById('list_wrap').innerHTML = temp_html;

      // 얘가 있어야 적용이 됨, 다큐먼트에 id 값 list_wrap 안에 우리가 만든 temp_html 요소를 넣어준다.
      // document = html 전부
      // innerHTML = 채워준다 

    })
    // el = 데이터를 표현하기 위한 언어
    // id 가 itemcard 인 모든걸 가져온다

    // queryselectorAll = document 에서 id 가 itemcard 인 애들을 싹 다 가져온다.
    // 가져와서 forEach 해준다

    document.querySelectorAll('.item').forEach((el) => {
      el.onclick = function () {

        let x = el.getAttribute("movie-id");  // getAttribute 요소의 속성을 가지고온다. 

        alert('영화 ID :' + x);

      }   // 익명함수 , querySelectorAll , getAttribute

    })

  })

  // DOMContentLoaded 이벤트는 HTML 문서가 완전히 구문 분석되고 모든 지연된 스크립트가 다운로드되고 실행될 때 발생

document.addEventListener('DOMContentLoaded', () => {
  const payrollSearch = document.querySelector('#search-input');
  // input 박스를 querySelector를 사용하여 지정하고 payrollSearch에 저장 

  function search() {

    // 카드 제목이 포함된 element를 class 값(.item)으로 가져와서 -> familyTitle 
    const familyTitle = document.querySelectorAll('.item');
    // 입력한 검색어의 value값을 가져와 소문자로 변경하여 -> filterValue
    const filterValue = payrollSearch.value.toLowerCase();

    //console.log("검색어", filterValue)


    // familyTitle 안에 있는 문자열을 familyTitle 의 길이만큼 for문으로 순회
    for (let i = 0; i < familyTitle.length; i++) {
      // 순회하고 있는 familyTitle 의 textContent 를 소문자로 변경 -> rows
      let rows = familyTitle[i].textContent.toLowerCase();

      //console.log('이거!', payrollTitle[i].parentElement.parentElement)
      

      // 검색된 familyTitle 에 해당하는 카드의 id 값의 속성을 가져와 -> id
      const id = familyTitle[i].getAttribute('id');

      
      //rows가 filterValue를 포함하면 해당 title은 보여지게 하고, 그렇지 않으면 숨김
      // getElementById를 사용하여 id에 해당하는 카드를 가져온 후
      // style.display로 block(보여주기(=빈칸)) 할지 none(숨기기) 할지

      if (rows.includes(filterValue)) {

         document.getElementById(id).style.display = 'block';
         
      } else {

        document.getElementById(id).style.display = 'none';

      } 
    }
  }
  //querySelector로 검색버튼(#search-button)을 지정하고 click 이벤트로 search 함수 실행
  document.querySelector('#search-button').addEventListener('click', search);
})


