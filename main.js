// var admin = {
//     firstname:'Netanel',
//     lastname:'Yaso',
//     age: 22,
//     salary: 50.000
// }

// var worker = {
//     fullname: 'monky D luffy',
//     dateofbirth: '1997',
//     mail: 'strawhat@gmail.com',
//     address: 'east blue'
// }

// var fruit = {
//     name: 'watermelon',
//     color: 'green and red',
//     kind: 'ground'
// }
// document.write(fruit.name);
// document.write(fruit.color);
// document.write(fruit.kind);

// var classes = {
//     numofclass: '1',
//     numofstudent:'5',
//     nameofstudents: ['Alon','Eldad','Yoni','Netanel','Daniel']

// }

// for(var i=0;i<classes.nameofstudents.length; i++);
// document.write(classes.nameofstudents[i]);

// var kindergarden = {
//     teachername:'lily',
//     kidsnumbers:'10',
//     kidsnames:['Netanel','Yakov','Dalia','eldad','yoni','lior','Yaso','ran','natan','or']
// }
// for(var i=0; i<kindergarden['kidsnames'].length;i++){
// document.write(kindergarden['kidsnames'][i]+'<br>');
// }
// var kidsage = prompt();
// document.write(kindergarden[kidsage]);

// var course = {}      // תחזור לזה 
// courseNumber = prompt();
// studentNumber = prompt();
// studentAge = prompt();

// console.log(course);

// var teacher = {}; //תחזור לזה
// var teacherName = prompt('what is your name');
// var keyValue = prompt();
// teacher[keyValue] = teacherName;
// console.log(teacher);

// var admin = {};
// for(var i=0; i<4; i++){
//     var myKey = prompt('enter your key');
//     var myValue = prompt('enter your value');
//     admin[myKey] = myValue ;
// }
// console.log(admin);

// var user = {};
// for(i =0;i<4; i++){
//     var myKey = prompt('what is your key');
//     var myValue = prompt('what is your value');
//     user[myKey] = myValue;
//     document.write('<div>'+ user[myKey] +'</div>');
// }

// var carsArray = []
// for (var i = 0; i < 4; i++) {
// var car = {}
//     car.company= prompt('Enter the company');
//     car.color= prompt('Enter the color');
//     car.cubecentimter= prompt('Enter the cc');
//     car.year= +prompt('Enter the year');
//     carsArray.push(car);
//     document.write('<div>'+car.company+' '+car.color+' '+car.cubecentimter+' '+car.year+'</div>');
// }
// console.log(carsArray);

// function catObject() {
//    for( var i=0; i<1; i++){
//     var cat ={} ;
//     cat.name = prompt('Enter name');
//     cat.yearOfbirth = prompt('Enter yearofbirth');
//     cat.brand = prompt('Enter brand');
//     cat.weight = +prompt('Enter weight');
//     document.write('<h1>'+cat.name+' '+cat.yearOfbirth+' '+cat.brand+' '+cat.weight+'</h1>');
//    } 
// }
// catObject();

// function dogObject(){
//     var num = +prompt('enter number');
//     for(var i =0 ; i<num; i++){
//             var dog= {};
//             dog.name = prompt('enter dog name');
//             dog.age = +prompt('enter dog age');
//             dog.brand = prompt('enter dog brand');
//             dog.onwersname = prompt('enter dog ownersname');
//             document.write('<p>'+dog.name+' '+dog.age+' '+dog.brand+' '+dog.onwersname+'</p>');
//     }
// }
// dogObject();

// function bugObject(){
//     var num = +prompt('enter a number');
//     for(var i =0; i<num; i++){
     
//             var bug = {};
//             bug.name = prompt('enter bug name');
//             bug.siencename = prompt('enter bug sience name');
//             bug.legsnumber = +prompt('enter bug legs number');
//             bug.wings = prompt('does the bug have wings?');
//             if(bug.wings){
//                 document.write('<h3>'+bug.name+' '+bug.siencename+' '+bug.legsnumber+' '+bug.wings+'<h3>'); 
//         }
//     }
// }
// bugObject();

// function kidObject() {
//    var num =  +prompt('enter a number');
//    for(var i=0; i<num; i++){
//            var kid ={}
//            kid.fullname = prompt('enter full name');
//            kid.age = +prompt('enter age');
//            kid.kindergarden = prompt('Are you in kindergarden?');
//            if(kid.age==4){
//                document.write('<p>'+kid.fullname+' '+kid.age+' '+kid.kindergarden+'</p>');
//        }
//    }
// }
// kidObject();

// function computerObject(num) {
//     for(var i =0; i<num;i++){  
//     var  computer = {};   
//         computer.number = +prompt('enter number');
//         computer.brand = prompt('enter brand');
//         computer.model = prompt('enter model');
//         computer.size = +prompt('enter size');
//         if(computer.size>2){
//             document.write('<p>'+computer.number+' '+computer.brand+' '+computer.model+' '+computer.size+'</p>');
//         } 
//     }   
// }
// computerObject(2);

// function teacherObject(num) {
//     for(var i=0; i<num; i++){
//         var teacher ={};
//         teacher.fullname = prompt('enter fullname');
//         teacher.salary = +prompt('enter salary');
//         teacher.email = prompt('enter your email');
//         teacher.dateofbirth = +prompt('enter your date of birth');
//         if(teacher.salary>100 || teacher.dateofbirth<1990){
//             document.write('<span>'+teacher.fullname+' '+teacher.salary+' '+teacher.email+' '+teacher.dateofbirth+'</span>')
//         }
    
//     }
// }
// teacherObject(2) 

// function furnitureObject(num) {
//     for(var i=0; i<num; i++){
//             var furnitur ={};
//             furnitur.name = prompt('enter name');
//             furnitur.brand = prompt('enter brand');
//             furnitur.stors = prompt([]);
//             furnitur.price = +prompt('enter price');
//             document.write(furnitur.name +'<br>'+ furnitur.stors);
//     }
// }
// furnitureObject(2);

// function negotiationObject(num) {
//     for(var i=0; i<num; i++){
//         var negotiation = {};
//         negotiation.address = prompt('enter address');
//         negotiation.rentprice = +prompt('enter rent price');
//         negotiation.buyprice = +prompt('enter buy price');
//         negotiation.potencialbuyers = prompt([])
//         negotiation.arbitration = prompt('enter if there is arbitration');
//         if(negotiation.arbitration=='no'){
//             document.write(negotiation.address+' '+negotiation.rentprice+' '+negotiation.buyprice+' '+negotiation.arbitration);
//         }
//         document.write(negotiation.address +'<br>'+negotiation.potencialbuyers);
//     }
// }
// negotiationObject(1);

// function contryObject() {
//     var num = +prompt('enter number');
//     for(var i =0; i<num; i++){
//         var contry = {}
//         contry.name = prompt('enter name');
//         contry.sivilannumbers = +propmt('enter sivilian numbers');
//         contry.cities = prompt([]);
//         contry.habad = prompt('is there a bet habad?');
//         if(contry.habad){
//             document.write(contry.name+' '+contry.sivilannumbers+' '+contry.cities+' '+contry.habad)
//         }
//         document.write(contry.name+'<br>'+contry.cities)
//     }
// }
// contryObject()