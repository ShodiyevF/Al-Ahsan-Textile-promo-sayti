// const signupForm = document.querySelector('.signup-form')
// const username = document.querySelector('.username')
// const firstname = document.querySelector('.firstname')
// const body = document.querySelector('body')
// const container = document.querySelector('.container')
// const colorText = document.querySelector('.color-text')
  
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(username.value);
//     username.value = ''
// })


// const values = [
//     '0',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f'
// ]

// function getGradient() {
//     let color = '#'
//     for (let i = 0; i < 6; i++) {
//         const randomNumber = Math.trunc(Math.random() * values.length)
//         color += values[randomNumber]
//     }
    
//     return color
// }

// function setGradient() {
//     const color1 = getGradient()
//     const color2 = getGradient()
//     const randomDeg = Math.trunc(Math.random() * 360)
//     const bgColor = `linear-gradient(
//         ${randomDeg}deg,
//         ${color1},
//         ${color2}
//         )`
        
//         body.style.background = bgColor
        
//     }
    
//     setGradient()
    
//     function chiqarish() {
//         console.log(`Kontakt web-sayt ga chiqarildi`);
//         var outputElement = document.getElementById("output");
//         outputElement.innerHTML = `✋${username.value}✋ ✋${firstname.value}✋`;
//       }

//           function handleSubmit(event) {
//       event.preventDefault(); // Prevent page refresh
//       //console.log("Form submitted, page not refreshed.");
//       // Other operations...
//     }

    //boshqa

    const copyMe = document.querySelector('.copyme')
    const copyMe1 = document.querySelector('.copyme1')

    var todoList = [];

    // Load stored todo list from local storage
    var storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
      todoList = JSON.parse(storedTodoList);
    }

    function addTodo() {
      var todoInput = document.getElementById("todoInput");
      var todoText = todoInput.value.trim();

      if (todoText !== "") {
        var todoItem = {
          id: Date.now(),
          text: todoText,
          completed: false
        };

        todoList.push(todoItem);
        saveTodoList(); // Save the updated todo list to local storage
        renderTodoList();

        todoInput.value = "";
      }
    }

    function renderTodoList() {
      var todoListContainer = document.getElementById("todoList");
      todoListContainer.innerHTML = "";

      todoList.forEach(function(todoItem) {
        var todoItemId = "todoItem_" + todoItem.id;

        var todoItemElement = document.createElement("div");
        todoItemElement.classList.add("todo-item");

        var checkboxElement = document.createElement("input");
        checkboxElement.setAttribute("type", "checkbox");
        checkboxElement.setAttribute("id", todoItemId);
        checkboxElement.checked = todoItem.completed;
        checkboxElement.addEventListener("change", function() {
          toggleTodoCompleted(todoItem.id);
        });

        var labelElement = document.createElement("label");
        labelElement.setAttribute("for", todoItemId);
        labelElement.textContent = todoItem.text;

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function() {
          editTodoItem(todoItem.id);
        });

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
          deleteTodoItem(todoItem.id);
        });

        todoItemElement.appendChild(checkboxElement);
        todoItemElement.appendChild(labelElement);
        todoItemElement.appendChild(editButton);
        todoItemElement.appendChild(deleteButton);

        todoListContainer.appendChild(todoItemElement);
      });
    }

    function toggleTodoCompleted(itemId) {
      var todoItem = todoList.find(function(item) {
        return item.id === itemId;
      });

      if (todoItem) {
        todoItem.completed = !todoItem.completed;
        saveTodoList(); // Save the updated todo list to local storage
        renderTodoList();
      }
    }

    function editTodoItem(itemId) {
      var todoItem = todoList.find(function(item) {
        return item.id === itemId;
      });

      if (todoItem) {
        var newText = prompt("Enter the new text for the item:", todoItem.text);

        if (newText !== null && newText.trim() !== "") {
          todoItem.text = newText.trim();
          saveTodoList(); // Save the updated todo list to local storage
          renderTodoList();
        }
      }
    }

    function deleteTodoItem(itemId) {
      var itemIndex = todoList.findIndex(function(item) {
        return item.id === itemId;
      });

      if (itemIndex !== -1) {
        todoList.splice(itemIndex, 1);
        saveTodoList(); // Save the updated todo list to local storage
        renderTodoList();
      }
    }

    function saveTodoList() {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }

    // Initial rendering of the todo list
    renderTodoList();



    copyMe.addEventListener('click', (e) => {
        navigator.clipboard.writeText("+998906271015")
        alert(`Nusxa olindi!`)
    })

    copyMe1.addEventListener('click', (e) => {
        navigator.clipboard.writeText("+998903051412")
        alert(`Nusxa olindi!`)
    })


