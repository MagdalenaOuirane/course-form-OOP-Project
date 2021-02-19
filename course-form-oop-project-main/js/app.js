// es6 class

class Customer {
  constructor(customerName, course, author) {
    this.customerName = customerName;
    this.course = course;
    this.author = author;
  }
}

// Display class : handle UI tasks

class Display {
  constructor() {
    //Display list

    this.name = document.getElementById("name");
    this.course = document.getElementById("course");
    this.author = document.getElementById("author");
    this.customersList = document.querySelector(".customer-list");
  }

  addCustomersToList(customer) {
    const random = this.getRandom();

    const div = document.createElement("div");
    console.log(div);
    div.classList.add("col-11", "mx-auto", "col-md-6", "my-3", "col-lg-4");
    div.innerHTML = `<div class="card text-left">
    img src="./img/cust-${random}.jpg" class="card-img-top" alt="">
         <div class="card-body">
          <!-- customer name -->
          <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name : ${customer.customerName}</span><span id="customer-name"></span></h6>
          <!-- end of customer name -->
          <!-- customer name -->
          <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course : ${customer.course}</span><span id="customer-course">
          
           </span></h6>
          <!-- end of customer name -->
          <!-- customer name -->
          <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author : ${customer.author}</span><span id="course-author"></span></h6>
          <!-- end of customer name -->
         </div>
        </div>`;
    this.customersList.appendChild(div);
  }

  getRandom() {
    let random = Math.floor(Math.random() * 5 + 1);
    return random;
  }
}

// event add customer on submit

document.querySelector("#customer-form").addEventListener("submit", (e) => {
  e.preventDefault();

  //get Form values
  const customerName = document.querySelector(".name").value;
  const courseForm = document.querySelector(".course").value;
  const authorForm = document.querySelector(".author").value;

  // Instatiate course object

  const customer = new Customer(customerName, courseForm, authorForm);

  console.log(customer);

  // Add
  const ui = new Display();

  ui.addCustomersToList(customer);
});
