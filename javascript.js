

var pSubmit = document.querySelector(".personal_information button").addEventListener("click", submitPersonal);
var fSubmit = document.querySelector(".friend_information button").addEventListener("click", submitFriend);
var finished = document.querySelector(".friend_information button.d").addEventListener("click", submitFinished);

var friends = [];
var people = [];

function CreatePerson(firstname, middlename, lastname, age, address, course, fav_num){
    
    this.firstname = firstname;
    this.lastname = lastname;
    this.middlename = middlename;
    this.age = age;
    this.address = address;
    this.course = course;
    this.fav_num = fav_num;

};

function CreateFriend(firstname, middlename, lastname, age, course){

    this.firstname = firstname;
    this.lastname = lastname;
    this.middlename = middlename;
    this.age = age;
    this.course = course;
}


function submitPersonal(){
    var information = document.querySelectorAll(".personal_information input");

    people.push(new CreatePerson(information[0].value, information[1].value, information[2].value, information[3].value, information[4].value, information[5].value, information[6].value));
    alert("New Personal Information Added for " + information[0].value +" " + information[1].value  + " " + information[2].value );

    information.forEach((item)=>{
        item.value = "";
    })

};

function submitFriend(){

    var info = document.querySelectorAll(".friend_information input");

    friends.push(new CreateFriend(info[0].value, info[1].value, info[2].value, info[3].value, info[4].value));
    alert("New Friend Information Added for " + info[0].value  +" " + info[1].value  + " " + info[2].value );

    console.log(friends[0].firstname);
    info.forEach((item)=>{
        item.value = "";
    })
}

function submitFinished(){

    var age = people[0].age;

    if(parseInt(age, 10) < 18){
        reverseSort();
    
    }else if(parseInt(age, 10) >= 18){
        fibonacciSequence();
    }
    
    if(people[0].fav_num >= 321 && people[0].fav_num <=1234){
        alert(JSON.stringify(Date()));

    }else{
        var date = new Date();
        date.setDate(date.getDate() - 7)
        alert(date);
    }
}


function fibonacciSequence(){

    var x = 1;
    var y = 0;
    var z = 0;
    var evenNumbers = 0;
    for(var i =0 ; i< parseInt(people[0].age, 10); i++){

        z = x;
        x += y;
        y = z

        if(z % 2 == 0)
            evenNumbers += 1;
    }

    console.log(evenNumbers);

    if(evenNumbers % 2 == 0){
        person = [{
            "firstname": people[0].firstname,
            "lastname": people[0].lastname,
            "middlename": people[0].middlename,
            "age": people[0].age,
            "course": people[0].course,
            "address": people[0].address,
            "favorite_number": people[0].fav_num
        }];

        alert(JSON.stringify(person[0]));
    }else{
        friends.sort(courseSort);

        friends.forEach((friend)=>{
            alert(JSON.stringify(friend));
        })
    }
}

function courseSort(friend1, friend2){

    var fullname_1 = friend1.firstname + friend1.middlename + friend1.lastname;
    var fullname_2 = friend2.firstname + friend2.middlename + friend2.lastname;


    if(friend1.course > friend2.course)
        return 1;
    if(friend1.course < friend2.course)
        return -1;
    if(fullname_1 > fullname_2)
        return 1;
    if(fullname_1 < fullname_2)
        return -1;
};

function reverseSort(){

   var fullname = people[0].firstname +" " + people[0].middlename +" " + people[0].lastname;

   var reverse = " ";
   var friends_list = [];

   for(var i = 0;i < fullname.length; i++){

    reverse = fullname.charAt(i) + reverse;
   };

   alert("Reversed Name is: " + reverse);
   
   friends.sort(compare)

   friends.forEach((friend)=>{
       console.log(friend);
       alert(JSON.stringify(friend));
   })
};

function compare(friend1, friend2){

    if(friend1.age > friend2.age){

        return -1;
    }else{
        return 1;
    }
}




