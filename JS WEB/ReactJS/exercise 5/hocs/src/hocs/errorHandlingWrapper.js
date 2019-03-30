import React from 'react';

// This function takes a component...
function errorHandlingWrapper(WrappedComponent) {
    // ...and returns another component...

    return class errorHandlingWrapper extends React.Component {
        constructor(props){
            super(props);
            this.state ={
                hasError:false
            }
        }
       
        componentDidCatch(error, info) {
            // You can also log the error to an error reporting service
            console.log(error, info);
        }
        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            return { hasError: true };
          }
        render() {
            if(this.state.hasError){
                return (<h1>Something went wrong!</h1>)
            }
            return <WrappedComponent{...this.props} />;
        }
    };
}
export default errorHandlingWrapper;