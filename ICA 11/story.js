const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const characters = ["LeBron", "my roommate", "a random guy at the Rec"];
const places = ["the Rec", "Chautauqua", "the Boulder Creek path"];
const events = [
  "got blocked by a 12 year old",
  "tripped over a rock and lost the ball down the hill",
  "got stared down by a deer and just left",
];

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  const storyText = `It was 94 Fahrenheit outside but ${randomCharacter} still wanted to hoop. They dribbled all the way out to ${randomPlace}, took one shot, and ${randomEvent}. Bob saw it happen and didn't even look up from his phone. ${randomCharacter} weighs 300 pounds, so nobody said anything.`;

  return storyText;
}

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + " stone";
    const temperature = Math.round((94 - 32) * (5 / 9)) + " Celsius";
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}