import React from 'react';

import './Blog.css'

const Blog = () => {
    return (
        <div className="container">
            <div className='question-ans'>
                <h1 className='Ask-head'>Frequently Ask Question</h1>
                <div className="question-container">
                    <div className="faq-card">
                        <h3>Q:1= What is parpose of react router?</h3>
                        <p>
                            Ans: React Router is a standard library for routing in React.
                            It enables the navigation among views of various components
                            in a React Application, allows changing the browser URL, and
                            keeps the UI in sync with the URL. At its heart, React Router
                            is a state container for the current location , or URL. It
                            keeps track of the location and renders different route s as
                            it changes, and it also gives you tools to update the location
                            using link s and the history API.
                        </p>
                    </div>
                    <div className="faq-card">
                        <h3>Q:2= How does context api work?</h3>
                        <p>
                            Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. Despite React’s popularity, one of the biggest obstacles developers face when working with the library is components re-rendering excessively, slowing down performance and harming readability. Component re-rendering is especially damaging when developers need components to communicate with each other in a process known as prop drilling.
                        </p>
                    </div>
                    <div className="faq-card">
                        <h3>Q:3= What is useref in react?</h3>
                        <p>
                            Ans: Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  ref=myRef , React will set its .current property to the corresponding DOM node whenever that node changes. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRefinitialValue; The useRef returns a mutable ref object. The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                            The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                        </p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Blog;