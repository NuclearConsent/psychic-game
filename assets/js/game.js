var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var aGuess = [];
var wins = 0;
var losses = 0;
var guesses;
var keyup;
var randomPick;

function logic() {
  // Logic function to catch key press
  $(document).keyup(function() {
    keyup = event.key.toLowerCase();
    console.log(keyup);
    $("#letters").append(keyup + " ");
    if (keyup == alphabet[randomPick]) {
      wins++;
      $(document).off("keyup");
      gameOver();
    }
    else {
      guesses--;
      $("#guesses").text(guesses);
      if (guesses == 0) {
        losses++;
        $(document).off("keyup");
        gameOver();
      }
    }
  });
}

function gameOver() {
  // Generate the game over page
  $(".divInfo").empty();
  $(".divLetters").empty();
  $(".divGuesses").empty();
  $(".divInfo").append("<text>GAME OVER!</text></br>");
  $(".divInfo").append("<sup><a href='#' onclick='game()'>Try Again?</a></sup>");
  $("#losses").text(losses);
  $("#wins").text(wins);
  return game;
}


function game() {
  // Reset the game values before generating the page
  guesses = 10;
  randomPick = Math.floor(Math.random() * 26);
  console.log(alphabet[randomPick]);
  // Generate the page
  $(".container").empty();
  var divInfo = $("<div class='text-center mt-3 divInfo'>");
  var divGuesses = $("<div class='text-center mt-3 divGuesses'>");
  var divLetters = $("<div class='text-center mt-3 divLetters'>");
  var divFlex = $("<div class='d-flex flex-row justify-content-center'>");
  var divWins = $("<div class='border p-2 w-25 mr-1 text-center'>");
  var divLosses = $("<div class='border p-2 w-25 ml-1 text-center'>");
  divInfo.append("<text>We're thinking of a letter of the alphabet.</text></br>");
  divInfo.append("<sup>Guess by typing the letter on your keyboard.</sup>");
  divGuesses.append("<p>Guesses Remaining: <text id='guesses'> "+ guesses + "</text></p>");
  divLetters.append("<p>Guessed Letters:</p>");
  divLetters.append("<p><sup id='letters'></sup></p>");
  divWins.append("<p>Wins:</p>");
  divWins.append("<h2><text id='wins'>" + wins + "</text></h2>");
  divLosses.append("<p>Losses:</p>");
  divLosses.append("<h2><text id='losses'>" + losses + "</text></h2>");
  $(".container").append(divInfo);
  $(".container").append(divFlex);
  $(".flex-row").append(divWins);
  $(".flex-row").append(divLosses);
  $(".container").append(divGuesses);
  $(".container").append(divLetters);

  logic();
}
