$(document).ready(function() {

    $('.button-submit').click(function(e) {

        e.preventDefault();

        let cpf   = $('.cpf').val();
        let senha = $('.senha').val();

        // define padrão para validar se o usuario esta tentando implementar dados maliciosos com aspas e espaço
        const Pattern = /[\'\"\s]/g;

        if (cpf == '' || senha == '') {

            Swal.fire(
                'Digital Jus',
                'Obrigatório preencher os dados cadastrados',
                'warning'
            )

            return;
        }
      
        if (Pattern.test(senha)) {
           
            Swal.fire(
                'Digital Jus',
                'E-mail ou Senha Inválido',
                'warning'
            )

            return;
        }

        if (senha.length < 6 || senha.length > 15) {

            Swal.fire(
                'Digital Jus',
                'E-mail ou Senha Inválido',
                'error'
            )

            return;
        }

        HandleFetch('http://127.0.0.1:8000/api/authentication', 'POST', {cpf: cpf, password: senha})

    })
})