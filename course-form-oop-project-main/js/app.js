// es5 constructor function

function getElement(selection) {
  const element = document.querySelector(selection);
  console.log(element);

  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Display(element, value) {
  
// customerForm list object elements
this.divs = element.querySelectorAll('.input-group');
this.courseNameValue = element.querySelector('.name');
this.courseFormValue = element.querySelector('.course');
this.authorFormValue = element.querySelector('.author')
  this.submitBtn = element.querySelector(".submitBtn");
  
  
  //customer List object elements

  this.list = element.querySelector(".card-img-top");
  console.log(this.list);

  this.name = element.querySelector("#customer-name");
  this.courseName = element.querySelector("#customer-course");
  this.author = element.querySelector("#course-author");
// bind functions
this.addNewElement = this.addNewElement.bind(this);
  // add event listener
  this.submitBtn.addEventListener('click', this.addNewElement)
}


//prototype
Display.prototype.addNewElement = function(e) {
  e.preventDefault();
console.log('This:',this)
console.log('add New Element')
}

const customerForm = new Display(getElement("#customer-form"));
const customerList = new Display(getElement(".customer-list"));
console.log(customerForm);
console.log(customerList);
