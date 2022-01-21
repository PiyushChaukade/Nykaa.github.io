
//  const Cart = require("../../src/models/cart.model")


//popup right ------------------------------------------


var openmodelbutt=document.querySelectorAll('[data-model-target]');

  var closemodelbutt=document.querySelectorAll('[data-close]');
  var closemodelbutt1=document.querySelectorAll('[data-done]');
  var overlay=document.getElementById("overlay");

  openmodelbutt.forEach(button => {
      button.addEventListener('click', () =>{
          var model=document.querySelector(button.dataset.modelTarget)
          openModel(model);
      })

  });

  overlay.addEventListener('click',() => {
      var models=document.querySelectorAll('.model.active');
      models.forEach(model =>{
          closeModel(model);
      })
  })


  closemodelbutt.forEach(button => {
      button.addEventListener('click', () =>{
          var model=button.closest('.model')
          closeModel(model);
      })

  })
  closemodelbutt1.forEach(button => {
      button.addEventListener('click', () =>{
          var model=button.closest('.model')
          closeModel(model);
      })

  })

function  openModel(model){
  if (model==null) return
  model.classList.add('active');
  overlay.classList.add('active');

};

function  closeModel(model){
  if (model==null) return
  model.classList.remove('active');
  overlay.classList.remove('active');

};

//popup right  end------------------------------------------

var Middlediv=document.getElementById("Middle");
var tablemiddle=document.getElementById("tablemiddle");


var mainDivpop = document.createElement("div");
mainDivpop.setAttribute("id", "containermainpop");
Middlediv.append(mainDivpop);

var mainDivtable = document.createElement("div");
mainDivtable.setAttribute("id", "containermaintable");
tablemiddle.append(mainDivtable);


const popupCart = (item) => {
  
  console.log("item:", item);

    var imageDiv = document.createElement("div");
    imageDiv.setAttribute("id","popupheart");
 
    var imgappendpop = document.createElement("img");
    imgappendpop.setAttribute("src", item.image_url);
    imgappendpop.setAttribute("id", "imgappendpop");

    var p1pop = document.createElement("p");
    p1pop.setAttribute("id","namepop")
    p1pop.textContent = item.product_name;

    var span1pop = document.createElement("span");
    span1pop.textContent =item.MRPcut;
    span1pop.setAttribute("id","span1pop")

    var span2pop = document.createElement("span");
    span2pop.textContent =" "+item.MRP;
    span2pop.setAttribute("id","span2pop")

    imageDiv.append(imgappendpop,p1pop,span1pop,span2pop);
    console.log("herer")
    

//------table------------------------------------------------------

    var tablediv = document.createElement("div");
    tablediv.setAttribute("id","tablediv");

   var table=document.createElement("table");

   var thead=document.createElement("thead")

   var tr=document.createElement("tr")

   var th=document.createElement("th")
   th.textContent="Payment Details";

   tr.append(th);
   thead.append(tr);

   var tbody=document.createElement("tbody");

   var tr1=document.createElement("tr");

   var td1=document.createElement("td");
   td1.textContent="Bag Total"
   var td2=document.createElement("td");
   td2.textContent=item.MRPcut1;
   tr1.append(td1,td2)

  var tr2=document.createElement("tr");

  var td3=document.createElement("td");
  td3.textContent="Bag Discount"
  var td4=document.createElement("td");
  td4.textContent="-"+item.totaldiscount;
  tr2.append(td3,td4)

  var tr3=document.createElement("tr");

  var td5=document.createElement("td");
  td5.textContent="Sub Total"
  var td6=document.createElement("td");
  td6.textContent=item.MRP;
  tr3.append(td5,td6)


  var tr4=document.createElement("tr");

  var td7=document.createElement("td");
  td7.textContent="Shipping Charge "
  var td8=document.createElement("td");
  td8.textContent="FREE";
  tr4.append(td7,td8)

  var tr5=document.createElement("tr");

  var td9=document.createElement("td");
  td9.textContent="Have a coupon ? "
  var td10=document.createElement("td");
  td10.textContent="View Coupons";
  tr5.append(td9,td10)

 var tr6=document.createElement("tr");

  var td11=document.createElement("td");
  td11.textContent="Discount "
  var td12=document.createElement("td");
  td12.textContent=item.discount;
  tr6.append(td11,td12)

tbody.append(tr1,tr2,tr3,tr6,tr4,tr5)

table.append(thead,tbody)

tablediv.append(table)

mainDivpop.append(imageDiv,tablediv);

    localStorage.setItem("popupcartitem", JSON.stringify(item));
 
}


