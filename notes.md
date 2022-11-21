pure and impure function 

impure function  is the function which has one or more side effects

const c = a+b

function impure(a,b) {
    c= a*b

    return a+b
}

c is outside of the scope of the function so this is an impure function


pure function is function which does not have any side effects.

functional component has both pure and impure function


Hooks

useEffects -->

last [] --> if that variable is changing, at the time you call this. if this is empty you call it once only.
similar to componentDidMount
can have multiple useEffects.


React v18: 

on index.js

const container = document.getElementById('root)
root = createRoot(container)

differences between v17 and v18 is: 
how the code is implemented that's all


Strict Mode: 

to make sure you are not using any deprecated methods.

every time you call the setState function you are re-rendering calls.

Double Rendering every time on strict mode. (basically a ghost renders, [faded])







