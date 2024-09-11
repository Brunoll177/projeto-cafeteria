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
let click = 0
i = 0
cart.addEventListener("click",function (){
sideBar.classList.toggle("left")
})
close.addEventListener("click", function(){
  sideBar.classList.remove("left")
})
products.forEach(div =>{
  
    div.addEventListener('click', () => {  
      let zeraConta = sideBar.querySelectorAll(".products-cart")
      zeraConta.forEach(div => {
        let conta = 0
        document.addEventListener("click", function(e){
          let el = e.target
          if(el.classList.contains("box")){
            conta++
          }
        })
      })

      
        cont.innerText = i
        cont.style.opacity = "100"
        const h3Text = div.querySelector("h3").innerText   
        let preco = div.querySelector(".price").innerText  
        const img = div.querySelector("img").src


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
                let Newdiv = sideBar.querySelectorAll(".products-cart")            
              Newdiv.forEach(div =>{
                const h3 = div.querySelector("h3").innerText                  
                  if(h3 == h3Text){
                    let fvalue = parseFloat(preco.slice(2, -9).replace(",", ".")) * conta
                    div.innerHTML = `<img src="${img}"><h3>${h3Text}</h3><h4>${conta}</h4><p>${fvalue.toFixed(2)}<p/><div class="deletar">x</div>`   
                  }               
              })              
            }else{      
                savedProducts.unshift({
                    name: h3Text,
                    
                    })   
                  const img = div.querySelector("img").src
                  const newDiv = document.createElement('div');
                  newDiv.className = ("products-cart")
                  newDiv.innerHTML = `<img src="${img}"><h3>${h3Text}</h3><h4>${conta}</h4><p>${preco.slice(2, -9)}<p/>`   
                  criaDeleta(newDiv)
                  sideBar.appendChild(newDiv)   
                  
                         
                  total += parseFloat(preco.slice(2, -9).replace(",", ".")) * conta
                  finalValue.innerHTML = `Total:${total.toFixed(2)}` 
                i++
                  console.log(total)
                  cont.innerText = i
                             
            }    
                }           
)})
function criaDeleta(local){
const del = document.createElement("div")
del.innerText = "X"
del.className = ("deletar")
 return local.appendChild(del)
}
function remover(x){
  document.addEventListener("click", function(e){
    el = e.target
    if(el.classList.contains("deletar")){
      el.parentElement.remove()
      i--
      let limpar = el.parentElement.querySelector("h3").innerHTML
      for(let b  in savedProducts){
        if(savedProducts[b].name.includes(limpar)){
          savedProducts.splice(b,1)
          console.log(savedProducts)
        }
      }

       let p = el.parentElement.querySelector("p").innerText.replace(",", ".")  
       
      
       total -= parseFloat(p)
        finalValue.innerHTML = `Total:${total.toFixed(2)}`
        cont.innerText = i
        if(total <= 0){
          finalValue.innerHTML = "Total:"
          cont.style.opacity = "0"                  
        }
       console.log(total)
     
    }
  })
  
}

