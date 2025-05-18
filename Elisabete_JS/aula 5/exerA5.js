/*
    // Exercício 1 

    //criar um paragrafo que irá receber o nosso text alterado
    const paragraph = document.createElement("p");
    //criar variáveis para os botoes (tinha feito na minha tentativa)
    const btnMore = document.getElementById("more");
    const btnLess = document.getElementById("less");


    //adicionar ao doc o nosso paragrafo que foi criado, para podermos ver na página o que criámos.
    document.body.appendChild(paragraph);
    //definir o contador
    let counter = 0;
    //adicionar o contador ao paragrafo que criamos
    paragraph.innerText = `${counter}`;


    //adicionar Eventos aos botões(fiz na minha tentativa, mas em vez de colocar uma função coloquei parte das instruções que deveriam estar na função)
    btnMore.addEventListener("click", countMore);
    btnLess.addEventListener("click", countLess);

    //criar os eventos para cada botão

    function countMore() {
        counter++; //incrementação de +1;
        paragraph.innerText = `${counter}`;//instrução para o paragrafo 
    }

    function countLess() {
        if (counter <= 0) { //para impedir que o nr chegue abaixo de 0
            return
        }
        counter--;
        paragraph.innerText = `${counter}`;
    }


    //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    // Exercício 2
    //preciso de criar uma lista não ordenada que receberá as tarefas, e adicional isso ao HTML
    const taskList = document.createElement("ul")
    document.body.appendChild(taskList);

    //criar um array com as tarefas, e fazer com que as tarefas surjam na lista não ordenada
    let tarefas = [];
    //taskList.innerText = `${tarefas}`;

    //criar variáveis para os botões:
    const btnAdd = document.getElementById("add");
    const btnRemove = document.getElementById("remove");
    const btnDeleteDone = document.getElementById("deleteDone");

    //adicionar ação aos botões:
    btnAdd.addEventListener("click", addTask);
    btnRemove.addEventListener("dblclick", removeTask);
    btnDeleteDone.addEventListener("click", deleteDone);


    //fazer as funções dos botões:
    //para adicionar uma tarefa preciso de um prompt, mas quero que só apareça quando carrego no botão Add.
    //quero também que as coisas adicionadas surjam como li's na lista ul
    function addTask() {
        const newTask = prompt("Adiciona uma tarefa:");
        if (newTask) {
            tarefas.push(newTask);

            const li = document.createElement('li');
            //chat gpt sugeriu uma coisa, irei adaptar ao meu código, se bem que no meu raciocinio,criei isto:
            li.innerText = tarefas;
            //mas falta que isso seja colocado numa li, tenho que criar uma li antes, tal como criei a ul
            taskList.appendChild(li);
            updateTaskList();

        }
    }

    //notas: não aparece nada na página. Vendo melhor a resposta do chatGPT ele fala em uma função que atualiza a lista e mostra as mudanças na página; vejo que existe uma linha de código que liga a taskList ao li que foi criado dentro da função;
    //não está a listar como eu quero: 
    //task 1
    //task 1, task2
    //...
    //como elimino esta incrementação?
    //.push adiciona um elemento ao fim do array, é isso que está a ser reproduzido
    //o chatgpt usou foreach(), para cada push que eu faço, deveria ser adicionado ao html um novo li com o elemento que forneci
    //consultei vários AIs, e todos referiram que preciso de atualizar a lista de modo a poder ver as alterações na webpage - actualizar o conteudo que acrescento é um procedimento BÁSICO de JS.
    // o copilot indicou a função para atualizar a lista, copiei-a.
    //na página continua a incrementar os elementos aos LI, quando adiciono e quando apago, mas já não considera prompts vazias.
    //notei tambem que estou a registar na lista TUDO o que faço, incluindo quando apago coisas o facto de remover elementos surge retratado num novo li
    //não é isto que quero


    //agora para o botão de apagar:
    //codigo do copilot
    function removeTask() {
        if (tarefas.length > 0) {
            tarefas.pop(); // Remove the last task from the array

            // Remove the last `<li>` from the task list
            taskList.removeChild(taskList.lastChild);
            updateTaskList();

        }
    }
    //código do copilot faz mesmo o que queria, apaga a li, não regista que apagou o ultimo elemento.

    //função para atualizar a lista conforme as minhas alterações:
    //código do copilot:
    //copilot indicou para colocar esta função dentro da função dos botoes...
    function updateTaskList() {
        // Clear the current list by removing all child nodes
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        } //Clear the List: The while loop removes all child nodes of taskList one by one until it is empty.

        // Rebuild the list using a standard for loop
        for (let i = 0; i < tarefas.length; i++) {
            const li = document.createElement('li');
            li.innerText = tarefas[i]; //i é index

            // Create a checkbox button (by copilot)
            const checkButton = document.createElement('input'); //criar um input
            checkButton.type = 'checkbox';
            checkButton.name = 'taskStatus'; // Ensures only one can be selected at a time
            //checkButton.value = i; // Optional: store the index of the task

            // Add an event listener to mark the task as done
            checkButton.addEventListener('change', () => { //arrow function, forma mais concisa de escrever uma função; neste caso a função é o que está escrito aqui em baixo, o line-through...
                if (checkButton.checked) {
                    li.style.textDecoration = 'line-through'; // Strike-through the text
                    tasksDoneCount++; // Increment the counter
                } else {
                    li.style.textDecoration = 'none'; // Remove strike-through
                    tasksDoneCount--; // Decrement the counter
                }
                updateCounter(); // Update the counter display
            });

            // Append the chekcbox button to the list item
            li.appendChild(checkButton);

            taskList.appendChild(li);

        }
    }
    //simplesmente adicionar não podia ser, porque tenho linhas de código dentro das funções, e está a repetir-se, tenho que "apagar" as linhas que estão a mais dentro das funções dos botões e deixar apenas as da atualização da taskList;
    //essa não é a solução: eu não percebo o while e não queria aplica-lo, mas ele é  chave para resolver o problema.

    //até aqui tenho: adicionar tarefa; remover tarefa com dblclick; dispor as tarefas em lista.
    //falta marcar tarefas como concluídas; um botão pra limpar tarefas; e um contador de tarefas para concluir.

    //contador de tarefas feitas
    const counterTasks = document.createElement("p")
    document.body.appendChild(counterTasks);
    //(let tasksDoneCount = tarefas.length;) fiz assim, não está certo, mas o raciocinio estava perto;
    //copilot
    let tasksDoneCount = 0;
    //há alterações à função de atualização

    // Function to update the counter display
    function updateCounter() {
        counterTasks.innerText = `Tarefas concluídas: ${tasksDoneCount}`;
    }


    //botão para limpar tarefas feitas
    //codigo do copilot
    function deleteDone() {
        const listItems = Array.from(taskList.children); // Access the first child element (checkbox)

        // Loop through the list in reverse to safely remove items
        for (let i = listItems.length - 1; i >= 0; i--) {
            const li = listItems[i]; // Get the current <li>
            const checkButton = li.firstElementChild; // Access the first child element (checkbox)

            if (checkButton && checkButton.type === 'checkbox' && checkButton.checked) {
                // Remove the task from the tarefas array
                tarefas.splice(i, 1); // Remove the task at index i
                // Remove the <li> from the DOM
                taskList.removeChild(li);
            }
        }

        // Reset the tasksDoneCount and update the counter
        tasksDoneCount = 0;
        updateCounter();
    }

    //10/05/2025 - exercício feito, graças ao copilot, o meu racíocinio apenas deu para algumas (muito poucas) partes

*/
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Exercício 3

