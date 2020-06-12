const socket = io('http://192.168.1.167:3000')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')



socket.on('chat-message', data => {
    console.log("query: " + data);
    $.ajax({
        url: "https://api.unsplash.com/photos/random?query=" + data + "&client_id=3hpibUH124aZ9ZaJYSKkgoZ0UNvyFvefXaQdU3N9JS0",
        success: function (whatyougot) {
            document.getElementById("body").style.backgroundImage = "url('" + whatyougot.urls.raw + "')";
        }
    })

})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    socket.emit('send-chat-message', message)
    messageInput.value = ''

})

function host() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("body").style.justifyContent = "center";

}

function client() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("send-container").style.display = "block";
    document.getElementById("send-button").style.display = "none";
}