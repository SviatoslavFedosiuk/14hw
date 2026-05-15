function randomDelay() {
    return Math.floor(Math.random() * (5000-1000) + 1000)
}
function delayPromise(text, delay) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(text)
        }, delay)
    })
}

const  delay1 = randomDelay();
const  delay2 = randomDelay();
const  delay3 = randomDelay();
const  delay4 = randomDelay();
const  delay5 = randomDelay();

const promise1 = delayPromise(`Promise made with delay ${delay1}`, delay1)
const promise2 = delayPromise(`Promise made with delay ${delay2}`, delay2)
const promise3 = delayPromise(`Promise made with delay ${delay3}`, delay3)
const promise4 = delayPromise(`Promise made with delay ${delay4}`, delay4)
const promise5 = delayPromise(`Promise made with delay ${delay5}`, delay5)

Promise.all([promise1,promise2,promise3,promise4,promise5]).then(res=>console.log(res));
Promise.race([promise1,promise2,promise3,promise4,promise5]).then(res=>console.log(res));