$(document).ready(() => {
    if(sessionStorage.getItem('token') == null) window.location.href = 'index.html'

    $('.close-app').click((e) => {
        sessionStorage.removeItem('token')
    })
})