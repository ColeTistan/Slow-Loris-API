import "./style.css";

const randomImg = document.getElementById("random-image-box");
console.log(randomImg);

const getSlowLorisData = () => {
  fetch("https://slow-loris-api.onrender.com/api/all")
    .then((response) => response.json())
    .then((data) => {
      const randomData = data[Math.floor(Math.random() * data.length)];
      randomImg!.innerHTML = `<img class="w-60 h-auto" src="${randomData.image_url}" alt="random image" />`;
      console.log(randomData);
    });
};

getSlowLorisData();

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `
