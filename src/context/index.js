import React, {Component} from "react";

const list = ['Yes','No','Maybe','Unclear','Not Sure...Try Again','Ask a friend', 'Call the police']

const MyContext = React.createContext();
class MyProvider extends Component {

    state = {
        screen:0,
        question: '',
        result:''
    }

    handleGoTo = (value) => {
        this.setState({screen:value})
    }

    handleQuestion = (value) => {
        this.setState({question:value})
    }

    getRandomValue = () => {
        return list[Math.floor(Math.random()*list.length)]
    }

    handleResult = (value) => {
        let rand = this.getRandomValue()
        if(this.state.result !== ''){
            while(rand === this.state.result){
                rand = this.getRandomValue();
            }
        }
        this.setState({result:rand})   
     }

     handleReset = () => {
        this.setState({
            screen:0,
            question:'',
            result:''
        })
     }
    render(){
        return(
            <MyContext.Provider
            value={{
                state: this.state,
                question: this.handleQuestion,
                goTo: this.handleGoTo,
                result:this.handleResult,
                reset:this.handleReset
            }}

            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export {
    MyProvider,
    MyContext
}