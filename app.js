const a = document.querySelector('.ordemA');
const b = document.querySelector('.ordemB');
const c = document.querySelector('.ordemC');
const d = document.querySelector('.ordemD');


const array = [
    { nome: 'Lyvia', idade: 33},
    { nome: 'Renan', idade: 19},
    { nome: 'Monarca', idade: 5},
    { nome: 'Silva', idade: 15},
    { nome: 'Jorge', idade: 20},
];


function ordemA(div, array) {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const th1 = document.createElement('th');
    
    th.innerHTML = 'Nomes'
    th1.innerHTML = 'Idades'
    tr.appendChild(th);
    tr.appendChild(th1);
    div.appendChild(tr);

    for(let value of array) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const td1 = document.createElement('td');

        td.innerText = value.nome;
        td1.innerText += value.idade;
        
        tr.appendChild(td);
        tr.appendChild(td1);
        div.appendChild(tr);

    }

}

function ordemB(div, array) {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const th1 = document.createElement('th');
    
    th.innerHTML = 'Nomes'
    th1.innerHTML = 'Idades'
    tr.appendChild(th);
    tr.appendChild(th1);
    div.appendChild(tr);

    for(let value of array) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const td1 = document.createElement('td');

        td.innerText = value.nome;
        td1.innerText += value.idade;
        
        tr.appendChild(td);
        tr.appendChild(td1);
        div.appendChild(tr);

    }

}

const nomes = array.sort((a, b) => {
    const nameA = a.nome.toUpperCase(); 
    const nameB = b.nome.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    return 0;
});

ordemA(a, nomes);
ordemA(b, nomes.reverse());
ordemA(c, array.sort((a, b) => a.idade - b.idade));
ordemA(d, array.sort((a, b) => a.idade - b.idade).reverse());