import React from 'react';

const Blogs = () => {
    return (
        <div className='container m-auto min-h-screen'>
            <div className="hero min-h-screen border">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src="https://placeimg.com/260/400/arch" className="max-w-xs rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Managing State</h1>
                        <p className="py-6 m-1">The Four Kinds of React State to Manage
                        </p>
                        <p className="py-6 m-1">
                            1.Local state <br />
                            2.Global state<br />
                            3.Server state<br />
                            4.URL state
                        </p>
                        <p className="m2">
                            How to Manage Local State in React: <br />
                            Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

                            useState is the first tool you should reach for to manage state in your components.

                            It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback). <br />
                            useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.

                            The benefit of useReducer is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than useState.

                            You can see the benefit of useReducer versus useState in this vote tracking example. All we have to do to update state is pass the callback function dispatch a string (which is then passed to the reducer) instead of the new state itself.
                            <br />
                            How to Manage Global State in React : <br />
                            Once you attempt to manage state across multiple components, things get a bit trickier.

                            You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

                            What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.

                            To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state. <br />
                            How to Manage Server State in React: <br />
                            Server state can be deceptively challenging to manage.

                            At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.

                            What happens when there is a network error? Do I really need to hit my server every time my user visits the home page if the data hasn’t changed? Do I need to add useState and useEffect in every component I want to fetch my data?

                            To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query. <br />
                            How to Manage URL State in React : <br />
                            To end a difficult topic on a positive note, URL state is largely already managed for you if you are using a framework like Next.js or the current version of React Router.

                            URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.

                            If you are using React Router, you can get all the information you need using useHistory or useLocation.


                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen border">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='' src="https://placeimg.com/260/400/arch" className="max-w-xs rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">How does prototypical inheritance work?</h1>
      <p className="py-6">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div className="hero min-h-screen border">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='' src="https://placeimg.com/260/400/arch" className="max-w-xs rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">What is a unit test? Why should we write unit tests?</h1>
      <p className="py-6">Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='' src="https://plainenglish.io/assets/post-content/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022.png" className="max-w-xs rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">React vs. Angular vs. Vue?</h1>
      <p className="py-6">Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</p>
      <br />
      <img className='rounded-sm w-full shadow-2xl' src="https://www.angularminds.com/site_data/static/images/angular-react-vue/comparison-angular-react-vue.png" alt="" />
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


        </div>
    );
};

export default Blogs;