import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { CHAT_SERVICE_URL } from 'utils/constants/config';



let _client = null;
const _subscriptions = new Map();;
let _isConnected = false;
let _retryCount = 0;
let _timeoutId;
const _getRetryInterval = (count) => {
    return 1000 * count;
}

//? Create stomp client
const _initialize = () => {
    _client = Stomp.over(new SockJS(CHAT_SERVICE_URL))

}

const _cleanUp = () => {
    _isConnected = false;
    _retryCount = 0;
    _subscriptions.clear()
}

const _subscribe = (topic) => {
    if (!_subscriptions.has(topic)) {
        console.log("subscribe")
        let sub = _client.subscribe(topic, (msg) => {
            console.log(msg)
        })
        _subscriptions.set(topic, sub)
    }
}

const _unsubscribe = (topic) => {
    let sub = _subscriptions.get(topic)
    sub.unsubscribe()
    _subscriptions.delete(topic)
}


const _connect = () => {
    _initialize();
    _client.connect(
        //toDO get jwt header
        {},
        _connectHandler,
        _errorHandler
    )
}
// handle successful connect to wsServer
const _connectHandler = () => {
    _isConnected = true;
    _subscribe("/chat/monitor");
}
// handle connection error to wsServer
const _errorHandler = (e) => {
    if (_isConnected) {
        _cleanUp();
        console.log("disconnected")
    }
    _timeoutId = setTimeout(_connect(), _getRetryInterval(_retryCount++))
}

const startChat = () => {
    if (!_isConnected) {
        _connect()
    }
}
const sendTo = (msg) => {
    if (_isConnected) {
        let room="/chat/monitor";
        console.log(JSON.stringify(msg));
        _client.send(room, {}, JSON.stringify(msg));  
    }
    console.log("error")
}

const chatService = {
    startChat, sendTo
};

export default chatService;