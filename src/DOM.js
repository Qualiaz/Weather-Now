export default (function DOM() {
  const app = document.getElementById("app");
  const dataParagraph = document.createElement("p");

  const render = {
    data(data) {
      dataParagraph.innerText = data;
      app.appendChild(dataParagraph);
    },
  };

  return { app, render };
})();
