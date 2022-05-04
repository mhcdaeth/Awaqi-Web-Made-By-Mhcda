const intro = document.querySelector('.intro')
const introVid = document.querySelector('.intro video')
window.onload = function(){
    const cookie = document.cookie.split('=')
    if(cookie.includes('loaded')){
        intro.style.display = 'none'
    }
    
    introVid.onpause = function(){
        intro.style.display = 'none'
        document.cookie = 'activity = loaded; path=/'
    }

}

const border = document.querySelector('.home .parameter') 
const blur = document.querySelector('.home .border .parameter .blur')
const svg = document.querySelector('.home .center svg')
const anim = document.querySelector('#home .center')
const socialMedias = document.querySelectorAll('.bottomRight svg')

border.onmousemove = function(e){
    const property = blur.getBoundingClientRect()
    blur.style.display = 'block'
    blur.style.left = `${e.offsetX - 100}px`
    blur.style.top = `${e.offsetY - 100}px`
    svg.style.filter = `drop-shadow(${(border.getBoundingClientRect().width - property.left) / 2 }px ${((border.getBoundingClientRect().height - property.top) / 2) - 10}px 20px var(--light-gray)`
}

if(innerWidth <= 425){
    border.ontouchmove = function(e){
        e.preventDefault()
        const property = blur.getBoundingClientRect()
        blur.style.display = 'block'
        svg.style.filter = `drop-shadow(${(border.getBoundingClientRect().width - property.left) / 2 }px ${((border.getBoundingClientRect().height - property.top) / 2) - 10}px 20px var(--light-gray)`
        blur.style.left = `${e.changedTouches[0].screenX - innerWidth + 100}px`
        blur.style.top = `${e.changedTouches[0].screenY - innerWidth + 100}px`
    }
}

document.onscroll = function(e){
    if(scrollY == 0){
        for(let i of socialMedias){
            i.style.fill = 'var(--orange)'
            
            i.onmouseover = function(){
                i.style.fill = 'var(--blue)'
            }
            
            i.onmouseleave = function(){
                i.style.fill = 'var(--orange)'
            }
        }
    }else if(innerWidth <= 425){
        if(scrollY >= innerHeight - (innerHeight / 2)){  
            for(let i of socialMedias){
                i.style.fill = 'var(--blue)'
                
                i.onmouseover = function(){
                    i.style.fill = 'var(--white)'
                }
                
                i.onmouseleave = function(){
                    i.style.fill = 'var(--blue)'
                }
            }
        }else{
            for(let i of socialMedias){
                i.style.fill = 'var(--orange)'
                
                i.onmouseover = function(){
                    i.style.fill = 'var(--blue)'
                }
                
                i.onmouseleave = function(){
                    i.style.fill = 'var(--orange)'
                }
            }
        }
    }else{
        for(let i of socialMedias){
            i.style.fill = 'var(--blue)'
            
            i.onmouseover = function(){
                i.style.fill = 'var(--white)'
            }
            
            i.onmouseleave = function(){
                i.style.fill = 'var(--blue)'
            }
        }
    }
}

//inputs

const inputs = document.querySelectorAll('#inputs input')
const subscribe = document.querySelector('#inputs button')

subscribe.onclick = function(){
    for(let i = 0; i <= inputs.length - 2; i++){
        if(inputs[i].value == ''){
            inputs[i].classList.add('error')
            
        }else{
            inputs[i].classList.remove('error')
        }if(!(inputs[2].value.includes('@' && '.com'))){
            inputs[2].classList.add('error')
            inputs[2].value = `'${inputs[2].value}" is not a valid email adress`
            inputs[2].style.color = 'red'

            inputs[2].onclick = function(){
                this.value = ''
            }
        }else if(!(inputs[i].value == '')){

            setTimeout(function(){
                inputs[i].value = ''
                inputs[3].value = ''
            }, 1000)
        }

    }
}

inputs[0].oninput = function(){
    this.value = this.value.toUpperCase()
}
inputs[1].oninput = function(){
    this.value = this.value.toUpperCase()
}



let amhTransParameter = document.querySelector('#aboutAndContact .main .top .amhBar')
let amhTrans = document.querySelector('.aboutAndContact .main .top .amhBar .amh')
let englishOnLook =document.querySelector('#aboutAndContact .main .top .awaqi p')
let english =document.querySelector('#aboutAndContact .main .top .awaqi')


        amhTransParameter.onmousemove = function(e){
            let property = amhTrans.getBoundingClientRect()
            amhTrans.style.clipPath = `circle(15% at ${e.clientX - 50}px ${e.clientY - property.top}px)`
        }

            amhTransParameter.ontouchmove = function(e){
                // amhTransParameter.style.display = 'none'
                let property = amhTrans.getBoundingClientRect()
                const event = e.changedTouches[0]
                e.preventDefault()
                amhTrans.style.clipPath = `circle(20% at ${(event.clientX - 50)}px ${event.clientY - property.top}px)`
            }
        