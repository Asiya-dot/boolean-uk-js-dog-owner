const dogListEl = document.querySelector(".dog-list")
const dogSectionEl = document.querySelector(".main_dog-section")
const addDogListEl = document.querySelector(".dog-list_button--add")

// create a single list item
 function createDoListitem (dog){
     // li class ="dogs_list_button">Mr Bonkers</li>
     const liEl = documen.createElement("li");
     liEl.setAttribute("class","dogs-list_button")
     liEl.innerText = dog.name;
     dogListEl.append(liEl)
     //Eventlistener
     liEl.addEventListener("click",function(){
         //if ([1,2,3].includes(dogs.id)) alert("Woo Woo!")
         dogSectionEl.innerText ="";
         renderDog(dog);
     });
     
 }
 // do this for every dog
 function createDoListitems(dogs){
     for(const dog of dogs){
         createDoListitem(dog)
     }

 }
  function renderDog(dog){
      dogSectionEl.innerText ="";
      const titleEL = document.createElement("h2");

      nameLabelEl.setAttribute("for","name");
      nameLabelEl.innerText = "Dog's name";

      const nameinputEl = document.createElement("input");
      nameinputEl.setAttribute("type","text")
      nameinputEl.setAttribute("name","name")
      nameinputEl.setAttribute("required", true)
      
      const imageLabelEl = document.createElement("label")
      imageLabelEl.setAttribute("for", "image")
      imageLabelEl.innerHTML="Dog's picture"

      const imageinputEl = document.createElement("input")
      imageinputEl.setAttribute("type","url")
      imageinputEl.setAttribute("id","image")
      imageinputEl.setAttribute("name","image")
      imageinputEl.setAttribute("required",true)

      const bioLabelEl = document.createElement("label");
  bioLabelEl.setAttribute("for", "bio");
  bioLabelEl.innerText = "Dog's bio";

  const bioTextareaEl = document.createElement("textarea");
  bioTextareaEl.setAttribute("rows", "5");
  bioTextareaEl.setAttribute("id", "bio");
  bioTextareaEl.setAttribute("name", "bio");
  bioTextareaEl.setAttribute("required", true);

  const submitBtnEl = document.createElement("input");
  submitBtnEl.setAttribute("type", "submit");
  submitBtnEl.setAttribute("class", "form__button");
  submitBtnEl.setAttribute("id", "submit");
  submitBtnEl.setAttribute("name", "submit");
  submitBtnEl.setAttribute("value", "Let's add a dog!");

  formEl.append(
    nameLabelEl,
    nameInputEl,
    imageLabelEl,
    imageInputEl,
    bioLabelEl,
    bioTextareaEl,
    submitBtnEl
  );

  dogSectionEl.append(formTitleEl, formEl);
  }
createDogListitems(data[2]);

// We create individual components here
