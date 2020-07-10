//object literal for the pet salon
//name, phone, adress(street, number) --> name:"AAA";

const salon={
    name:"The Fashion Pet",
    phone:"555-555-555",
    adress:{
        street:"Ave. University",
        number:"528=k"
    },
    counter:function(){
        alert("A pet was registered!");
    },
    pets:[]

}


//object destructoring
let{name,phone,adress:{street,number},counter,pets}=salon;

document.getElementById("footer-info").innerHTML=`
<p class="text-center"> ${name} ${phone} <br> ${street},${number}  </P>
`;

console.log(pets);

//object constructor for the pests (multiple)
class pet{
    constructor(name,age,breed,gender,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
    }
}


//create 2 pets
const Scooby = new pet("Scooby",60,"Full Service","Shaggy","555-666-777");



const Dexter = new pet("Dexter",1,"Full Service","Mayleni","222-333-44");

register(Scooby);

register(Dexter);

//register function 

function register(aPet){
    //push the pet ot the array
    pets.push(aPet);
    
    //call the counter function

    counter();

    //display on the console the pets array
    console.log(aPet);
}

function status(){
    alert("Registered pets: " + pets.length);
    console.log("registered pets: " + pets.length);
   
    cosnsole.log(dogs[0]);
    console.log()
    //travel the array to display pets name
   
    for (p=0;p<3;p++){
        cosnsole.log(dogs[p].name);

    }
    
}

status();

