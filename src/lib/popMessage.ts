import {createApp, h, ref} from 'vue';
import Message from './Message.vue'

export const popMessage = (options) => {
    const {message, msgType, closeDelay} = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const close = () => {
        app.unmount();
        div.remove();
    };
    const msgId = Math.floor(Math.random() * 100)
    const app = createApp({
        render() {
            return h(Message, {
                visible: true,
                message,
                msgType,
                id: msgId,
            });
        }
    });
    app.mount(div);

    const msgDiv = document.getElementById(String(msgId))
    setTimeout(() => {
        msgDiv.classList.add('message-active')
    }, 0)

    const msgVanish = new Promise((resolve, reject) => {
        setTimeout(() => {
            msgDiv.classList.remove('message-active')
            setTimeout(() => {
                resolve(() => {
                })
            }, 250)
        }, closeDelay * 1);

    })

    Promise.all([msgVanish]).then(close)


};