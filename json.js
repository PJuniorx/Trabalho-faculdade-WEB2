var msg = "";
var codigo = "";

function salvarIdLinha(obj){
    codigo = "";
    codigo = obj;
}

function sendJsonConsultar(tela){
	var msg =  "";
	msg = tela+'=';
    
    $.ajax({
        type       : "POST",
        url        : "http://localhost/trabalho/consultar.php",
        data       : msg,
        crossDomain: true,
        cache: false,
        success    : function(data) {
            console.log("JSON enviado com sucesso!");
            if(data != "null" && data != "") {
                objJson = $.parseJSON(data);
                
                $.each(objJson, function(i, field){
					
					$("#result").append("<tr> <td name='id' > " + field.Codigo + " </td> <td name='nome'> " + field.Nome + " </td>  <td name='dtNasc'> " + field.Data_Nascimento + " </td> "
                    + " <td name='salario'> " + field.Salario + " </td> "
					+ " <td>  <button class='add' title='Novo' data-toggle='tooltip'><i class='material-icons'>&#xE03B;</i></button> "
					+ " <a class='edit' title='Editar' onclick='salvarIdLinha(" + field.Codigo + ")' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a> " 
					+ " <button class='delete' title='Apagar' onclick='deletar(" + field.Codigo + ")' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></button> </td> </tr>"); 
                });
				
				$('#table_id').DataTable();
				
            } else{
                console.log("Lista Vazia");
            }
        },
        error      : function() {
            console.log("Erro ao Consultar!");               
        }
    });  
}

function sendJsonDeletar(obj, tela){
    msg = "";

    msg = "id=" + obj +"&";
    msg += tela+"=";

    $.ajax({
        type       : "POST",
        url        : "http://localhost/trabalho/deletar.php",
        data       : msg,
        crossDomain: true,
        cache      : false,
        success    : function(data) {
            console.log("JSON enviado com sucesso!");
            if(data !="" && data != "null") {
                alert(data);
            } else{
                console.error("Erro ao Deletar!");
            }
        },
        error      : function() {
            console.error("Erro ao enviar JSON!");              
        }
    });  
}

function sendJsonIncluir(obj, tela){
    msg = "";
    oForm = obj;
    showFormData(oForm, tela);

    $.ajax({
        type       : "POST",
        url        : "http://localhost/trabalho/incluir.php",
        data       : msg,
        crossDomain: true,
        cache      : false,
        success    : function(data) {
            console.log("JSON enviado com sucesso!");
			
            if(data != "" && data != "null") {
				
				alert(data);
            } else{
                console.error("Erro ao Incluir!");
            }
        },
        error      : function() {
            console.error("Erro ao enviar JSON!");              
        }
    });  
}

function sendJsonAlterar(obj, tela){
    msg = "";

    msg = obj;
    msg += tela+"=";

    $.ajax({
        type       : "POST",
        url        : "http://localhost/trabalho/editar.php",
        data       : msg,
        crossDomain: true,
        cache      : false,
        success    : function(data) {
            console.log("JSON enviado com sucesso!");
            if(data !="" && data != "null") {
                
                alert(data);
            } else{
                console.error("Erro ao Alterar!");
            }
        },
        error      : function() {
            console.error("Erro ao enviar JSON!");              
        }
    });  
}

function showFormData(oForm, tela) {
    for (i = 0; i < oForm.length, oForm.elements[i].type !== 'submit'; i++) {
        if(oForm.elements[i].value != null && oForm.elements[i].value != '') {
            if(oForm.elements[i].id != undefined && oForm.elements[i].id != "") {
                msg += oForm.elements[i].id + "=";
                msg += oForm.elements[i].value + "&";
            }
        }
    }
    msg += tela+"=";
}