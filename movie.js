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
        let movietitle = doc['name'];  //변수
        let overview = doc['overview']; //변수
        let image = 'https://image.tmdb.org/t/p/w500' + doc['poster_path']; //변수
        let vote_average = doc['vote_average']; //변수


// temp_html 의 += 카드 여러개 만든다는 뜻

// html 요소를 만들어서 각 요소에 데이터를 넣는다.
        temp_html += `                        
        <li class="item">
          <img src=${image} class="card-image">
          <div class="cont">
            <strong class="card-title">${movietitle}</strong>
            <p >${overview}</p>
            <p style="color: chartreuse;">grade : ${vote_average}</p>
          </div>
        </li>
        `;


        document.getElementById('list_wrap').innerHTML = temp_html;

        // 얘가 있어야 적용이 됨, 다큐먼트에 id 값 list_wrap 안에 우리가 만든 temp_html 요소를 넣어준다.
        // document = html 전부
        // innerHTML = 채워준다 
        


      })
    })
    

    // 검색 기능 구현

    //카드 눌렀을 때 id 값

