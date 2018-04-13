// epxort const sortedAlphbetically= allStudents =>{
//   const sortedAlphbetically = allStudents.map(function(student){
//      return student.username;
//    })
//    sortedAlphbetically.sort();
//        const sortedArray=sortedAlphbetically.map(student=>{
//          const sorted=allStudents.map(studentsData=>{
//        if (student===studentsData.username) {
//          return studentsData
//
//        }
//
//      })
//      return sorted
//    })
// }
export default (allStudents,sortdata) =>{
  if (sortdata==='alphabetical') {
      const sortedAlphbetically = allStudents.map(function(student){
         return student.username;
       })
       sortedAlphbetically.sort();
       let array=[];
           sortedAlphbetically.map(student=>{
             allStudents.map(studentsData=>{
           if (student===studentsData.username) {
             array.push(studentsData)

           }

         })
       })
       return array;
  }
}
