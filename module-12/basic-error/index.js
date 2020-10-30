document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#js-btn");
  const output = document.querySelector("#js-output");

  let globalVariable = "";

  const onClick = () => {
    fetch("https://api.instantwebtools.net/v1/airlines/1")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Error fetching data");
      })
      .then((data) => {
        console.log("data inside then: ", data);

        globalVariable = data;
        console.log("globalVariable inside fetch: ", globalVariable);

        output.textContent = JSON.stringify(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });

    console.log("globalVariable outside fetch: ", globalVariable);
  };

  btn.addEventListener("click", onClick);
});
