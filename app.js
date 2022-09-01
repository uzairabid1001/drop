let mobile ={
    Honda:{
        civic:{
             Model:2021,
             color:"black",
             price:5000000,
        },
        city:{
            Model:2018,
             color:"Grey",
             price:3000000,       
        }
    },
    Toyota:{
        carolla:{
            Model:2022,
            color:"white",
            price:4500000,
        },
        aqua:{
            Model:2015,
            color:"mahroon",
            price:3000000,
        }
    },
    KIA:{
        sportage:{
            Model:2020,
            color:"silver",
            price:5500000,
        },
        stonic:{
            Model:2022,
             color:"blue",
             price:4000000,
        }
    }
}
let modelname = document.getElementById('mobilename')
let model = document.getElementById('mobilemodel')
let pp = document.getElementById('pp')
function searchval(){
    let res = mobile[modelname.value][model.value]
    let ppp = Object.entries(res)
    for (let i = 0; i < ppp.length; i++) {
        pp.innerHTML +=` <option>${ppp[i]}</option>`    
    }
    //    pp.innerHTML=res
}
let mainkeys = Object.keys(mobile)
for (let i = 0; i < mainkeys.length; i++) {
    modelname.innerHTML +=` <option>${mainkeys[i]}</option>`    
}
let main = Object.keys(mobile.Honda)
for (let i = 0; i < main.length; i++) {
    mobilemodel.innerHTML +=` <option>${main[i]}</option>`    
}
let mai = Object.keys(mobile.Toyota)
for (let i = 0; i < mai.length; i++) {
    mobilemodel.innerHTML +=` <option>${mai[i]}</option>`    
}
let ma = Object.keys(mobile.KIA)
for (let i = 0; i < ma.length; i++) {
    mobilemodel.innerHTML +=` <option>${ma[i]}</option>`    
}


















// function filnest(){
//     model.disabled=false;

// }
//     function an(){
//         modelname=false
//     }
    
// let makeys = Object.keys(mobile[modelname.value])
// for (let i = 0; i <  makeys.length; i++) {
// model.innerHTML +=` <option>${makeys[i]}</option>`}
// // model.disabled=false
//         function searchval(){
//             let res = mobile[modelname.value][model.value]
//             console.log(res)
//         }