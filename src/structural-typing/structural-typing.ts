type VerifyUSerFn = (user : User, sentValue : User)=> boolean;

type User = {username : string, password: string};

const verifyUser : VerifyUSerFn = (user,sentValue) => {
    return user.username === sentValue.username && user.password === sentValue.password;
    ;
};

const bdUser = {username : 'Vinicius' , password : '12345'};
const bdUser1 = {username : 'Vinicius' , password : '12345'};
const loggedIn = verifyUser(bdUser,bdUser1);
console.log(loggedIn);
