//reference:json placeholder

//callback function (a function that call or run another function)
function doSomething(callback) {
    console.log("Doing something...");
    callback();
}
function myCallback() {
    console.log("Callback function executed!");
}
doSomething(myCallback);

//promise (set of two function resolve/reject and use as a async  function)
function ml() {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(45)
        }, 3500);
    })
}
console.log('p data1');
let data = ml()
data.then((v) => {
    console.log(v);
    console.log(data);
    console.log('p data2');  
}
)

// async funtion (a function that stop another function to run untill it run)
async function fun() {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(55)
        }, 5500);
    })
}
async function main() {   
    console.log('as data 1');
    let dat = await fun()
    console.log(dat);
    console.log('as data 2');
}
main()

// fatch (bring data from other site)
async function pro() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let da = await x.json();
    console.log(da); 
    return x;
}
async function min() {   
    console.log('f data 1');
    let dt = await pro()
    console.log(dt);
    console.log('f data 2');
}
min()

//post request (sent data)
async function prime() {
    let y = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    let dax = await y.json();
    console.log(dax); 
    return y;
}
async function mn() {   
    console.log('f data 1');
    let dam = await prime()
    console.log(dam);
    console.log('f data 2');
}
mn()

