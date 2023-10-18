function HandleFetch(url, type, dados = null) {

    $.ajax({
        url : url,
        type : type,
        data : dados,
        beforeSend : function(xhr){
            // alert('carregando')
        },
        success : function(response, textStatus, jqXHR){
            console.group('SUCCESS');
                
                const token = response.token

                if (token) {
                    sessionStorage.setItem('token', token)

                    Swal.fire(
                        'Portal Jus',
                        response.message,
                        'success'
                    )
                }

                setTimeout(() => {
                    window.location.href = 'dashboard.html'
                }, 2000);


            console.groupEnd();       
        },
        error : function(jqXHR, textStatus, errorThrow){
            console.group('ERROR');
                if(!jqXHR.responseJSON.status){
                    Swal.fire(
                        'Portal Jus',
                        jqXHR.responseJSON.message,
                        'error'
                    )
                }  
            console.groupEnd();
        },
        complete : function(jqXHR, textStatus){
            console.group('COMPLETE');
            console.groupEnd();
        },
    });
}