const addCart = (item) => {
    console.log("item:", item);
    localStorage.setItem("CartItemnykaa", JSON.stringify(item));
    window.open("productdetail.html");
};

function cartpage(){
  window.location.href="Addres.html"
}

//-------------------------------------------------------------------

var indexvalue=1;
    showimg(indexvalue);

    function btn_slide(e){showimg(indexvalue = e);}
   
    function side_slide(e){showimg(indexvalue += e);}
    
    function showimg(e){
        var i;
        const img= document.querySelectorAll(".images img");

        const sliders = document.querySelectorAll(".btn-sliders span");

        if(e > img.length){indexvalue=1}
        if(e < 1){indexvalue=img.length}
        
        for( i=0; i<img.length; i++){
            img[i].style.display="none"
        }
        for( i=0; i<img.length; i++){
            sliders[i].style.background="rgb(245,193,213) "
        }

        img[indexvalue-1].style.display="block";
  
        sliders[indexvalue-1].style.background="rgb(250,90,152) ";
    }
  //container  end




  // container left down pop up----------------------------------------------------------------------------

  $('#btn1').click(function(){
           
    $('#btn1 span').toggleClass("rotate");
});
$('#btn2').click(function(){
   
$('#btn2 span').toggleClass("rotate");
});
$('#btn3').click(function(){
   
$('#btn3 span').toggleClass("rotate");
});
$('#btn4').click(function(){
   
$('#btn4 span').toggleClass("rotate");
});
$('#btn5').click(function(){
   
$('#btn5 span').toggleClass("rotate");
});
$('#btn6').click(function(){
   
$('#btn6 span').toggleClass("rotate");
});
$('#btn7').click(function(){
   
$('#btn7 span').toggleClass("rotate");
});
$('#btn8').click(function(){
   
$('#btn8 span').toggleClass("rotate");
});
$('#btn9').click(function(){
   
$('#btn9 span').toggleClass("rotate");
});
$('#btn10').click(function(){
   
$('#btn10 span').toggleClass("rotate");
});
$('#btn11').click(function(){
   
$('#btn11 span').toggleClass("rotate");
});
$('#btn12').click(function(){
   
$('#btn12 span').toggleClass("rotate");
});
$('#btn13').click(function(){
   
$('#btn13 span').toggleClass("rotate");
});

var btn1 = document.getElementById('btn1')
var add1 = document.getElementById('add1')
var count1 = 0

function create1() {
var div = document.createElement('div')
div.innerHTML = `<br><div class="common"> Popularity<input type="checkbox" checked></div>
                       <div class="common"> Discount <input type="checkbox" onclick="discount(prod)"></div>
                       <div class="common"> Name<input type="checkbox" onclick="namesort(prod)"></div>
                       <div class="common"> Customer Top Rated <input type="checkbox" onclick="rating(prod)"></div>
                       <div class="common"> New Arrivals<input type="checkbox"onclick="newarrive(prod)" ></div>
                       <div class="common"> Price:High To Low <input type="checkbox" onclick="high(prod)"></div>
                       <div class="common"> Price:Low To High<input type="checkbox" onclick="low(prod)"></div>`
count1++
// console.log(count1);
if (count1 % 2 == 1) {
    add1.appendChild(div)
    btn1.style.color = "grey"
} else if (count1 % 2 == 0) {
    let p = add1.firstChild
    // console.log(p);
    p.remove()
    btn1.style.color = "black"
}
// console.log(btn1);
}
btn1.addEventListener('click', create1)

var btn2 = document.getElementById('btn2')
var add2 = document.getElementById('add2')
var count2 = 0

function create2() {
var div = document.createElement('div')
div.innerHTML = `<div> Men's Store <span class="fas fa-chevron-down"></span></div>
                <div>Fragrance <span class="fas fa-chevron-down"></span></div>
                <div> Personal Care <span class="fas fa-chevron-down"></span></div>
                <div> Health & Wellness  <span class="fas fa-chevron-down"></span></div>
                <div> Natural <span class="fas fa-chevron-down"></span></div>
                <div> Hair <span class="fas fa-chevron-down"></span></div>
                <div> Appliances <span class="fas fa-chevron-down"></span></div>
                <div> Pop Ups  <span class="fas fa-chevron-down"></span></div>
                <div> Mom & Baby <span class="fas fa-chevron-down"></span></div`
count2++
if (count2 % 2 == 1) {
    add2.appendChild(div)
    btn2.style.color = "grey"
} else if (count2 % 2 == 0) {
    let p = add2.firstChild
    p.remove()
    btn2.style.color = "black"
}
}
btn2.addEventListener('click', create2)

