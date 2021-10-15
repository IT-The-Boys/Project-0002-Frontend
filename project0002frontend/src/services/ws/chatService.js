import { WS_BASE_URL } from "utils/constants/config";

// WebSocketClient server subscribers
let subscribers = [];
// WebSocket Server variable
let ws;
const messageHandler = (e) => {
    // parse WebSocket event data
    const messageList = JSON.parse(e.data);
    // pass data to service subscribers
    subscribers.forEach(s => s(messageList));
}
const closeHandler = () => {
    // try to reconnect to WebSocket endpoint
    setTimeout(createChannel, 3000)
}

const createChannel = () => {
    // close existing WebSocket channel
    ws?.removeEventListener("close", closeHandler);
    ws?.close();
    // create new WebSocket channel
    ws = new WebSocket(WS_BASE_URL)
}

const chatService = {
    // subscribeHandler function to subscribe to WebSocket service
    subscribeHandler(callback) {
        // add new subscriber to service
        subscribers.push(callback);
        //return subscriber function for unsubscribe
        return () => {
            // unsubscribe from WebSocket service
            subscribers = subscribers.filter(s=> s!==callback)
        }
    },
    unsubscribeHandler (callback){
        subscribers = subscribers.filter(s=> s!==callback)
    }
}

export default chatService
