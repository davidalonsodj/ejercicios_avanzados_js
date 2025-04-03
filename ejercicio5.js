function rollDice(faces) {
    return Math.floor(Math.random() * faces) + 1;
  }
  

  console.log("Tirada de dado de 6 caras:", rollDice(6));
  console.log("Tirada de dado de 10 caras:", rollDice(10));
  console.log("Tirada de dado de 20 caras:", rollDice(20));
  