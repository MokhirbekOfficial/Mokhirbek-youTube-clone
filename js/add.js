/* Add video */ 
function addLi () {
    let form = document.querySelector('.admin-wrapper')
    let newIframe = document.querySelector('.inp1')
    let newTitle = document.querySelector('.inp2')
    let newImg = document.querySelector('.inp3')
    form.onsubmit = (event) => {
        event.preventDefault()
        let obj = {
            title: newTitle.value,
            img: newImg.value,
            iframe: newIframe.value
        }
        dataBase.push(obj)
        window.localStorage.setItem('localData', JSON.stringify(dataBase))
        newTitle.value = null
        newImg.value = null
        newIframe.value = null
    }
}
addLi()