var btn3 = document.getElementById('btn3')
var add3 = document.getElementById('add3')
var count3 = 0

function create3() {
var div = document.createElement('div')
div.innerHTML = `<div ><input type="search" id="inputsearch" placeholder="Search"></div>
<div class="common">Denver  62    <input type="checkbox"> </div>
<div class="common">MCaffenie 58    <input type="checkbox"> </div>
<div class="common">Truefitt & Hill 55    <input type="checkbox"> </div>
<div class="common">Nivea 54    <input type="checkbox"> </div>
<div class="common">Kapiva Ayurveda 48    <input type="checkbox"> </div>
<div class="common"> Park Avenue  43 <input type="checkbox"> </div>
<div class="common"> The MAn Company  37   <input type="checkbox"> </div>
<div class="common"> The Body Shop  35   <input type="checkbox"> </div>
<div class="common"> Big Muscles 33   <input type="checkbox"> </div>
<div class="common"> Wild Stone 30   <input type="checkbox"> </div>
<div class="common"> Beardo 29   <input type="checkbox"> </div>
<div class="common"> Gillette 29   <input type="checkbox"> </div>
<div class="common"> Gatsby 28   <input type="checkbox"> </div>
<div class="common"> Ramsons 28   <input type="checkbox"> </div>
<div class="common"> ARMAF  27   <input type="checkbox"> </div>
<div class="common"> Fogg 20   <input type="checkbox"> </div>
<div class="common"> Axe 24   <input type="checkbox"> </div>
<div class="common"> Nova 26    <input type="checkbox"> </div>
<div class="common">Police 19    <input type="checkbox"> </div>


`
count3++
if (count3 % 2 == 1) {
    console.log(div);
    add3.appendChild(div)
    btn3.style.color = "grey"
} else if (count3 % 2 == 0) {
    let p = add3.firstChild
    p.remove()
    btn3.style.color = "black"
}
}
btn3.addEventListener('click', create3)

var btn4 = document.getElementById('btn4')
var add4 = document.getElementById('add4')
var count4 = 0

function create4() {
var div = document.createElement('div')
div.innerHTML = `<div class="common"> Rs.0 Rs. 499  (972)<input type="checkbox" onclick="below500(prod)" > </div>
<div class="common">Rs.500 Rs.999  (377) <input type="checkbox" onclick="below500to999(prod)" ></div>
<div class="common"> Rs.1000 Rs.1900   (281)<input type="checkbox"onclick="below1000to1900(prod)"  ></div>
<div class="common"> Rs.2000 Rs.3999  (235)<input type="checkbox"onclick="below2000to3999(prod)"  ></div>
<div class="common">Rs.4000 & Above  (249)<input type="checkbox"onclick="above4000(prod)"  ></div>
`
count4++
if (count4 % 2 == 1) {
    console.log(div);
    add4.appendChild(div)
    btn4.style.color = "grey"
} else if (count4 % 2 == 0) {
    let p = add4.firstChild
    p.remove()
    btn4.style.color = "black"
}
}
btn4.addEventListener('click', create4)

var btn5 = document.getElementById('btn5')
var add5 = document.getElementById('add5')
var count5 = 0

function create5() {
var div = document.createElement('div')
div.innerHTML = `<div class="common">70% And Above 1<input type="checkbox"></div>
<div class="common">60% and Above 13<input type="checkbox"></div>
<div class="common">50% and Above 67<input type="checkbox"></div>
<div class="common">40% and Above 115<input type="checkbox"></div>
<div class="common">30% and Above 349<input type="checkbox"></div>
<div class="common">20% and Above 655<input type="checkbox"></div>
<div class="common">10% and Above 1159<input type="checkbox"></div>
<div class="common">All Discounted Products 1199<input type="checkbox"></div>

`
count5++
if (count5 % 2 == 1) {
    add5.appendChild(div)
    btn5.style.color = "grey"
} else if (count5 % 2 == 0) {
    let p = add5.firstChild
    p.remove()
    btn5.style.color = "black"
}

}
btn5.addEventListener('click', create5)


