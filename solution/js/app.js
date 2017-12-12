console.log("object lab");

let me = {
  myName: "True Value",
  age: 34,
  email: "me@me.com"
};

console.log(me)

//1.
me.myName = "Steve 'Barbarella' McJobs"
console.log(me.myName)

//2. change age
me.age = 1000;

//3. verify
console.log(me.age == 1000)

//4. place of residence
me['place of residence'] = 'Santa Barbarella'

//5. 
console.log(me['place of residence']);



/******
  * 
  * 
  * SLIMER
  *
  *
******/

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

// console.log(monster.name);
monster.type = 'creature';
monster.age = 6;




// CAT 

let cat1 = {
  catName: 'billie',
  breed: 'calico',
  age: 5
}

let cat2 = {
  catName: 'dad',
  breed: 'maine coon',
  age: 10
}

// function combineCats(mama, papa) {
//   console.log(mama);
//   console.log(papa);
// } //retired

// combineCats(cat1, cat2);
// var x = 4, y = 6;  multiply(x,y) multiply(4,6)
// arr[i]
// arr[i+2]
// arr[3]
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

function combineCats(mama, papa) {
  return {
    catName: mama.catName + papa.catName,
    age: 1,
    breed: mama.breed + '-' + papa.breed 
  };
}
// console.log(combineCats(
//   combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
//   combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
// ))


let user = {
  name: "joe",
  email: "joe@joeforpresident.com",
  age: 85,
  purchased: []
}

user.email = "joe@ilosttheelection.com";
user.age++;
user.location = "Chicago";
user.purchased.push('carbs');
user.purchased.push('peace of mind');
user.purchased.push('jodphurs');


// console.log(user.purchased[2]);



user.friend = {
  name: "Grace Hopper",
  age: 86
}

user.friend.purchased = [];
user.friend.location = "Evanston"



// console.log(user.friend.location)

user.friend.purchased.push("The One Ring", "something", "something else", "latte")

// console.log(user.friend.purchased[3])
// console.log(user)

// for(let i = 0; i < user.purchased.length; i++) {
//   console.log(user.purchased[i])
// }
// for(let i = 0; i < user.friend.purchased.length; i++) {
//   console.log(user.friend.purchased[i])
// }

function updateUser() {
  user.age = user.age + 1;
  user.name = user.name.toUpperCase();
}


let ogre = {
  name: 'schrek',
  hitPoints: 0, // how much you've been damaged
  life: 'alive',
  recordHit: function (hitStrength) {
    this.hitPoints = this.hitPoints + hitStrength;
    if(this.hitPoints >= 10) {
      this.life = 'dead'
    }
    else {
      this.life = 'alive';
    }
  }
}
let adventurer = {
  name: 'Travis',
  hitPoints: 0, // how much you've been damaged
  life: 'alive',
  recordHit: function (hitStrength) {
    this.hitPoints = this.hitPoints + hitStrength;
    if(this.hitPoints >= 10) {
      this.life = 'dead'
    }
    else {
      this.life = 'alive';
    }
  }
}
let hit = function(struck, hitStrength) {
  struck.recordHit(hitStrength);
  console.log(struck.name + " " + struck.hitPoints + " life " + struck.life );
  if(struck.life=='dead') {
    console.log("game over")
  }
}


