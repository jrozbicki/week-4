let counter = 0;

document.querySelector(".btn-large").addEventListener("click", () => {
    if(counter<7){
    const newLi = document.createElement("li");
    newLi.setAttribute("class", `single-task task${counter}`);

    const newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("placeholder", "Tytuł zadania...");
    newLi.appendChild(newInput);

    const newA1 = document.createElement("a");
    newA1.setAttribute("class", "waves-effect waves-light btn-small completeBtn");

    const newI1 = document.createElement("i");
    newI1.setAttribute("class", "material-icons left");
    newI1.textContent = "check";
    newA1.appendChild(newI1);
    newLi.appendChild(newA1);

    const newA2 = document.createElement("a");
    newA2.setAttribute("class", "waves-effect waves-light btn-small deleteBtn");

    const newI2 = document.createElement("i");
    newI2.setAttribute("class", "material-icons left");
    newI2.textContent = "clear";
    newA2.appendChild(newI2);
    newLi.appendChild(newA2);

    const ul = document.querySelector("div.bottom-app-container > ul");
    ul.appendChild(newLi);
    counter++;
    }
});

document.querySelector("div.bottom-app-container > ul").addEventListener('click', (e) => {
    if (e.target !== e.currentTarget && e.target.textContent == 'clear') {
        const currentLi = e.target.parentNode.parentNode
        currentLi.parentNode.removeChild(currentLi);
        counter--;
    }
    e.stopPropagation;
}); 






