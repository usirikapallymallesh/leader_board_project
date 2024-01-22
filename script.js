/**********************************************************
creating a new array with names and details.
*********************************************************/
let playersArray = [];

/**********************************************************
adding a player data to array..
***********************************************************/
function addPlayer(e) {
  e.preventDefault();
  let firstName = document.querySelector("#first-name").value;
  let lastName = document.querySelector("#last-name").value;
  let country = document.querySelector("#country").value;
  let score = document.querySelector("#score").value;
  const playerList = document.getElementById("resultContainer");
  //making the input fields after clicking on submit button...
  document.querySelector("#first-name").value = "";
  document.querySelector("#country").value = "";
  document.querySelector("#score").value = "";
  document.querySelector("#last-name").value = "";

  /******************************************************************
   checking the input if empty then give alert message.
   *******************************************************************/
  if (firstName == "" || lastName == "" || country == "" || score == "0") {
    alert("please enter the valid data");
  } else {
    //creating an object with names.
    const playerData = {
      Name: firstName + " " + lastName,
      Country: country,
      Score: Number(score),
    };
    //pushing the object ot array.
    playersArray.push(playerData);
    playersArray.sort(
      (player1, player2) => parseInt(player2.Score) - parseInt(player1.Score)
    );

    playerList.innerHTML = "";
    for (let index = 0; index < playersArray.length; index++) {
      const player = playersArray[index];
      let data = document.createElement("div");
      const nameContent = document.createElement("div");
      const countryContent = document.createElement("div");
      const currentScore = document.createElement("div");

      const increaseScore = document.createElement("button");
      const decreaseScore = document.createElement("button");

      increaseScore.innerText = "+5";
      decreaseScore.innerText = "-5";
      increaseScore.setAttribute("onclick", `increaseScoreHandler(${index})`);
      decreaseScore.setAttribute("onclick", `decreaseScoreHandler(${index})`);

      currentScore.innerText = player.Score;
      countryContent.innerText = player.Country;
      nameContent.innerText = player.Name;
      data.classList.add("resultContainer");

      data.append(
        nameContent,
        countryContent,
        currentScore,
        increaseScore,
        decreaseScore
      );
      console.log(data);
      playerList.append(data);
    }
  }
}
/************************************************************
 creating the refresh functionality  of array.
 *************************************************************/
function refreshList() {
  const playerList = document.getElementById("resultContainer");
  playersArray.sort(
    (player1, player2) => parseInt(player2.Score) - parseInt(player1.Score)
  );
  playerList.innerHTML = " ";

  for (let index = 0; index < playersArray.length; index++) {
    const player = playersArray[index];

    const data = document.createElement("div");
    const nameContent = document.createElement("div");
    const countryContent = document.createElement("div");
    const currentScore = document.createElement("div");

    const increaseScore = document.createElement("button");
    const decreaseScore = document.createElement("button");

    increaseScore.innerText = "+5";
    decreaseScore.innerText = "-5";
    increaseScore.setAttribute("onclick", `increaseScoreHandler(${index})`);
    decreaseScore.setAttribute("onclick", `decreaseScoreHandler(${index})`);

    currentScore.innerText = player.Score;
    countryContent.innerText = player.Country;
    nameContent.innerText = player.Name;
    data.classList.add("resultContainer");

    data.append(
      nameContent,
      countryContent,
      currentScore,
      increaseScore,
      decreaseScore
    );
    playerList.append(data);
  }
}
/******************************************************** */

/*************************************************
increasing and decreasing functionally to a score.
*************************************************/
function increaseScoreHandler(index) {
  playersArray[index].Score += 5;
  refreshList();
}
function decreaseScoreHandler(index) {
  playersArray[index].Score -= 5;
  refreshList();
}
/*********************************************** */
