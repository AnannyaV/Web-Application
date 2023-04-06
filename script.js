function convert() {
  var input = document.getElementById("input").value;

  if (isNumeric(input)) {
    // Convert user ID to username
    document.getElementById(
      "output"
    ).innerHTML = `The username for user ID ${input} is ${convertUserIdToUsername(
      input
    )}.`;
  } else {
    // Convert username to user ID
    document.getElementById(
      "output"
    ).innerHTML = `The user ID for ${input} is ${convertUsernameToUserId(input)}.`;
  }
}

function convertUserIdToUsername(userId) {
  // This is a made-up conversion function that takes in a numerical user ID and returns a corresponding username
  return "@elonmusk";
}

function convertUsernameToUserId(username) {
  // This is a made-up conversion function that takes in a Twitter username and returns a corresponding numerical user ID
  return 44196397;
}

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}
