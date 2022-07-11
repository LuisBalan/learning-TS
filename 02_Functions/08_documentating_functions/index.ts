
/**
 * @param fruit1: first input 
 * @param fruit2: second input 
 * @returns prints the resultant string
 */ 
 function makeFruitSalad(fruit1: string, fruit2: string): void {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
    console.log(salad);
  }
  
  
  /**
   * prints a status
   * @param status: first input string
   * @param repeat: second input (number)
   * @returns prints status repeat times 
   */
  
  function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
      console.log(`I'm ${status}`);
    }
  }

  proclaim();