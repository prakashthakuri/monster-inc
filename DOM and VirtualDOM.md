DOM : Document Object Model

represents as the tree.

Virtual DOM: 
Main advantage of React

React duplicates the Real dom with Virtual Dom on JavaScript 
Virtual DOM created in JavaScript

We need real dom to render.

under the hood: 

whenever you make any changes on the render 
 
 1. virtual DOM is gonna create another copy of Virtual DOM  : reason it does it's gonna use that first copy of virtual dom as a snapshot which is the latest. 

 2.  Virtual DOM Copy gonna batch the calls (setState), batching for optimization and efficiency 

 3. makes the changes on the Virtual DOM and then compares the Copy of Virtual DOM to Virtual DOM snapshot. 

 4. once it figures out what are the changes its gonna actually make changes to real dom as snapshot is the copy of real dom.

 5.  under the hood, it has all the batching

 6. real dom is gonna go with the reflow and we will finally see the changes.


 REACT AND REACTDOM