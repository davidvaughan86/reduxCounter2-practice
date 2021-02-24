export const incrementCounter = (state) => { // returning and object not jsx. use {} not (). passing state as the argument
    return {

        count: state.count +1
    }
      
    
}

// the action is the returned object. the returned object is defined as a key pair. the key is the assignment, the value is the assignment modified by state and an action is defined, in this case +1.