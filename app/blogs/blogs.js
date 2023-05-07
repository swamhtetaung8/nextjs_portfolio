export const blogs = [
  {
    id: 1,
    title: "Why we cannot return multiple elements from JSX in React",
    date: "7th May 2023",
    categories: ["JavaScript", "React", "JSX"],
    details: [
      "JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, JSX is currently the most popular and convenient way to write components.",
      "Actually, there is no magic that lets you to write HTML-like markup inside a JavaScript file. There is a compiler called Babel and it produces JavaScript object like codes so that browsers can understand and display the UI. For instance, we used document.createElement and then appended more properties to the element in Vanilla JS. That's exactly what Babel is doing reading our JSX codes and producing JavaScript objects of our DOM elements.",
      "So when using JSX in React, we cannot return multiple elements directly because each element is turned into a JavaScript object. Therefore, we must wrap all of our elements with a single parent element, such as a div or React Fragment. Similarly, we cannot return multiple objects from a function without wrapping them into an array.",
    ],
    reference: "React Docs, Google",
  },
];
