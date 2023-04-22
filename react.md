A virtual DOM (Document Object Model) is a concept used in web development to optimize the performance of dynamic web applications.

The DOM is a tree-like structure that represents the HTML elements of a web page. When a user interacts with a web application, the browser updates the DOM to reflect the changes. However, updating the DOM can be slow and resource-intensive, especially when dealing with complex and dynamic applications.

A virtual DOM is a lightweight representation of the actual DOM. When the state of an application changes, the virtual DOM is updated instead of the actual DOM. The virtual DOM then calculates the difference between the new and old states and updates only the necessary parts of the actual DOM, which reduces the amount of work the browser needs to do and improves performance.

React is an example of a JavaScript library that uses a virtual DOM to optimize the performance of web applications.


Features of react:

--> Reusable components
--> JSX is a syntax extension to JavaScript. By using JSX, we can write HTML structures in the same file that contains JavaScript code.
--> Virtual DOM
--> One way data binding: React’s one-way data binding keeps everything modular and fast. A unidirectional data flow means that when designing a React app, you often nest child components within parent components.
--> High performance: React updates only those components that have changed, rather than updating all the components at once. This results in much faster web applications.


                        Babel  
Modern Javascript(JSX) ------->  Browser compatible javascript



Keys are very important in lists for the following reasons:

--> A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists
--> It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered


Redux is an open-source, JavaScript library used to manage the application state. React uses Redux to build the user interface. It is a predictable state container for JavaScript applications and is used for the entire application’s state management.

Components of Redux:
--> Store: Holds the state of the application.
--> Action: The source information for the store.
--> Reducer: Specifies how the application's state changes in response to actions sent to the store.


refs in react: Refs help us to access the dom elements directly. We can create using React.useRef hook and just have to pass the  
