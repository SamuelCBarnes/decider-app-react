import React, {Component} from "react";

const list = ['Yes','No','Maybe','Unclear','Not Sure...Try Again','Ask a friend', 'Call the police', "It is Certain", "It is Decidedly So", "Without a Doubt", "Yes, Definitely", "You May Rely on It", "As I See it, Yes", "Most Likely", "Outlook Good", "Signs Point to Yes", "Reply Hazy, Try Again", "Ask Again Later", "Better Not Tell You Now", "Cannot Predict Now", "Concentrate and Ask Again", "Don't Count on It", "My Reply is No", "My Sources Say No", "Outlook Not So Good", "Very Doubtful"]

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