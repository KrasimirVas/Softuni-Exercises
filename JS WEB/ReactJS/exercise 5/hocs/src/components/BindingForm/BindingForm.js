import React, { Component } from 'react';



class BindingForm extends Component {
    handleChange(e) {        
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    componentDidMount(){
        this.props.children.forEach(child => {
            if(child.type==='input') {
                this.setState({
                    [child.props.name]: null
                });
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Binding Form</h1>
                <form onSubmit={(e) => this.props.onSubmit(e, this.state)}>
                    {React.Children.map(this.props.children, child => {
                        //return <span onChange={this.handleChange}> {child}</span>;
                        if (child.type === 'input') {
                            return React.cloneElement(child, { onChange: this.handleChange.bind(this),...child.props })
                        }
                        return child;
                    })}
                    <input type="submit" value="Register"/>
                </form>

            </div>
        );
    }
}

export default BindingForm;
