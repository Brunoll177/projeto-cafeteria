const cart = document.querySelector(".cart")
const products = document.querySelectorAll(".box")
const sideBar = document.querySelector(".side-bar")
const savedProducts = [{name: ""}]
const cont = document.querySelector(".cont")
const price = document.querySelector(".price")
const close = document.querySelector(".close")
const finalValue = document.querySelector(".valor-total")
let total = 0
let real = null
i = 0
cart.addEventListener("click",function (){
sideBar.classList.toggle("left")
})
close.addEventListener("click", function(){
  sideBar.classList.remove("left")
})
products.forEach(div =>{
    div.addEventListener('click', () => {    
      
       i++
        cont.innerText = i
        cont.style.opacity = "100"
        const h3Text = div.querySelector("h3").innerText   
        const preco = div.querySelector(".price").innerText  
        function verificar(){
            for(let t = 0; t < savedProducts.length; t++){
                console.log(savedProducts[t].name.includes(h3Text))
              if (real = savedProducts[t].name.includes(h3Text) === true){
                break
              }
            }
            return real
        }
            if(verificar()) {
                console.log("item já existe")
                total += parseFloat(preco.slice(2, -9).replace(",", "."))
                finalValue.innerHTML = `Total:${total.toFixed(2)}` 
                   
            }else{
                savedProducts.unshift({
                    name: h3Text,
                    })
                   
                  const img = div.querySelector("img").src
                  const newDiv = document.createElement('div');
                  newDiv.className = ("products-cart")
                  newDiv.innerHTML = `<img src="${img}"><h3>${h3Text}</h3><p>${preco.slice(2, -9)}<p/>`   
                  criaDeleta(newDiv)
                  sideBar.appendChild(newDiv)   
                  
                            
                  total += parseFloat(preco.slice(2, -9).replace(",", "."))
                  finalValue.innerHTML = `Total:${total.toFixed(2)}` 
                
                  console.log(total)
                             
            }    
                }           
)})
    

function criaDeleta(local){
const del = document.createElement("div")
del.innerText = "X"
del.className = ("deletar")
 return local.appendChild(del)
}
//function remover(x){
  document.addEventListener("click", function(e){
    el = e.target
    if(el.classList.contains("deletar")){
      el.parentElement.remove()
       savedProducts.length = 0
       let p = x.querySelector("p").innerText  
       total -= parseFloat(p).toFixed(2)
        finalValue.innerHTML = `Total:${total.toFixed(2)}`
       console.log(total)
      
    }
   
  })
  
//}

