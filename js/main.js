/* Functions */ 
function makeElemets (...element){
    const maked = []
    for(let i of element){
        let el = document.createElement(i)
        maked.push(el)
    }
    return maked
}

function appendElement (dad, ...child){
    for(let i of child){
        dad.appendChild(i)
    }
}
/* Play video */ 

function playVideo () {
    let superWrapper = document.querySelectorAll('.items')
    let newDataBase = []
    for(let i of superWrapper){
        i.onclick = () => {
            let iframeD = i.childNodes[0]
            iframeD.onclick = () => {
                let play = iframeD.childNodes[1]
                let iframeCheck = false
                play.style.display = 'flex'
                iframeCheck = true
                body.addEventListener('click', (event) => {
                    if(event.target == play && iframeCheck){
                        play.style.display = 'none'
                        iframeCheck = false
                        location.reload()
                       }
                })
            }
            let threeDot = i.childNodes[1].childNodes[2]
            threeDot.onclick = () => {
                let modalWrapper = i.childNodes[2]
                modalWrapper.style.display = 'block'
                displayCheck = true
                let deleteList = modalWrapper.childNodes[0].childNodes[0].childNodes[6]
                deleteList.onclick = () => {
                    modalWrapper.style.display = 'none'
                    displayCheck = false
                    let liId = i.childNodes[1].childNodes[1].childNodes[0].textContent
                    for(let i of dataBase){
                        if(liId != i.title){
                            newDataBase.push(i)
                            console.log(i)
                        }
                        dataBase = newDataBase
                        window.localStorage.setItem('localData', JSON.stringify(dataBase))
                        location.reload()
                    }
                }
                body.addEventListener('click', (event) => {
                    if(event.target == modalWrapper && displayCheck){
                        modalWrapper.style.display = 'none'
                        displayCheck = false
                    }
                })
            }
        }
    }
}
/* NAV bar */
let navBar = document.querySelector('.menuButton')
let leftSite = document.querySelector('.left-site')
let leftSite2 = document.querySelector('.left-site2')
let cep = document.querySelectorAll('.iframe')
let cepLi = document.querySelectorAll('.items')
let mainItemUl = document.querySelector('.main-item')
let body = document.querySelector('body')
let checkNavBar = false
let displayCheck = false
navBar.onclick = () => {
    if(!checkNavBar){
        leftSite.style.display = 'none'
        leftSite2.style.display = 'block'
        for(let i of cep){
            i.style.width = '360px'
            i.style.height = '260px'
        }
        for(let i of cepLi){
            i.style.width = '360px'
        }
        checkNavBar = true
    }
    else if (checkNavBar){
        leftSite.style.display = 'block'
        leftSite2.style.display = 'none'
        for(let i of cep){
            i.style.width = '300px'
            i.style.height = '200px'
        }
        for(let i of cepLi){
            i.style.width = '300px'
        }
        checkNavBar = false
    }
}
/* li renderer*/
function liRenderer (data) {
    for(let j of data){

    let [
        modalLiH26,ModalImg6,modalLi6,modalLiH25,ModalImg5,modalLi5,modalLiH24,ModalImg4,modalLi4,modalLiH23,
        ModalImg3,modalLi3,modalLiH22,ModalImg2,modalLi2,modalLiH21,ModalImg1,modalLi1,modalUl,modal,modalWrapp,hr,threeDotImg,threeDotA,
        korganlar1,korganlar2,h2Wrapper,Title,titleWrapper2,iframeWrapper,capImg,titleWrapp,iframeImg,iframeDiv,iframeSuperWrapper,newLi
    ] = makeElemets('h2', 'img', 'li', 'h2','img','li','h2','img','li','h2','img','li','h2','img','li','h2','img','li','ul','div','div','hr','img','a','h3','h3',
       'dic','h2','div','div', 'img','div','img','div','div','li')

     modalLi6.classList.add('modal-li')
     modalLiH26.classList.add('modal-h2')
     modalLiH26.textContent = "O'chirish"
     ModalImg6.classList.add('modal-img')
     ModalImg6.setAttribute('src', './img/delete.svg')
     modalLiH25.classList.add('modal-h2')
     modalLiH25.textContent = "Shikoyat qilish"
     ModalImg5.classList.add('modal-img')
     ModalImg5.setAttribute('src', './img/finish.svg')
     modalLi5.classList.add('modal-li')
     modalLiH24.classList.add('modal-h2')
     modalLiH24.textContent = "Qiziqarsiz"
     ModalImg4.classList.add('modal-img')
     ModalImg4.setAttribute('src', './img/dioganal-line.svg')
     modalLi4.classList.add('modal-li')
     modalLiH23.classList.add('modal-h2')
     modalLiH23.textContent = "Ko'rish ro'yxatiga qo'shish"
     ModalImg3.classList.add('modal-img')
     ModalImg3.setAttribute('src', './img/sort-down.svg')
     modalLi3.classList.add('modal-li')
     modalLiH22.classList.add('modal-h2')
     modalLiH22.textContent = "Keyinroq ko'rish"
     ModalImg2.classList.add('modal-img')
     ModalImg2.setAttribute('src', './img/clock2.svg')
     modalLi2.classList.add('modal-li')
     modalLiH21.classList.add('modal-h2')
     modalLiH21.textContent = "Navbatga qo'shish"
     ModalImg1.classList.add('modal-img')
     ModalImg1.setAttribute('src', './img/list.svg')
     modalLi1.classList.add('modal-li')
     modalUl.classList.add('modal-ul')
     modal.classList.add('modal')
     modalWrapp.classList.add('modal-wrapper')
     appendElement(modalLi1,ModalImg1,modalLiH21)
     appendElement(modalLi2,ModalImg2,modalLiH22)
     appendElement(modalLi3,ModalImg3,modalLiH23)
     appendElement(modalLi4,ModalImg4,modalLiH24)
     appendElement(modalLi5,ModalImg5,modalLiH25)
     appendElement(modalLi6,ModalImg6,modalLiH26)
     appendElement(modalUl,modalLi1,modalLi2,modalLi3,hr,modalLi4,modalLi5,modalLi6)
     modal.appendChild(modalUl)
     modalWrapp.appendChild(modal)
     threeDotImg.classList.add('threeDot2')
     threeDotImg.setAttribute('src', './img/three-dot.svg')
     threeDotA.classList.add('threeDot')
     threeDotA.setAttribute('href', '#')
     threeDotA.appendChild(threeDotImg)
     korganlar1.classList.add('korganlar')
     korganlar1.textContent = "3 mln ko'rish"
     korganlar2.classList.add('korganlar')
     korganlar2.textContent = "1 oy oldin"
     h2Wrapper.classList.add('h2-wrapper')
     appendElement(h2Wrapper,korganlar1,korganlar2)
     Title.classList.add('title')
     Title.textContent = j.title
     titleWrapper2.classList.add('title-wrapper-2')
     appendElement(titleWrapper2,Title,h2Wrapper)
     capImg.classList.add('cap')
     capImg.setAttribute('src', './img/it.jpg')
     titleWrapp.classList.add('title-wrapper')
     appendElement(titleWrapp,capImg,titleWrapper2,threeDotA)
     iframeWrapper.classList.add('iframe-wrapper')
     iframeWrapper.innerHTML = j.iframe
     iframeImg.classList.add('iframe')
     iframeImg.setAttribute('src' , j.img)
     iframeDiv.classList.add('ifrem-div')
     iframeDiv.appendChild(iframeImg)
     iframeSuperWrapper.classList.add('iframe-super-wrapper')
     appendElement(iframeSuperWrapper,iframeDiv,iframeWrapper)
     newLi.classList.add('items')
     appendElement(newLi,iframeSuperWrapper,titleWrapp,modalWrapp)
     mainItemUl.appendChild(newLi)
    }
 }

