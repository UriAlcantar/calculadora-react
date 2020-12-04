class Calculadora extends React.Component{

    state = {
        res:''
    }

    onDigit = (digit) => {
        const expression = this.state.res + digit;
        console.log(digit);
        this.setState({
            res: expression
        });
    }

    ejecutarOperacion = () => {
        const resultados = eval(this.state.res);
        this.setState({
            res:resultados
        })
    }

    render() {

        const alerta2 = ()=>alert('const alertados');
        return (
            <div>
            <div className="z-depth-2 cyan darken-3 white-text center-align resultados">
                {this.state.res || '0'}
            </div>
            <div className="calc-container blue lighten-3 hoverable z-depth-2">
                {
                    ['0','1','2','3','4','5','6','7','8','9','.'].map(digit => {
                        return(
                            <a key={digit} className="waves-effect waves-light cyan darken-3 btn-large" onClick={() => this.onDigit(digit)}>{digit}</a>
                        )
                    })
                }
            <div className="operadores center-align">
                {
                    ['+','-','/','*'].map(digit => {
                        return(
                            <a key={digit} className="waves-effect waves-light amber darken-3 btn" onClick={() => this.onDigit(digit)}>{digit}</a>
                        )
                    })
                }
                <a className="waves-effect waves-light amber darken-3 btn" onClick={() => this.setState({res:''})}>C</a>
            </div>
            <a className="waves-effect waves-light amber darken-3 btn" onClick={this.ejecutarOperacion}>Enter</a>

            </div>
            <style jsx>{
                `
                .resultados {
                    width: 300px;
                    margin: 0 auto;
                    font-size: 32px;
                    margin-bottom: 10px;
                }
                .calc-container {
                    width: 300px;
                    text-align: center;
                    margin: 0 auto;
                    padding: 12px
                }
                .calc-container a {
                    margin: 5px;
                }
                .operadors {
                    border: 1px solid #ccc;
                    padding 10px;
                    margin-top: 20px;
                }
                `
            }
            </style>
            </div>
        )
    }
}

export default Calculadora