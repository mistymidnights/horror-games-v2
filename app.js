const URL = "https://api-horror-games.onrender.com/api/element/";
const container = document.querySelector(".games-container");
const btnResume = document.querySelector("#RESUMEMUSIC");
const btnPause = document.querySelector("#PAUSEMUSIC");
const backgroundMusic = new Audio(
  "./assets/2016-11-20_-_Anticipation_-_David_Fesliyan.mp3"
);
const gamesList = [];

//1 init
const init = async () => {
  await getGames();
  mapGames(gamesList);
};

//2 get
const getGames = async () => {
  const result = await fetch(URL);
  const data = await result.json();
  //importante
  const games = data.data.elements;

  mapGames(games);
};

//3 map
const mapGames = (games) => {
  mappedGames = games.map((game) => ({
    name: game.name,
    year: game.year,
    image: game.image,
    //importante
    company: game.companies.map((value) => {
      return value.name;
    }),
  }));

  console.log(mappedGames);
  printGames(mappedGames);
};

//4 print
const printGames = (list) => {
  /* container.innerHTML = ''; */
  for (const game of list) {
    const gameElement = `
    <figure class="game-container">
            <h1>${game.name}</h1>
            <img src="${game.image}" alt="${game.name}" />
        <figcaption>
            <h3>${game.year}</h3>
            <h4>${game.company}</h4>
        </figcaption>
    </figure>
        `;
    container.innerHTML += gameElement;
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