var btn6 = document.getElementById('btn6')
var add6 = document.getElementById('add6')
var count6 = 0

function create6() {
var div = document.createElement('div')
div.innerHTML = `<div class="common">4 Stars & Above  1554<input type="checkbox"></div>
<div class="common">3 Stars & Above  1816<input type="checkbox"></div>
<div class="common">2 Stars & Above  1850<input type="checkbox"></div>
<div class="common">1 Stars & Above  1877<input type="checkbox"></div>
`
count6++;
if (count6 % 2 == 1) {
    add6.appendChild(div)
    btn6.style.color = "grey"
} else if (count6 % 2 == 0) {
    let p = add6.firstChild
    p.remove()
    btn6.style.color = "black"
}

}
btn6.addEventListener('click', create6)


var btn7 = document.getElementById('btn7')
var add7 = document.getElementById('add7')
var count7 = 0

function create7() {
var div = document.createElement('div')
div.innerHTML = `<div class="common">Work 829 <input type="checkbox"></div>
<div class="common">Casual 823 <input type="checkbox"></div>
<div class="common">Party 628 <input type="checkbox"></div>
<div class="common">Sports 256 <input type="checkbox"></div>
<div class="common">Brunch 58 <input type="checkbox"></div>
<div class="common">Evening 45 <input type="checkbox"></div>
<div class="common">Day 9<input type="checkbox"></div>
<div class="common">Any ocassion 51 <input type="checkbox"></div>
<div class="common">Formal 4 <input type="checkbox"></div>
`
count7++
if (count7 % 2 == 1) {
    add7.appendChild(div)
    btn7.style.color = "grey"
} else if (count7 % 2 == 0) {
    let p = add7.firstChild
    p.remove()
    btn7.style.color = "black"
}

}
btn7.addEventListener('click', create7)

var btn8 = document.getElementById('btn8')
var add8 = document.getElementById('add8')
var count8 = 0

function create8() {
var div = document.createElement('div')
div.innerHTML = `

<div class="common">Male 1931 <input type="checkbox"></div>
<div class="common">Unisex 823 <input type="checkbox"></div>
<div class="common">Female 628 <input type="checkbox"></div>
<div class="common">Boy 6 <input type="checkbox"></div>
<div class="common">Girl 8 <input type="checkbox"></div>
`
count8++
if (count8 % 2 == 1) {
    add8.appendChild(div)
    btn8.style.color = "grey"
} else if (count8 % 2 == 0) {
    let p = add8.firstChild
    p.remove()
    btn8.style.color = "black"
}

}
btn8.addEventListener('click', create8)

var btn9 = document.getElementById('btn9')
var add9 = document.getElementById('add9')
var count9 = 0

function create9() {
var div = document.createElement('div')
div.innerHTML = `<div > <input type="search" id="inputsearch" placeholder="Search"></div>
<div class="common">Natural 823 <input type="checkbox"></div>
<div class="common">Paraben0-Free 628 <input type="checkbox"></div>
<div class="common">Cruelty Free 256 <input type="checkbox"></div>
<div class="common">Herbal 58 <input type="checkbox"></div>
<div class="common">Vegan 45 <input type="checkbox"></div>
<div class="common">SLS Free 9<input type="checkbox"></div>
<div class="common">Dermatologically Tested 51 <input type="checkbox"></div>
<div class="common">Vitamin E 73<input type="checkbox"></div>
`
count9++
if (count9 % 2 == 1) {
    add9.appendChild(div)
    btn9.style.color = "grey"
} else if (count9 % 2 == 0) {
    let p = add9.firstChild
    p.remove()
    btn9.style.color = "black"
}

}
btn9.addEventListener('click', create9)


var btn10 = document.getElementById('btn10')
var add10 = document.getElementById('add10')
var count10 = 0

function create10() {
var div = document.createElement('div')
div.innerHTML = `

<div class="common">Earthy & Woody 543  <input type="checkbox"></div>
<div class="common">Fresh  823 <input type="checkbox"></div>
<div class="common">Warm & Spicy 628 <input type="checkbox"></div>
<div class="common">Floral 6 <input type="checkbox"></div>
<div class="common">Fruity 8 <input type="checkbox"></div>
`
count10++
if (count10 % 2 == 1) {
    add10.appendChild(div)
    btn10.style.color = "grey"
} else if (count10 % 2 == 0) {
    let p = add10.firstChild
    p.remove()
    btn10.style.color = "black"
}

}
btn10.addEventListener('click', create10)


