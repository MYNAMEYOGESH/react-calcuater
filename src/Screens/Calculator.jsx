import React,{Component} from "react";
import Display from "./Display";
import Btn from "./Button";


class Calculater extends Component {
    constructor(props) {
        super(props)
        this.state ={
            inp: '',
            out: ''
        }
        this.readValue = this.readValue.bind(this)
    }

    readValue(val) {
        console.log('val =', val);
        switch(val) {
            case "CE" :
                this.setState({
                    out: "",
                    inp: ""
                })
                break;
            case "C" :
                this.setState({
                    inp:""
                })
                break;
            case "=" :
                let res = eval(this.state.inp)
                this.setState({
                    out:res
                })
                break;
            case "<-" :
                this.setState({
                    inp: this.state.inp.substring(0,this.state.inp.length-1)
                })
                break;
            case "1/2" :
                break;
            case "x2" :
                break;
            case "Bsqrt" :
               
                this.setState.apply({
                    out: Math.SQRT(this.state.inp).toString()
                })
                break;
            case "+/-" :

                break;
       default: this.setState({
        inp: this.state.inp + val
       })
           break; 
        }
    }
    render() {
        return(
            <div className="block">
                <h1 className="title">React Calculater</h1>

                <div className="cal-container">
                    <Display input={this.state.inp} output={this.state.out} />
                    <section className="button-container">
                        <div>
                        <Btn  handler={this.readValue} title={'CE'}/>
                        <Btn  handler={this.readValue} title={'C'}/> 
                        <Btn handler={this.readValue} title={'%'}/>                                 
                        <Btn  handler={this.readValue} title={'<-'}/>
                        </div>


                        <div>
                        <Btn  handler={this.readValue} title={'1/2'}/>
                        <Btn  handler={this.readValue} title={'x2'}/>
                        <Btn  handler={this.readValue} title={'sqrt'}/>
                        <Btn  handler={this.readValue} title={'/'}/>
                        </div>


                       <div> <Btn  handler={this.readValue} title={'7'}/>
                        <Btn  handler={this.readValue} title={'8'}/>
                        <Btn  handler={this.readValue} title={'9'}/>
                        <Btn  handler={this.readValue} title={'*'}/></div>
                        
                        <div>
                        <Btn  handler={this.readValue} title={'4'}/>
                        <Btn  handler={this.readValue} title={'5'}/>
                        <Btn  handler={this.readValue} title={'6'}/>
                        <Btn  handler={this.readValue} title={'-'}/></div>

                       <div> <Btn  handler={this.readValue} title={'1'}/>
                        <Btn  handler={this.readValue} title={'2'}/>
                        <Btn  handler={this.readValue} title={'3'}/>
                        <Btn  handler={this.readValue} title={'+'}/></div>

                       <div> <Btn title={'+/-'}/>
                        <Btn title={'0'}/>
                        <Btn title={'.'}/>
                        <Btn title={'='}/></div>
                    </section>
                </div>
            </div>
        )
    }
}
export default Calculater