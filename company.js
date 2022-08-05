const URL = "https://api-horror-games.onrender.com/api/companies/getAll";
const container = document.querySelector(".company-container");
const btnResume = document.querySelector("#RESUMEMUSIC");
const btnPause = document.querySelector("#PAUSEMUSIC");
const backgroundMusic = new Audio(
  "./assets/2016-11-20_-_Anticipation_-_David_Fesliyan.mp3"
);
const gamesList = [];

const companyList = [];
console.log(companyList);

//1 init
const init = async () => {
  await getCompany();
  mapCompany(companyList);
};

//2 get
const getCompany = async () => {
  const result = await fetch(URL);
  const data = await result.json();
  const company = data.data.companies;
  mapCompany(company);
};

//3 map
const mapCompany = (companies) => {
  mapppedCompanies = companies.map((companies) => ({
    name: companies.name,
    year: companies.year,
    country: companies.country,
  }));

  console.log(mapppedCompanies);
  printGames(mapppedCompanies);
};

//4 print
const printGames = (list) => {
  /* container.innerHTML = ''; */
  for (const company of list) {
    const companyElement = `
    <div class="container">
    <div class="card">
      <h3 class="title">${company.name}</h3>
        <div class="info">
          <h4 class="company-year">${company.year}</h4>
          <h4 class="company-country">${company.country}</h4>
        </div>
      </div>
    </div>
        `;
    container.innerHTML += companyElement;
    console.log(container);
  }
};

const resumeMusic = () => {
  backgroundMusic.play();
};

const pauseMusic = () => {
  backgroundMusic.pause();
};

init();
backgroundMusic.play();
