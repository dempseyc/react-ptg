import React, { Component } from 'react'
import LayerContainer from './LayerContainer'

export default class Container extends Component {

    constructor () {
        super();
        this.styleRange = [
        "magenta-blotch", "cyan-blotch", "yellow-blotch"
        ];
        this.numLayers = 3;
        this.layers = [];

        for (let i=1;i<=this.numLayers;i++) {
        this.layers.push(i);
        }
        this.makeLayerContainers = this.makeLayerContainers.bind(this);

    }

    makeLayerContainers() {
        return this.layers.map( (i) => {
            let classnames = `LayerContainer`;
            return (
            <LayerContainer
                className={classnames} 
                key={i} 
                layerNumber = {i} 
                styleRange={this.styleRange}
            >
            </LayerContainer>
            )
        })
    }

    render() {
        return (
        <div className="Container">
            { this.makeLayerContainers() }
        </div>
        )
    }
}