// function f1(data){
//     console.log(`f1 and ${data}`);
//     f2();
// }

// function f2(){
//     console.log("f2");

// }
// setTimeout(f1,3000,"dyn.value")




// function success(){
//     console.log("success...")
// }
// function fail(){
//     console.log("Fail...")

// }
// function er(){
//     console.log("Try again...")
// }

// function exec(callback,data){
//     if (data){
//         console.log(`balance : ${data}`);
//     }
//     // callback()
//     setTimeout(callback,3000)
// }
 
// function trigger(data){
//     if (data>0){
//         exec(success,data)
//     }
//     else if(data<=0){
//         exec(fail,data)
//     }
//     else{
//         exec(er,"")
//     }
// }
// trigger(23)



async function Api() {
    // const req =await fetch('https://66e526de5cc7f9b6273c6b41.mockapi.io/register')
    // const res = await req.json()
    // console.log(res)
    // return res
    try{
        const response =await fetch('https://66e526de5cc7f9b6273c6b41.mockapi.io/register')
    const data = await response.json()
    console.table(data)
    return data
    }catch(error){
        console.table(error)
    }
}
Api()
// async function apidata() {
//     const ad = await Api()
//     console.table(ad)
    
// }
// apidata()

async function apidata() {
    const ad = await Api()
    console.log(ad)
    //only arrays should be used in map function
    const structuredatamap = ad.map((data) => {console.log(data)})
    //filter is used for filtering content in table
    const activeusers =ad.filter(user => user.isactive !== false)
console.table(activeusers) 
   
}
apidata()