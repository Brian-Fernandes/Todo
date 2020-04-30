function create() {
    // Valor de text que estava escrito no input
    let text_todo = document.querySelector("#todo").value;

    if(text_todo.length == 0) {
        alert("Nenhuma mensagem para adicionar")
    }else {
        // Achando o elemento HTML 'ul'
        let ul_form = document.querySelector("#ul_form");

        // Achando o elemento HTML 'li'
        let liCreate = document.createElement('li'); 
        //Style dos LI's

        liCreate.style.fontSize = '20px';
        liCreate.style.fontFamily = 'Courier';
        liCreate.style.color = 'white';

        // Coloquei o 'li' abaixo do 'ul'
        ul_form.appendChild(liCreate);

        // innerText vai escrever na variavel Text_todo
        liCreate.innerText = text_todo;
    }

}