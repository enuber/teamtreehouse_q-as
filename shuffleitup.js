var users = ["user1", "user2", "user3", "user4"];

//var products = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "p19", "p20", "p21", "p22", "p23", "p24", "p25", "p26", "p27", "p28", "p29", "p30"];

var products = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "p19", "p20", "p21", "p22", "p23", "p24" ];

var newArray;
var arrayHolder = [];
var allProductsIn = false;



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function checkAllIn(arrayHolder) {
    
    var finalArr = [];
    var tempArr = arrayHolder;
    var concatArr = [].concat.apply([], tempArr);
    var sortArr = concatArr.sort();
    for (var i = 0; i < sortArr.length; i++) {
        if (finalArr.indexOf(sortArr[i]) == -1) {
            finalArr.push(sortArr[i]);
        }
    }
    console.log(finalArr);
    return (finalArr.length === products.length);
}



while (!allProductsIn) {

for (var i = 0; i < users.length; i++) { 
    newArray = (shuffle(products)).slice(0, 10);
    arrayHolder.push(newArray);
}
    
allProductsIn = checkAllIn(arrayHolder);

if (allProductsIn) {
    for (var k = 0; k<users.length; k++) {
         console.log(users[k] + ' products: ' + arrayHolder[k]);
    }
} else {
    arrayHolder = [];
}
    
}

