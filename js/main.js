const { createApp } = Vue

  createApp({
        data() {
            return {
                message: 'Hi i am angelo and vue is awesome',
                url: 'img/vue-js-methods2.png',
                immagine:'immagine',
                color:'font_color'
            }
        }
    }).mount('#app')