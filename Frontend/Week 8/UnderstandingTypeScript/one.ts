// const user = {
//     name: "Chottu",
//     id: 1,
// };

// interface User {
//     name: string;
//     id: number;
//     email: string;
// }

// const user: User = {
//     name: 'ankita',
//     id: 1,
//     email: 'ahardia@gmail.com'
//     // uemail: 'ahardia@gmail'                 //can't have any other literal,uemail doesn't exist in User
// }

const car: { type: string, model: number} = {
    type: 'Toyota',
    model: 2009
}                                                 // object 

const car2: { type: string, model?: number} = {
    type: 'Toyota'
}                                                 // object with optional property 
car2.model = 2000;                                // have provided the value of optional property here  
