function verificarUsuario(usuario){
    return new Promise((resolver, rechazar)=>{
        if (usuario==="admin"){
            resolver('Acceso concedido');
        } else {
            rechazar('Acceso denegado');
        }
    });
};

verificarUsuario('admin')
.then(res=> console.log(res)) 
.catch(err=> console.error(err));

verificarUsuario('Ivan')
.then(res=> console.log(res))
.catch(err=> console.error(err)); 