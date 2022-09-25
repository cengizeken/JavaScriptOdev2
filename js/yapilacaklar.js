let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let ulDOM = document.getElementsByTagName("li");
//let successToastBodyDOM = document.querySelector("#successToastBody");

for (let i = 0; i < ulDOM.length; i++) {
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = removeButton;
  ulDOM[i].append(closeButton);
  ulDOM[i].onclick = check;
}

btnDOM.addEventListener('click', elemanEkle)

function check() {
  this.classList.toggle("checked");
}

function removeButton() {
  //successToastBodyDOM.innerHTML = "Listeden Çıkarıldı";
  //console.log(successToastBodyDOM.innerHTML);
  
  this.parentElement.remove();
  //$(".success").toast("show");
  //console.log("removed");
 //successToastBodyDOM.innerHTML = "Listeye eklendi.";
  
  //$(".success").toast("show");
}

function elemanEkle() {

  if (taskDOM.value == "") {
    //successToastBodyDOM.innerHTML = "Listeden Çıkarıldı";
    //console.log(successToastBodyDOM.innerHTML);
    $(".error").toast("show"); 
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    taskDOM.value = "";

    liDOM.onclick = this.check;

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;

    liDOM.append(closeButton);
    listDOM.append(liDOM);
    taskDOM.value = ("");
    //successToastBodyDOM.innerHTML = "Listeye eklendi.";
  }
}