module.exports = function userGreeting(userName) {
    const time = new Date().getHours();
    let userGreeting;
    
    if (time < 5 && time >= 23) { userGreeting = 'Good night';
    } else if (time >= 5 && time < 11) {
        userGreeting = 'Good morning'; 
    } else if (time >= 11 && time < 17) { 
        userGreeting = 'Good day'; 
    } else { userGreeting = 'Good evening'; };

    return (userGreeting +', '+ userName);
};