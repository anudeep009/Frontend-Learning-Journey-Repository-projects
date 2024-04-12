// JavaScript questions
const jsQuestions = [
    {
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Data Object Model",
        "Document Oriented Model",
        "Data Oriented Model",
      ],
      answer: "Document Object Model",
    },
    {
      question: "What is closure in JavaScript?",
      options: [
        "A function that has access to the outer function's variables",
        "A variable that cannot be reassigned",
        "A function declared inside another function",
        "A function that returns another function",
      ],
      answer: "A function that has access to the outer function's variables",
    },
    {
      question: "Which keyword is used to declare variables in JavaScript?",
      options: ["var", "int", "string", "let"],
      answer: "var",
    },
    {
      question: "What is the output of typeof null in JavaScript?",
      options: ["object", "null", "undefined", "string"],
      answer: "object",
    },
    {
      question: "What is the result of 2 + '2' in JavaScript?",
      options: ["4", "'22'", "22", "TypeError"],
      answer: "'22'",
    },
    {
      question: "What does NaN stand for?",
      options: [
        "Not a Number",
        "New Age Network",
        "Non-actionable Notation",
        "None of the above",
      ],
      answer: "Not a Number",
    },
    {
      question:
        "What is the purpose of the 'use strict' directive in JavaScript?",
      options: [
        "To enable strict mode",
        "To define variables with strict scope",
        "To use strict equality comparison",
        "To restrict the use of certain keywords",
      ],
      answer: "To enable strict mode",
    },
    {
      question:
        "Which built-in method returns the calling string value converted to upper case?",
      options: ["toUpperCase()", "toUpper()", "toUpperCaseCase()", "Upper()"],
      answer: "toUpperCase()",
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "The current function",
        "The parent function",
        "The global object",
        "The object that owns the function",
      ],
      answer: "The object that owns the function",
    },
    {
      question: "How do you create a function in JavaScript?",
      options: [
        "function:myFunction()",
        "function myFunction()",
        "function = myFunction()",
        "create function myFunction()",
      ],
      answer: "function myFunction()",
    },
  ];
  
  // Java questions
  const javaQuestions = [
    {
      question: "Which of the following is not a primitive data type in Java?",
      options: ["int", "float", "char", "array"],
      answer: "array",
    },
    {
      question:
        "What is the correct way to declare a variable to store an array in Java?",
      options: [
        "int[] array;",
        "array[] array;",
        "array array[];",
        "int array[];",
      ],
      answer: "int[] array;",
    },
    {
      question:
        "What is the output of the following Java code: System.out.println(5 > 3 && 2 < 4);",
      options: ["true", "false", "SyntaxError", "NullPointerException"],
      answer: "true",
    },
    {
      question: "Which keyword is used to define a class in Java?",
      options: ["class", "Class", "void", "new"],
      answer: "class",
    },
    {
      question: "What is the correct syntax for a single-line comment in Java?",
      options: [
        "// This is a comment",
        "<!-- This is a comment -->",
        "/* This is a comment */",
        "# This is a comment",
      ],
      answer: "// This is a comment",
    },
    {
      question:
        "What is the output of the following Java code: System.out.println(5 + 3 + '8');",
      options: ["'16'", "16", "'38'", "38"],
      answer: "'88'",
    },
    {
      question: "Which of the following is not a valid Java identifier?",
      options: ["my_variable", "$myVar", "MyVar", "_myVar"],
      answer: "my variable",
    },
    {
      question: "Which method is used to read a string from the user in Java?",
      options: ["readString()", "getString()", "nextLine()", "readLine()"],
      answer: "nextLine()",
    },
    {
      question: "What is the result of 10 % 3 in Java?",
      options: ["3", "1", "0", "10"],
      answer: "1",
    },
    {
      question:
        "Which of the following statements is true about inheritance in Java?",
      options: [
        "Java supports multiple inheritance",
        "Java supports hierarchical inheritance",
        "Java does not support inheritance",
        "Java supports hybrid inheritance",
      ],
      answer: "Java supports hierarchical inheritance",
    },
  ];
  
  // Python questions
  const pythonQuestions = [
    {
      question: "What is the output of print(2**3) in Python?",
      options: ["8", "6", "5", "4"],
      answer: "8",
    },
    {
      question: "What is the correct way to create a function in Python?",
      options: [
        "def my_function():",
        "function my_function():",
        "function = my_function():",
        "define my_function():",
      ],
      answer: "def my_function():",
    },
    {
      question: "What is the result of 'hello' + 'world' in Python?",
      options: [
        "'helloworld'",
        "'hello world'",
        "'hello' 'world'",
        "'hello' + ' ' + 'world'",
      ],
      answer: "'hello' + ' ' + 'world'",
    },
    {
      question:
        "Which of the following is the correct way to comment multiple lines in Python?",
      options: [
        "/* This is a comment */",
        "// This is a comment",
        "# This is a comment",
        "''' This is a comment '''",
      ],
      answer: "''' This is a comment '''",
    },
    {
      question: "What will the following code output: print('5' * 3)?",
      options: ["555", "15", "5*3", "TypeError"],
      answer: "555",
    },
    {
      question: "What is the correct syntax for a Python if statement?",
      options: ["if x = 5:", "if x == 5:", "if x equals 5:", "if (x == 5)"],
      answer: "if x == 5:",
    },
    {
      question: "What is the output of the expression 5 / 2 in Python?",
      options: ["2.5", "2", "2.0", "2.25"],
      answer: "2.5",
    },
    {
      question: "Which of the following data types is not supported in Python?",
      options: ["int", "float", "double", "str"],
      answer: "double",
    },
    {
      question: "What is the output of the following code: print(5 // 2)?",
      options: ["2.5", "2", "2.0", "2.25"],
      answer: "2",
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "def", "function", "define"],
      answer: "def",
    },
  ];
  
  let selectedQuestions = [];
  let currentQuestion = 0;
  let score = 0;
  
  const start = document.querySelector(".start");
  start.addEventListener("click", () => {
    const selectedLanguage = document.getElementById("category").value;
    switch (selectedLanguage) {
      case "Javascript":
        selectedQuestions = jsQuestions;
        break;
      case "Java":
        selectedQuestions = javaQuestions;
        break;
      case "Python":
        selectedQuestions = pythonQuestions;
        break;
      default:
        console.error("Unknown language selected");
        return;
    }
  
    const noOfQuestions = parseInt(document.getElementById("num-questions").value);
    if (noOfQuestions <= 0) {
      // console.error("Invalid number of questions");
      return;
    }
  
    const container = document.querySelector(".container");
    displayQuestion(container, noOfQuestions);
  });
  
  function displayQuestion(container, noOfQuestions) {
    if (currentQuestion >= noOfQuestions || currentQuestion >= selectedQuestions.length) {
      // console.log("End of questions reached");
      container.innerHTML = `<p class="scoremsg">Quiz Completed! Your score is ${score}/${noOfQuestions}</p>`;
      return;
    }
  
    const currentQuestionObj = selectedQuestions[currentQuestion];
    if (
      !currentQuestionObj ||
      !currentQuestionObj.options ||
      !currentQuestionObj.answer
    ) {
      // console.error("Question object or its properties are undefined");
      return;
    }
  
    container.innerHTML = `<h2 id="question">${currentQuestionObj.question}</h2>`;
  
    currentQuestionObj.options.forEach((option, index) => {
      container.innerHTML += `<button class="options" data-index="${index}">${option}</button>`;
    });
  
    const optionButtons = document.querySelectorAll(".options");
    optionButtons.forEach((optionButton) => {
      optionButton.addEventListener("click", (event) => {
        const selectedOptionIndex = event.target.getAttribute("data-index");
        const selectedOption = currentQuestionObj.options[selectedOptionIndex];
  
        if (selectedOption === currentQuestionObj.answer) {
          score++;
        }
  
        currentQuestion++;
        displayQuestion(container, noOfQuestions);
      });
    });
  }
  