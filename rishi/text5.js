//************************************* STACK & HEAP MEMORY IN JS*********************


// STACK ( premitive data types are stored in stack memory)
// heap(non premitive data types are stored in heap memory)


 let myYoutubename = "Rishi channel" // stored in stack memory
 let anotherYoutubename = myYoutubename; // stored in stack memory

 anotherYoutubename = " Rishabh channel"

 console.log(myYoutubename)
 console.log(anotherYoutubename)


    let userOne = {
        email : "rishi@gmail.com",
        upi: "rishi@ybl"
    } // stored in heap memory

    let userTwo = userOne; // stored in stack memory (referance of userOne is stored in userTwo)

    userTwo.email = "rishabhchaurasiya@gmail.com"
    console.log(userOne.email)
    console.log(userTwo.email)