const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjI3NzE0MDM1MzEzNjBiZWU2YmRiNmIwZDUwOGVmMiIsInN1YiI6IjY2Mjc1ZTJiNjNkOTM3MDE4Nzc1NjUyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qGlRoILTnebygsMdUJdB_cYmdPsxI-EhBB49Aaja0Pg'
    }
  };
  
  fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));