module.exports = function(app) {
    app.get("/promocoes/form",function(req,res){
        var connection = app.infra.connectionFactory();
        var produtos = new app.infra.ProdutosDAO(connection);

        produtos.lista(function(erros,resultados,fields){
            res.render('promocoes/form',{lista:resultados});
        });
        connection.end();
    });
    app.post("/promocoes",function(req,res){
        var promocao = req.body;
        app.get('io').emit('novaPromocao',promocao);
        res.redirect('/promocoes/form');
    })
}