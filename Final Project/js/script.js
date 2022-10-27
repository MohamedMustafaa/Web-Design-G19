let counter1 = document.querySelector(".counter1")
let counter2 = document.querySelector(".counter2")
let counter3 = document.querySelector(".counter3")
let counter4 = document.querySelector(".counter4")


// counter.innerText = i

// let set = setInterval(()=>{
    //     if(i == 8000){
        //         clearInterval(set)
        //     }
        //     counter.innerText = i
        //     i+=10
        // },10)
//     function count(counter, enNum, incNum , time = 100){
//         let i = 0 
//         let set = setInterval(()=>{
//             if(i == enNum){
//                 clearInterval(set)
//             }
//             counter.innerText = i
//             i += incNum
//         },time)
// }
// count(counter1, 8000, 2000)
// count(counter2, 810, 10, 10)
// count(counter3, 2000, 200)
// count(counter4, 20, 5)
// window.addEventListener('scroll', function(){
//     if(document.documentElement.scrollTop > 600)
//         scrollUp.style.display = "block"
//     else scrollUp.style.display = "none"
// })
let flag = true
function count(counter, enNum, incNum , time = 100){
    let i = 0 
        let set = setInterval(()=>{
            if(i == enNum){
                clearInterval(set)
            }
            counter.innerText = i
            i += incNum
        },time)

        flag = false
    
}

window.addEventListener('scroll', function (){
    if(document.documentElement.scrollTop > 600)
        scrollUp.style.display = "block"
    else scrollUp.style.display = "none"

    if(document.documentElement.scrollTop > 800){
        if(flag){
            count(counter1, 8000, 1000)
            count(counter2, 810, 10, 10)
            count(counter3, 2000, 200)
            count(counter4, 20, 2)  
        }
    }
})