var btn11 = document.getElementById('btn11')
var add11 = document.getElementById('add11')
var count11 = 0

function create11() {
var div = document.createElement('div')
div.innerHTML = `<div > <input type="search" id="inputsearch" placeholder="Search"></div>
<div class="common">Liquid 823 <input type="checkbox"></div>
<div class="common">Spray 628 <input type="checkbox"></div>
<div class="common">Cream 256 <input type="checkbox"></div>
<div class="common">Powder 58 <input type="checkbox"></div>
<div class="common">Gel 45 <input type="checkbox"></div>
<div class="common">Capsule 9<input type="checkbox"></div>
<div class="common">Bar 51 <input type="checkbox"></div>
<div class="common">Wax  73<input type="checkbox"></div>
`
count11++
if (count11 % 2 == 1) {
    add11.appendChild(div)
    btn11.style.color = "grey"
} else if (count11 % 2 == 0) {
    let p = add11.firstChild
    p.remove()
    btn11.style.color = "black"
}

}
btn11.addEventListener('click', create11)


var btn12 = document.getElementById('btn12')
var add12 = document.getElementById('add12')
var count12 = 0

function create12() {
var div = document.createElement('div')
div.innerHTML = `

<div class="common"Oily 543  <input type="checkbox"></div>
<div class="common">Normal  823 <input type="checkbox"></div>
<div class="common">Dry 628 <input type="checkbox"></div>
<div class="common">Sensitive 56 <input type="checkbox"></div>
<div class="common">Combination 58 <input type="checkbox"></div>
`
count12++
if (count12 % 2 == 1) {
    add12.appendChild(div)
    btn12.style.color = "grey"
} else if (count12 % 2 == 0) {
    let p = add12.firstChild
    p.remove()
    btn12.style.color = "black"
}

}
btn12.addEventListener('click', create12)

var btn13 = document.getElementById('btn13')
var add13 = document.getElementById('add13')
var count13 = 0

function create13() {
var div = document.createElement('div')
div.innerHTML = `<div > <input type="search" id="inputsearch" placeholder="Search"></div>
<div class="common">Dryness 823 <input type="checkbox"></div>
<div class="common">Acne/Blemishes 628 <input type="checkbox"></div>
<div class="common">Dullness 256 <input type="checkbox"></div>
<div class="common">Dark Spots 58 <input type="checkbox"></div>
<div class="common">Oil control 45 <input type="checkbox"></div>
<div class="common">Brightning 9<input type="checkbox"></div>
<div class="common">Sun Protection 51 <input type="checkbox"></div>
<div class="common">Anti-Foging 73<input type="checkbox"></div>
`
count13++
if (count13 % 2 == 1) {
    add13.appendChild(div)
    btn13.style.color = "grey"
} else if (count11 % 2 == 0) {
    let p = add13.firstChild
    p.remove()
    btn13.style.color = "black"
}

}
btn13.addEventListener('click', create13)

//--------------------------------------------------------------------------------------------

let prod;
product_nkyaa();
async function product_nkyaa() {
  try {

    let prods1= await fetch('http://localhost:1880/products');

     prod = await prods1.json();

    showProducts(prod)
  } catch (err) { 
    console.log(err.message);
  }
}


let newdata;
product_nkyaa1();
async function product_nkyaa1() {
  try {
 
    let prods2= await fetch('http://localhost:1880/products');
  
  newdata = await prods2.json();
   
    showProducts(newdata)
  } catch (err) { 
    console.log(err.message);
  }
}


  var right = document.getElementById("container_right");
  var mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "containermain");
  right.append(mainDiv);
 
//sorting --------------------------------------------------------------------------------
  let countdiscount=0;
  let discount=(prod)=>{
     
      if(countdiscount%2==0){
        countdiscount++;
    prod=prod.sort(function(a,b){
       
        return a.discountsort-b.discountsort;
      })
      showProducts(prod);
      console.log("if",countdiscount)
    }
    else if(countdiscount%2==1){

        countdiscount++;
        document.getElementById("containermain").innerHTML="";
        console.log("else",countdiscount)
        showProducts(newdata);
    }
}
//------------------------------------------------------------------------------------

