$(document).ready(function() {

    select2_lib('#reclamante', "Selecione o reclamante");
    select2_lib('#reclamada', "Selecione a reclamada");
    select2_lib('#status', "Selecione o status");

    let reclamante   = $('.reclamante').val();
    let reclamada    = $('.reclamada').val();
    let num_processo = $('.num_processo').val();
    let local_vara   = $('#local_vara').val();
    let status       = $('.status').val();
    let observacao   = $('.observacao').val();

    $('.cadastrar-processo').click((e) => {
        console.log(local_vara)
    })

});

function select2_lib(id, placeholder) {
    var descricao = $(id).select2({
        placeholder: placeholder,
        allowClear: true
    });

    return descricao;
}