liRenderer(dataBase)
playVideo()

/* Search */ 

let searchInp = document.querySelector('.searchInput')
let searchBtn = document.querySelector('.searchButton')
let searchArray = [];

let voiceBtn = document.querySelector('.micrafon-wrapper')
let voiceDedector = window.webkitSpeechRecognition
let voice = new voiceDedector()
voice.lang = "uz-UZ"
voice.continuous = false


voiceBtn.onclick = () => {
    voice.start()

    voice.onspeechend = function (){
        voice.stop()
    }
    voice.onresult = (event) => {
        searchInp.value = event.results[0][0].transcript
    }
}

searchBtn.onclick = () => {
    if(searchInp.value != ''){
        searchArray = []
        let str = searchInp.value.toLowerCase()
        for ( let j of dataBase){
            if(j.title.toLowerCase().includes(str)){
                searchArray.push(j)
            }
        }
        mainItemUl.innerHTML = null
        liRenderer(searchArray)
    }
    else if(searchInp.value == ''){
        mainItemUl.innerHTML = null
        liRenderer(dataBase)
    }
    playVideo()
}

searchInp.onkeyup = (e) => {
      if(searchInp.value == ""){
        mainItemUl.innerHTML = null
        liRenderer(dataBase)
        }
      playVideo()
    }
/* Responsive Search */

let lupe2 = document.querySelector('.lupe2')
let container = document.querySelector('.header-container')
let responsivaSearch = document.querySelector('.responsivaSearch')
let responsiveImg = document.querySelector('.responsiveimg')
let responsivaSearchInput = document.querySelector('.responsivaSearchInput')
let responsiveSearchButton = document.querySelector('.responsiveSearchButton')
let responsiveCheck = false
lupe2.onclick = () => {
    if(!responsiveCheck){
        container.style.display = 'none'
        responsivaSearch.style.display = 'block'
        responsiveCheck = true
    }
}
responsiveSearchButton.onclick = () => {
    if(responsivaSearchInput.value != ''){
        searchArray = []
        let str = responsivaSearchInput.value.toLowerCase()
        for ( let j of dataBase){
            if(j.title.toLowerCase().includes(str)){
                searchArray.push(j)
            }
        }
        mainItemUl.innerHTML = null
        liRenderer(searchArray)
        container.style.display = 'flex'
        responsivaSearch.style.display = 'none'
        responsiveCheck = false
    }
    else if(responsivaSearchInput.value == ''){
        mainItemUl.innerHTML = null
        liRenderer(dataBase)
    }
    playVideo()
        
}
responsiveImg.onclick = () => {
    if(responsiveCheck){
        container.style.display = 'flex'
        responsivaSearch.style.display = 'none'
        responsiveCheck = false
    }
}
body.addEventListener('click', (event) => {
    if(event.target == responsivaSearch && responsiveCheck){
        container.style.display = 'flex'
        responsivaSearch.style.display = 'none'
        responsiveCheck = false
    }
})
responsivaSearchInput.onkeyup = (e) => {
    if(responsivaSearchInput.value == ""){
      mainItemUl.innerHTML = null
      liRenderer(dataBase)
      }
    playVideo()
  }