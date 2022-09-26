function Calcular(){
    var NumberText = document.getElementById('NumberTxt');
    var num = Number(NumberText.value);

    var Pradiv = document.getElementById('NumberList')

    Pradiv.innerHTML = `` //limpa tela

    var cont = 0

    var nbb = document.getElementById('numeroCard')
    nbb.innerHTML = `?????`


    if(NumberText.value.length >= 9){
        NumberList.innerHTML += `Valor muito alto pra inserir no cartão`;
    }else{
        if(NumberText.value.length == 0){
            // window.alert('Digite o número')
            NumberList.innerHTML += `Digite algum número`;
        }else{
            while(cont < 11){
                var R = Number(num * cont)
                NumberList.innerHTML += `<li> <b>${num}</b> x <b>${cont}</b> = <b>${R}</b> </li>`
                cont ++
            }
        
        }
        nbb.innerHTML = `${num}`
    }

    //ajusta o número do card

    var QuantNumeros = NumberText.value.length
    switch(QuantNumeros){
        case 1:
            nbb.style.right = "58%";
            break;
        case 2:
            nbb.style.right = "56%";
            break;
        case 3:
            nbb.style.right = "54%";
            break;
        case 4:
            nbb.style.right = "52%";
            break;
        case 5:
            nbb.style.right = "50%";
            break;
        case 6:
            nbb.style.right = "49%";
            nbb.style.fontSize = "14px";
            break;
        case 7:
            nbb.style.right = "48%";
            nbb.style.fontSize = "14px";
            break;

    }
    
}
