const searchForm = document.getElementById("searchForm");
const movieInput = document.getElementById("movieInput");
const filmDiv = document.getElementById("filmDiv");


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    value = movieInput.value;
    renderUI(value);
});

//await istfade edirik ki, response den cavab gelmEMIS DIGER FUNKSIYALAR ISLEMESIN
async function searchMovie(title) {
    const response=await fetch(`https://www.omdbapi.com/?t=${title}&apikey=4f2ea662`)
    const data= response.json()
    console.log(data);
    return data
}

function renderUI(value) {
    searchMovie(`${value}`).then((data)=>{
        filmDiv.innerHTML=``
        filmDiv.innerHTML=`
          <div class="header">
            <div class="left">
              <img
                src="${data.Poster}"
                alt=""
              />
            </div>
            <div class="right">
              <h4>${data.Title}</h4>
              <div class="rating">
                <i class="fa-solid fa-star"></i> <span>${data.Ratings[0].Value}</span>
              </div>
              <span>${data.Released}</span>
            </div>
          </div>
          <div class="full__body">
            <h5>Plot</h5>

            <p>
              ${data.Plot}
            </p>

            <h5>Awards</h5>

            <p>
              ${data.Awards}
            </p>
          </div>
        `
        
    })
}