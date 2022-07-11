function proclaim(status = "not ready...", repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
      console.log(`I'm ${status}`);
    }
  }
  
  proclaim();
  proclaim('ready?');
  proclaim('ready!', 3);

  function getRandomNumber(){

    return Math.random();
  }

  let myVar = getRandomNumber();
  console.log(myVar);
  