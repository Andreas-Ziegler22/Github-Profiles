const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("Andreas-Ziegler22");
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