let countlow=0;
let low=(prod)=>{
   
    if(countlow%2==0){
        countlow++;
  prod=prod.sort(function(a,b){
     
      return a.MRPsort-b.MRPsort;
    })
    showProducts(prod);
   
  }
  else if(countlow%2==1){

    countlow++;
      document.getElementById("containermain").innerHTML="";
      
      showProducts(newdata);
  }
}
//------------------------------------------------------------------------------------------
let counthigh=0;
let high=(prod)=>{
   
    if(counthigh%2==0){
        counthigh++;
  prod=prod.sort(function(a,b){
     
      return b.MRPsort-a.MRPsort;
    })
    showProducts(prod);
    
  }
  else if(counthigh%2==1){

    counthigh++;
      document.getElementById("containermain").innerHTML="";
   
      showProducts(newdata);
  }
}
//------------------------------------------------------------------------

let countrandom=0;
let newarrive=(prod)=>{
   
    if(countrandom%2==0){
        countrandom++;
  prod=prod.sort(function(a,b){
    return b.item-a.item;
     
    })
    showProducts(prod);
    
  }
  else if(countrandom%2==1){

    countrandom++;
      document.getElementById("containermain").innerHTML="";
   
      showProducts(newdata);
  }
}
//------------------------------------------------------------------------
let countrating=0;
let rating=(prod)=>{
   
    if(countrating%2==0){
        countrating++;
  prod=prod.sort(function(a,b){
    return b.rating-a.rating;
     
    })
    showProducts(prod);
    
  }
  else if(countrating%2==1){

    countrating++;
      document.getElementById("containermain").innerHTML="";
   
      showProducts(newdata);
  }
}

//-----------------------------------------


let countnamesort=0;
let namesort=(prod)=>{
   
    if(countnamesort%2==0){
        countnamesort++;
  prod=prod.sort(function(a,b){
    return a.name-b.name;
     
    })
    showProducts(prod);
    
  }
  else if(countnamesort%2==1){

    countnamesort++;
      document.getElementById("containermain").innerHTML="";
   
      showProducts(newdata);
  }
}

//-----------------------------------------

let countbelow500=0;
let below500=(prod)=>{
   
    if(countbelow500%2==0){
        countbelow500++;
   prod.sort((a, b) => a.price - b.price);
   let arr1 = [];
  prod.forEach((element) => {
          if (element.MRPsort < 500) {
            arr1.push(element);
          }
        });
    showProducts(arr1);
  }
  else if(countbelow500%2==1){
    countbelow500++;
      document.getElementById("containermain").innerHTML="";
      showProducts(newdata);
  }
}
//-----------------------------------------

let countbelow500to999=0;
let below500to999=(prod)=>{
   
    if(countbelow500to999%2==0){
        countbelow500to999++;
   prod.sort((a, b) => a.price - b.price);
   let arr1 = [];
  prod.forEach((element) => {
          if (element.MRPsort > 500 && element.MRPsort < 999 ) {
            arr1.push(element);
          }
        });
    showProducts(arr1);
  }
  else if(countbelow500to999%2==1){
    countbelow500to999++;
      document.getElementById("containermain").innerHTML="";
      showProducts(newdata);
  }
}
//-----------------------------------------

let countbelow1000to1900=0;
let below1000to1900=(prod)=>{
   
    if(countbelow1000to1900%2==0){
        countbelow1000to1900++;
   prod.sort((a, b) => a.price - b.price);
   let arr1 = [];
  prod.forEach((element) => {
          if (element.MRPsort > 1000 && element.MRPsort < 1900 ) {
                arr1.push(element);
          }
        });
        if(arr1.length==0){
         alert("No Product in that range")      
        }
        else{
        showProducts(arr1);
        }
  }
  else if(countbelow1000to1900%2==1){
    countbelow1000to1900++;
      document.getElementById("containermain").innerHTML="";
      showProducts(newdata);
  }
}
//-----------------------------------------
let countbelow2000to3999=0;
let below2000to3999=(prod)=>{
   
    if(countbelow2000to3999%2==0){
        countbelow2000to3999++;
   prod.sort((a, b) => a.price - b.price);
   let arr1 = [];
  prod.forEach((element) => {
          if (element.MRPsort > 2000 && element.MRPsort < 3999 ) {
                arr1.push(element);
          }
        });
        if(arr1.length==0){
         alert("No Product in that Range")      
        }
        else{
        showProducts(arr1);
        }
  }
  else if(countbelow2000to3999%2==1){
    countbelow2000to3999++;
      document.getElementById("containermain").innerHTML="";
      showProducts(newdata);
  }
}

