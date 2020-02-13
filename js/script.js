var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.getElementById("greet").innerHTML = greeting;

var howMany = function() {
    var count = prompt('how many living things do you want to order?');
  
    while (count === '' || isNaN(count)) {
      count = prompt('please enter a number');
    }
  
    console.log('howMany():', Number(count));
    return Number(count);
  }
  
  var getItem = function() {
    var order = prompt('what do you want to order?').toLowerCase;
    var item;
  
    while (order !== 'dogs' && order !== 'cats' && order !== 'bunnies' && order !== 'people') {
      order = prompt('please enter dogs, cats, bunnies, or people');
    }
  
    if (order === 'cats') {
        document.getElementById("cat").className = "selected"    
    } else if (order === 'dogs') {
        document.getElementById("dog").className = "selected"    
    } else if (order === 'bunnies') {
        document.getElementById("bunny").className = "selected"
    } else if (order === 'people') {
        window.open("https://www.match.com");
}
  
    console.log('getItem():', item);
  
    document.write(howMany() + " living things on order!");
    return item;
  }
  
  var showOrder = function() {
    var item = getItem();
    var total = howMany();
    var result = '';
  
    for (var i = 0; i < total; i++) {
      result = result + '<p>Model #' + i + ' ' + item + '</p>';
    }
  
    console.log('showOrder():', result);
    return result;
  }
  
  // howMany();
  // getItem();
  showOrder();


function printToday(){
    // var today = new Date();
    document.write(today.toDateString())
};