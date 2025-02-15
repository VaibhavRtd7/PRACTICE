
  const students = new Map([
    ["C", 95],
    ["Apple", 90],
    ["Ball", 93],
    ["Anurag", 95]
  ])
  
  function sortStudentsByScore(students : Map<string, number>) : Map<string, number> {
     
    let sortedArray = Array.from(students.entries()).sort( (a, b) => {
      
      if(a[1] !== b[1]) {
        return b[1] - a[1];
      }
      
      return a[0].localeCompare(b[0])
    })
     
    return new Map(sortedArray)
  }
  console.log(sortStudentsByScore(students));
