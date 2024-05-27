const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 is completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 is resolved.");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "Satyam Jha", email: "satyam@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "satyamjha", password: "1234" });
    } else {
      reject("ERROR : Something went wrong.");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected."));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "1234" });
    } else {
      reject("ERROR : JS went wrong.");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users/satyamjha2001");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/satyamjha2001")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("E: ", error);
  });

// promise.all
// yes this is also available, kuch reading aap b kro.
