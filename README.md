# Frontend Mentor - Fullstack Todo App (MEVN)

![Design preview for the Todo app
 coding challenge](./preview.jpg)

## Welcome! 👋

Today's challenge was building an intermediate level Todo app. It's my first fullstack app and I'm really thrilled about what I've managed to achieve in this project! 

[Live Site](https://todo-app-pi-roan.vercel.app/)

## Technologies Used

* **HTML5**
* **SASS**
* **Vue** (Composition API)
* **Express**
* **MongoDB + Mongoose**
* **GSAP**
* **Fetch - Async/await**
* **Vuedraggable**

* **

## Development

This has been one of the most interesting and challenging projects I've ever worked on and I'm excited to share how the journey played out.

First of all, I'd like to point out that whenever you start a project of this size (or even larger), it can feel quite intimidating given the fact that you have to tackle so many tasks and work with such a large variety of technologies.

It's vital to break down the projects into doable steps and take it one by one. 

Here, the first step was laying out the folder structure and setting up the basic files for each Vue component and also their SASS counterparts.

I find that the most reasonable approach to building out responsive layouts is by starting with the mobile design, since that's where most of the nittty-gritty details are found. After that, building the rest of the versions for larger screen sizes is just a matter of scaling up and / or removing / adding certain UI elements.

With the basic folders and files setup, now I had to focus on how each component would communicate with one another, so the data could flow unhampered. To do that, I used Vue's Composition API which is rather straightforward and simple to setup. If you feel more comfortable with Vuex, by all means, you can use that. Personally, I find that the Composition API is better suited for such scenarios, whereas Vuex is better suited for larger size projects.

When you start working on a fullstack app, you also have to take into consideration how the frontend will communicate with the backend and what the data structure will look like.

Since I only recently started learning Node.js, Express, and MongoDB, it was quite challenging at first since I had to face quite a large number of bugs along the way.

The idea was to setup a basic API that'd fetch the data from MongoDB using the Mongoose NPM library and serve that as JSON, which I could inject into my frontend Vue app by using the Fetch API coupled with Async / Await.

Understanding the features required was paramount to knowing what kind of requests to make to the server and how to setup the according routes to handle those HTTP requests. (GET, PUT, POST, DELETE)

After the UI was finished completely and the Express API was completely setup, I decided to turn to the last extra feature mentioned in the challenge - Drag and Drop.

Implementing this feature was a bit of a hassle because I struggled with the documentation. Basically, you need to wrap your individual Todo component in a Vuedraggable component that'll loop through your data and render those draggable Todos. 

The animations were also a bit of a challenge because of the way Vuedraggable works, but despite that, I managed to implement a few animations.

Overall, the project turned out quite nice. Being it my first fullstack project made it even more of an exciting experience and I definitely recommend trying to challenge yourself even more by trying to add further features to the projects.

## Notes

* MVC model can be used to better organize your project
* Use getters instead of trying to directly alter the state object
* Make sure the technologies used together don't cause unwanted side effects later on
* OOP can be quite handy when dealing with multiple types of HTTP requets

* **

You can join this and many other challenges on [Frontend Mentor](https://www.frontendmentor.io/)

## My work

You can find more challenges that I've completed [here](https://www.frontendmentor.io/profile/Remus432)