function welcome (courseName){
return (studentName) => {  
     console.log(` Ola , ${studentName} ! Seja bem vindo ao curso de ${courseName}`)

    
}}

const displayWelcomeToFrontEndCourse =welcome("React")


displayWelcomeToFrontEndCourse("Luckgamer")
