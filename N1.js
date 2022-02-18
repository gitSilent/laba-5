let emails = ["smith@gmail.com","johnson@gmail.com","harris@gmail.com","williams@gmail.com", "jones@gmail.com", "davis@gmail.com"];
let black_list = ["smith@gmail.com","williams@gmail.com", "davis@gmail.com"], white_list= [];

function checkEmail(email, blacklist){
    for(i=0;i<email.length;i++){
        if (blacklist.includes(email[i])==false) {  white_list.push(emails[i]) } 
    }
    return white_list; 
}
console.log(checkEmail(emails,black_list));
