import React from 'react'
import Modal from './Component'
import './App.css'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            modals : [],
            increment : 0,
            modalIsOpen : true
        }
        this.deleteModal = this.deleteModal.bind(this)
        this.addModal = this.addModal.bind(this)
    }

    deleteModal(index){
        console.log('Array :', this.state.modals.filter(function(item){
            return(
                item!==index
            )
        }))

        let filterModal = this.state.modals.filter(function(item){
            return (
                item!==index
            )
        })

        this.setState({
            modals: filterModal
        })
    }


    addModal(){
        this.setState(prevState => ({
            increment : prevState.increment + 1,
            modals : prevState.modals.concat(this.state.increment)
        }))
    }

    render(){
        console.log(`Modal : ${this.state.modals}, Length : ${this.state.modals.length}`)

        const addMultiple = this.state.modals.map((item, index) => { 
            return(<Modal name={item} key={item+index} onClose={item} trigger={this.deleteModal}/>)
        }) 

        return(
            <div className="App">
                <center>
                    <button onClick={this.addModal}> 
                Open New Modal
                    </button>
                    {addMultiple}
                </center>
            </div>
        )
    }
}

export default App