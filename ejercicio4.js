//parte 1

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        return i;
      }
    }
    return -1; // si no se encuentra
  }
  
  // Ejemplos:
  const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  
  console.log(findArrayIndex(mainCharacters, "Chewbacca")); 
  console.log(findArrayIndex(mainCharacters, "Rey")); 
  console.log(findArrayIndex(mainCharacters, "Yoda"));

  //parte 2
  function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }
  
  // Ejemplos:
  let characters1 = [...mainCharacters]; // copia del array original
  console.log(removeItem(characters1, "Leia")); // ["Luke", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
  
  let characters2 = [...mainCharacters];
  console.log(removeItem(characters2, "Yoda")); // No lo encuentra, array queda igual
  
  let characters3 = [...mainCharacters];
  console.log(removeItem(characters3, "Anakin")); // ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Obi-Wan"]
  