//criar uma pergunta, num parágrafo, e adiciona-lo à página
const quastion = document.createElement("p");
quastion.innerText = "In a fight, who would win?"
document.body.appendChild(quastion);

//criar a base para mostrar as respostas, uma lista não ordenada
const quiz = document.createElement("ul");
document.body.appendChild(quiz);

//criar um array com as respostas, e fazer com que as respostas surjam na lista não ordenada
let respostasPergunta1 = ["Rock", "Paper", "Scissors", "My head"];

//quiz.innerText = `${respostasPergunta1}`;//este codigo assim mostra na página as respostas mas numa unica linha

//colocar as respostas em lista, li, e com botoes tipo rádio
for (let i = 0; i < respostasPergunta1.length; i++) {
    const li = document.createElement('li');
    //li.innerText = respostasPergunta1[i]; //i é index - este código estava a mostras as respostas
    //até aqui não estava mal, mas faltava o seguinte:
    const radioButton = document.createElement('input'); // Create a radio button
    const label = document.createElement('label'); // Create a label for the radio button

    // Configure the radio button
    radioButton.type = 'radio';
    radioButton.name = 'quizAnswer'; // Group all radio buttons under the same name
    radioButton.value = respostasPergunta1[i]; // Set the value to the current answer

    // Configure the label
    label.innerText = respostasPergunta1[i]; // Set the label text
    label.htmlFor = `answer-${i}`; // Link the label to the radio button
    radioButton.id = `answer-${i}`; // Set the ID for the radio button

    // Append the radio button and label to the list item
    li.appendChild(radioButton);
    li.appendChild(label);

    // Append the list item to the <ul>
    quiz.appendChild(li);


};

