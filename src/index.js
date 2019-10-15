import React from "react";
import ReactDOM from "react-dom";


class SignUpForm extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",

        nameError:"",
        emailError: "",
        passwordError:""
    }

     validate = () => {

        let nameError= "";
         let   emailError = "";
          let  passwordError = "";
    
        if (this.state.name.length === 0) {
            nameError = "Name can't be empty"
        }
    
        if (this.state.email.length < 9) {
            emailError = "Email should be at least 5 charcters long";
        }
    
        if (this.state.email.split("").filter(x => x === "@").length !== 1) {
            emailError = "Email should contain a @";
        }
        
    
        if (this.state.password.length < 6) {
            passwordError = "Password should be at least 6 characters long";
        }
    
        if(emailError || nameError || passwordError){
            this.setState({emailError, nameError, passwordError});
            return false;
        }
        return true;
    
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                
                <input
                    value={this.state.name}
                    onChange={evt => this.setState({ name: evt.target.value })}
                    type="text"
                    placeholder="Name"
                />
               <div style={{ color: "red", fontSize: 12 }}>{this.state.nameError}</div>
                <br />

                <input
                    value={this.state.email}
                    onChange={evt => this.setState({ email: evt.target.value })}
                    type="text"
                    placeholder="Email"
                />
                <div style={{ color: "red", fontSize: 12 }}>{this.state.emailError}</div>
                <br />

                <input
                    value={this.state.password}
                    onChange={evt => this.setState({ password: evt.target.value })}
                    type="password"
                    placeholder="Password"
                />
               <div style={{ color: "red", fontSize: 12 }}>{this.state.passwordError}</div>
                <br />

                <button type="submit">Submit</button>
            </form>
        );
    }
}



const rootElement = document.getElementById("root");
ReactDOM.render(<SignUpForm />, rootElement);
