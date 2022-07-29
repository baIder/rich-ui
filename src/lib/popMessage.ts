import {createApp, h} from 'vue';
import Message from './Message.vue'

export const popMessage = (options) => {
    const {message, msgType, closeDelay} = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const close = () => {
        app.unmount();
        div.remove();
    };
    const app = createApp({
        render() {
            return h(Message, {
                visible: true,
                message,
                msgType,
                closeDelay,
            });
        }
    });
    app.mount(div);

    setTimeout(() => {
        close();
    }, closeDelay * 1);
};