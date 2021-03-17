const websocketDemo = () => {

    const change = () => {
    const url = 'ws://localhost:5000/add/';
    const connection = new WebSocket(url);
    connection.onopen = () => {
        connection.send('hey sweta');
    }
    connection.onerror = (error) => {
        console.log(`websocket error: ${error}`)
    }
    connection.onmessage = (e) => {
        console.log(e.data);
    }
}
return(
    <div>
        <button onClick={change}>hello</button>
    </div>
);
}
export default websocketDemo;