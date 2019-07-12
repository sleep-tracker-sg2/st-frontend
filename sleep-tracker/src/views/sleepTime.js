
export const sleepTime = (start, end) => {
   
    start = start.split(":");
    end = end.split(":");
    const startDate =
      parseInt(start[0], 10) >= 17 && parseInt(start[0], 10) <= 23
        ? new Date(1999, 1, 1, start[0], start[1], 0)
        : new Date(1999, 1, 2, start[0], start[1], 0);
    const endDate = new Date(1999, 1, 2, end[0], end[1], 0);
  
    let diff = endDate.getTime() - startDate.getTime();
    const hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(diff / 1000 / 60);
  
    if (hours < 0) hours = hours + 24;
  
    return (
      (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes
    );
  };
 
  const sleepMath = numArray => {
    
    let modes = [],
      count = [],
      i,
      number,
      maxIndex = 0;
  
    for (i = 0; i < numArray.length; i += 1) {
      number = numArray[i];
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxIndex) {
        maxIndex = count[number];
      }
    }
  
    for (i in count)
      if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
          modes.push(Number(i));
        }
      }
  
    return modes;
  };
  
  console.log(sleepMath([1,1,2,2]))