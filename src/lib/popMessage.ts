import {createApp, h} from 'vue';
import Message from './Message.vue'

export const popMessage = (options) => {
    const {message, msgType, closeDelay} = options;
    let msgContainer = document.getElementById('msgDiv')
    if (msgContainer === null) {
        msgContainer = document.createElement('div')
        msgContainer.id = 'msgDiv'
        document.body.appendChild(msgContainer)
    }
    const div = document.createElement('div');
    msgContainer.insertAdjacentElement('beforeend', div)

    function randomLetter(len) {
        let str = '';
        for (let i = 0; i < len; i++) {
            str += String.fromCharCode(~~(Math.random() * 26 + 65));
        }
        return str;
    }

    const msgId = randomLetter(~~(Math.random() * 10 + 30))
    const app = createApp({
        render() {
            return h(Message, {
                message,
                msgType,
                id: msgId,
            });
        }
    });
    app.mount(div);

    const msgDiv = document.getElementById(String(msgId))
    msgDiv.classList.add(`rich-message-type-${options.msgType}`)
    setTimeout(() => {
        msgDiv.classList.add('message-active')
    }, 0)

    setTimeout(() => {
        msgDiv.classList.remove('message-active')
        msgDiv.ontransitionend = () => {
            app.unmount();
            div.remove();
            if (msgContainer.children.length === 0) {
                msgContainer.remove()
            }
        }
    }, closeDelay * 1);

};