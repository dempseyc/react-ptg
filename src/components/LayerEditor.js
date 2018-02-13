import React, { Component } from 'react'
import LayerButton from './LayerButton'
import LayerPanel from './LayerPanel'
import './LayerEditor.css'

export default class LayerEditor extends Component {

    constructor(props) {
        super(props);

        this.idx = this.props.idx;

        this.state= {
            activeLayer: 1
        }

        this.makeLayerButton = this.makeLayerButton.bind(this);
        this.makeLayerPanel = this.makeLayerPanel.bind(this);
        this.updateActiveLayer = this.updateActiveLayer.bind(this);

    }
    
    componentDidMount() {
        this.updateActiveLayer(this.state.activeLayer);
    }

    makeLayerButton() {
        return(
            <LayerButton 
                key={this.idx} 
                layerIdx= {this.idx} 
                handleClick= { () => {
                    this.updateActiveLayer(this.idx);
                    } }
                activeLayer= {this.state.activeLayer}
                reportActiveLayer= {this.reportActiveLayer.bind(this)}
            >
            </LayerButton>
        )
    }

    makeLayerPanel() {
        return(
            <LayerPanel 
                key= {this.idx} 
                layerIdx= {this.idx} 
                data= {this.props.data} 
                activeLayer= {this.state.activeLayer}
                reportActiveLayer= {this.reportActiveLayer.bind(this)}
            >
            </LayerPanel> 
        )
    }

    updateActiveLayer(numLayer) {
        this.setState({
            activeLayer: numLayer
        }, ()=>{
            console.log(this.state.activeLayer);
        })
    }

    reportActiveLayer(numLayer) {
        if (numLayer===this.state.activeLayer) {
            return "am";
        } else {
            return "am-not";
        }
    }

    render() {
        return (
        <div className="LayerEditor">

            <div className="LayerButton">
                { this.makeLayerButton() }      
            </div>
            <div className="layerPanel">
                { this.makeLayerPanel() }
            </div>

        </div>
        )
    }
}