//-----------------------------------------

let countabove4000=0;
let above4000=(prod)=>{
   
    if(countabove4000%2==0){
        countabove4000++;
   prod.sort((a, b) => a.price - b.price);
   let arr1 = [];
  prod.forEach((element) => {
          if (element.MRPsort > 4000  ) {
                arr1.push(element);
          }
        });
        if(arr1.length==0){
         alert("No Product in that Range")      
        }
        else{
        showProducts(arr1);
        }
  }
  else if(countabove4000%2==1){
    countabove4000++;
      document.getElementById("containermain").innerHTML="";
      showProducts(newdata);
  }
}


//-----------------------------------------
let showProducts = (product) => {
    document.getElementById("containermain").innerHTML="";
 product.map((item) => {
     
    var imageDiv = document.createElement("div");
    imageDiv.setAttribute("id","heart");

    var trendiv = document.createElement("div");
    trendiv.setAttribute("id", "trendiv");
    trendiv.addEventListener("click",function(){
        addCart(item);
    });

    trendiv.textContent=item.trend;
    if(item.trend=="FEATURED"){
        trendiv.style.color="#f8649d";
    }
    else if(item.trend=="BESTSELLER"){
        trendiv.style.color="#68a677";
    }
    else{
        trendiv.style.color="#fea838";
    }

    var button = document.createElement("div");
    button.setAttribute("id", "button");
    button.addEventListener("click",function(){
        addCart(item);
    });

    var imgappend = document.createElement("img");
    imgappend.setAttribute("src", item.image_url);
    imgappend.setAttribute("id", "imgappend");

    var p1 = document.createElement("p");
    p1.setAttribute("id","name")
    p1.textContent = item.product_name;

    var spanMRP=document.createElement("span");
    spanMRP.textContent="MRP:-";
    spanMRP.setAttribute("id","spanMRP");

    var span1 = document.createElement("span");
    span1.textContent =item.MRPcut;
    span1.setAttribute("id","span1")

    var span2 = document.createElement("span");
    span2.textContent =" "+item.MRP;
    span2.setAttribute("id","span2")

    var span3 = document.createElement("span");
    span3.textContent = "  "+item.discount;
    span3.setAttribute("id","span3")

    var spandiv=document.createElement("div");
    spandiv.setAttribute("id","spandiv")

    var span4 = document.createElement("div");
    span4.style.display="inline-block";
    span4.setAttribute("id","span4")
   
    var img1 = document.createElement("img");
    img1.setAttribute("src", item.image_urls);
    
    var span5 = document.createElement("div");
    span5.textContent = item.total;
    span5.style.display="inline-block";
    span5.setAttribute("id","span5")

    var heartdiv=document.createElement("div")
    heartdiv.style.width="270px";
    heartdiv.style.height="50px";
    heartdiv.style.margin="auto";
    heartdiv.style.display="block"
    heartdiv.setAttribute("id","simple");


    heartdiv.addEventListener("click",function(){
      popupCart(item)
      console.log("yeahhh")
      // document.getElementById('simple').click();
           openmodelbutt.forEach(button => {
            var model= document.querySelector(button.dataset.modelTarget)
            // const carts =await Cart.create(item)
            // res.send(carts)
            openModel(model);
          
    });
    
    })
   
    var heartimg=document.createElement("img");
    heartimg.setAttribute("src", item.image_urlheart);
    heartimg.setAttribute("class","image_overlay")
 
    const hoveringfunc = () => {
        heartimg.style.display = "block";
    }
    const hoveringfunc1 = () => {
        heartimg.style.display = "none";
    }
    imageDiv.addEventListener("mouseenter", hoveringfunc);
    imageDiv.addEventListener("mouseleave",hoveringfunc1);

    heartdiv.append(heartimg)
    span4.append(img1,span5)
    spandiv.append(spanMRP, span1,span2,span3)
    button.append(imgappend,p1,spandiv,span4)
    imageDiv.append(trendiv,button,heartdiv);
    mainDiv.append(imageDiv);
  });
}
showProducts(prod);







