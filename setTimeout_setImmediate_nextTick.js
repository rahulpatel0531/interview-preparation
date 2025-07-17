

// setTimeout -> timer phase/queue 
// setImmediate -> check phase / queue
// nextTick -> 

console.log("Program start");

setTimeout(() => {
  console.log("setTimeout")
}) // 1000

setImmediate(()=>{
    console.log("setImmediate callback executed");
})

process.nextTick(()=>{
    console.log("nextTick invoked")
})

console.log("Program end");