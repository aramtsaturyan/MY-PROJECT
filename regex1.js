

// let a = [
//     {
//         name: 'Aram',
//         surname: 'Gevorgyan',
//         mail: 'aram@mail.ru',
//         tel: '094648981'
//     },

//     {
//         name: 'Gevorg',
//         surname: 'Taturyan',
//         mail: 'arto@mail.ru',
//         tel: '093648981'
//     },

//     {
//         name: 'Gor',
//         surname: 'Hakobyan',
//         mail: 'gor@mail.ru',
//         tel: '094452181'
//     }
// ]


let d = localStorage.getItem("test1")
let g = JSON.parse(d)
console.log(g);

let serch = document.querySelector('.write');
let fnd = document.querySelector('.search')
let p = document.querySelector('p')
let div = document.querySelector('.result')
fnd.addEventListener('click', () =>{
        g.filter((f) =>{
            Object.keys(f).forEach((k) =>{
                let val = f[k]
                if(serch.value ==  val){
                   let text = document.createElement('p')
                   div.append(text);
                    let j = Object.values(f)
                   console.log(j.replace(","))
                }
            })
        })
    
    })

