window.addEventListener("DOMContentLoaded", () => {
  var divArr = document.querySelectorAll("div#button");
  divArr.forEach((element) => {
    console.log(element);
    var colour = element.textContent;
    element.style.background = colour.toLowerCase();
    element.style.borderColor = colour.toLowerCase();
    element.style.setProperty("--background-color", "dark" + colour);

    element.addEventListener("click", () => {
      var bg = document.querySelector("body");
      console.log("clicked", colour);
      bg.style.background = colour;
    });
  });
});
