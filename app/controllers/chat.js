module.exports.inicialChat = function(application, req, res){

	let dadosForm = req.body;

	req.assert('nome', 'Nome ou apelido é obrigatorio').notEmpty();
	req.assert('nome', 'Nome ou apelido deve conter entre 3 a 15 caracteres ').len(3,15);

	let erros = req.validationErrors();
	if(erros){
		res.render('index',{validacao:erros});
		return;
	}

	application.get('io').emit('msgParaCliente', {nome: dadosForm.nome, mensagem: 'acabou de entrar no chat'});
	/* renderiza para a pagina char.ejs */
	res.render('chat', {dadosForm:dadosForm});

}