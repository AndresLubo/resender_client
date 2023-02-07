const { io } = require("socket.io-client");
const config = require('./config.json')


const socketClient = io(config.socket_namespaces.resender);

const agente = '20227';


// socketClient.emit("resender:update-script", {
//   "msg-type": "update-script",
//   "agent-id": agente,
//   "content": `<h2>Este es el guio para el cliente andres</h2>`,
// });


// socketClient.emit('resender:update-call', {
//   "msg-type": "update-call",
//   "agent-id": agente,
//   "call-id": '1583162491.0',
//   "content": `<h2>Esta es la información de la llamada para el agente ${agente}</h2>`
// })


// socketClient.emit('resender:start-time', {'msg-type': 'start-time', 'agent-id': agente, 'timer-label': 'Ocupado'})


// socketClient.emit('resender:display-customer-data', {'msg-type': 'display-customer-data', 'agent-id': agente, 'data': {'cliente-id': 'klajkndalksdnassnd', 'cliente-nombre': 'andres felipe Lubo Carracedo', 'cliente-email': 'example@outlook.com', 'cliente-telefono': '30298927'}})


// socketClient.emit('resender:open-url', {'msg-type': 'open-url', 'agent-id': agente, 'URL': 'https://www.youtube.com/'})
