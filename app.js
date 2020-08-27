/* importar as configuracoes do servidor */
const app = require('./config/server')

// ouvindo a porta 7588 ...
let server = app.listen(7588, function (){
    console.log('CHAT OnLine :) \n port 7588');
});

/* criar uma conexao por websocket */
let io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket){
     console.log('usuario conectou ');

    socket.on('disconnect', function(){
        console.log('usuario desconnectou ')
    });

    socket.on('msgParaServidor', function(data){
            /* para dialogo */
           socket.emit('msgParaCliente',
                  {nome: data.nome, mensagem: data.mensagem
            });

           /* mensagem para todos os usuarios menos o que enviou */
           socket.broadcast.emit('msgParaCliente',
                  {nome: data.nome, mensagem: data.mensagem
            });

           /* para participantes */
        if(parseInt(data.nome_actualizado_partipantes) == 0){
           socket.emit('participantesParaCliente',
                  {nome: data.nome});

           /* mensagem para todos os usuarios menos o que enviou */
           socket.broadcast.emit('participantesParaCliente',
                  {nome: data.nome});

     }

    });

})

