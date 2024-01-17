1. Is JSX mandatory for React?
==> No, JSX is not mandatory for React. It is a JavaScript syntax extension that makes it easier to write React components. However, it is not required to use JSX in order to develop React applications.

2. Is ES6 mandatory for React?
==> It's not mandatory, it's considered best practice and will make your React code more concise and readable.

3. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
==> {TitleComponent} : This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it. <TitleComponent/> : This value represents a Component that is basically returning Some JSX value.

4. How can I write comments in JSX?
==> Single Line : // and multi line : `/*...*/`

5. What is <React.Fragment></React.Fragment> and <></> ?
==> React.Fragment is a component in React that allows you to group a list of children without adding extra nodes to the DOM. The `<> syntax is a shorthand for <React.Fragment></React.Fragment>.`

6. What is Virtual DOM?
==> A virtual DOM (VDOM) is a lightweight JavaScript representation of the Document Object Model (DOM). 

7. What is Reconciliation in React?
==> React Reconciliation is the process of updating the DOM (Document Object Model) to match the most recent virtual representation of a component's UI. In simpler terms, it's React's way of ensuring that the user interface reflects the current application state accurately.

8. What is React Fiber?
==> React Fiber is a concept of ReactJS that is used to render a system faster and smoother.

9. Why we need keys in React? When do we need keys in React?
==> In React, keys are unique identifiers for elements in a list. They are used to identify which items have changed, updated, or deleted from the Lists.

10. Can we use index as keys in React?
==> Yes, you can use indexes as keys in React. However, it is not recommended if the order of items can change. This can negatively impact performance and may cause issues with component state. 

11. What is props in React? Ways to
==> Props are immutable objects that are passed from parent to child components in React. They are used to share data between components and make them reusable.

12. What is a Config Driven UI?
==> Config-driven UI is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components. 