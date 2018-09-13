import React from 'react'
import ReactModal from 'react-modal-resizable-draggable'

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            modalCondition : true,
            index : this.props.onClose
        }
        this.closedModal = this.closedModal.bind(this)
        this.delete=this.delete.bind(this)
    }

    closedModal(){
        this.setState({modalCondition : false})
    }

    delete(){
        this.props.trigger(this.state.index)
    }

    render(){
        return(
            
            <ReactModal initWidth={800} initHeight={400} onRequestClose={this.closedModal} isOpen={this.state.modalCondition}>
                <h1>Resize and Moveable Modal</h1>
                <button onClick={this.delete}>Close</button>
            </ReactModal>
            
        )
    }
}

export default Modal