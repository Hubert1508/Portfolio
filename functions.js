
window.onload = function(e){
  oncontextmenu = function(event){
    event.preventDefault();
  }
}

const buttonMe = document.querySelectorAll("input")[0];

  buttonMe.onclick = function(){
    
    const root = "aboutMe.txt";
    
    ajax(root);

      return true;
    
  }

const buttonContact = document.querySelectorAll("input")[1];

  buttonContact.onclick = function(){
    
    const root = "contact.txt";
    
    ajax(root);

      return true;
    
  }

  const projects = document.querySelectorAll('input')[2];

  projects.onclick = function(){
    
    const root = "link.txt";

    ajax(root);

      return true;
  }


function ajax(addres){

  const textAboutMe = document.querySelectorAll('strong')[0];

  const xhr = new XMLHttpRequest();

    xhr.onload = function(){

      if(this.status===200){

          textAboutMe.innerHTML = this.responseText;

      }
    }

    xhr.open('POST', addres, true);
    xhr.send();
}