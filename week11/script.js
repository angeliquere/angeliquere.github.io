const texts = ["a like", "a follow", "a repost", "a share", "A NUMBER"];
// switch to the next text each time the user clicks 
const textElement = document.getElementById("text");
let index = 0;
//when the user clicks on the text, the index is incremented by 1. this is done to switch to the next text in the array
textElement.addEventListener("click", () => {
  index = (index + 1) % texts.length;
  textElement.textContent = texts[index];
});