// Add an event listener to check the selected answer when the user clicks a button
const checkAnswerButton = document.createElement("button");
checkAnswerButton.innerText = "Check Answer";
document.body.appendChild(checkAnswerButton);

checkAnswerButton.addEventListener("click", () => {
    // Get all radio buttons
    const radioButtons = document.getElementsByName("quizAnswer");

    // Loop through the radio buttons to find the selected one
    let selectedAnswer = null;
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedAnswer = radioButtons[i].value; // Get the value of the selected radio button
            break;
        }
    }

    // Check the selected answer and display the appropriate alert
    if (selectedAnswer === "Rock") {
        alert("You win, obviously!");
    } else if (selectedAnswer === "Paper") {
        alert("Really? Try again.");
    } else if (selectedAnswer === "Scissors") {
        alert("If you stab hard enough... but, what about rust, what if this is a rusty scissor, it will crumble in your hands, right? Try again.");
    } else if (selectedAnswer === "My head") {
        alert("No, not really. All of the above could terminate my head. Try again.");
    } else {
        alert("Please select an answer before checking!");
    }
});
/*copilot's Explanation of Fixes
Create a Button to Check the Answer:

A new button (Check Answer) is added to allow the user to submit their answer.
Get All Radio Buttons:

Use document.getElementsByName("quizAnswer") to get all radio buttons with the name quizAnswer.
Find the Selected Radio Button:

Loop through the radio buttons and check if one is checked. If found, store its value in the selectedAnswer variable.
Compare the Selected Answer:

Use if conditions to compare the selectedAnswer with the correct or incorrect answers and display the appropriate alert.
Handle No Selection:

If no radio button is selected (selectedAnswer is null), display an alert asking the user to select an answer.*/




//as minhas condições estavam bem feitas, faltou tudo o resto












/*
if (respostasPergunta1[0]) {
    alert = "you win, obviously";
} else if (respostasPergunta1[1]) {
    alert = "really? try again";
} else if (respostasPergunta1[2]) {
    alert = "if you stab hard enough... but, what about rust? try again"
} else if (respostasPergunta1[3]) {
    alert = "no, not really, all of the above could terminate my head, try again"
};*/





//criar condições para definir a resposta certa e congratular pelo acerto, ou pedir para jogar outra vez, no caso de falhar;

