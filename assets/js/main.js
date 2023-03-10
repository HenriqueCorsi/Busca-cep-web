function buscaCep(){
    let cep = document.getElementById('cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`

    if(cep.length == 8){
        fetch(url).then(function(response){
            response.json().then(function(data){
                console.log(data)
                exibiInfo(data);
            })
        })
    }else(
        window.alert('CEP inválido')
    )
}

function exibiInfo(dadosCep){
    let info = document.getElementById('info-box');

    info.style.border = "thick solid #11408C";
    info.style.background = "#11408C";
    info.style.color = "#fff";
    info.innerHTML = `<p>Endereço: ${dadosCep.logradouro}</p><br>
                      <p>Bairro: ${dadosCep.bairro}</p><br>
                      <p>Cidade: ${dadosCep.localidade}</p><br>
                      <p>CEP: ${dadosCep.cep}</p><br>
    `;

}