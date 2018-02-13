import React, { Component } from 'react'
import DisplayLayer from './DisplayLayer'
import LayerEditor from './LayerEditor'

export default class LayerContainer extends Component {

  constructor (props) {
    super(props);
    this.layerNumber = this.props.layerNumber;
    this.state = {
      uiData: {
        chosenDotStyle: "magenta-blotch"
      },
      displayData: { 
        dotStyle: "magenta-blotch" 
      }
    };
    this.updateDotStyle = this.updateDotStyle.bind(this);
    this.updateAlgo = this.updateAlgo.bind(this);
    this.updateSize = this.updateSize.bind(this);
  }

  updateDotStyle(dotStyle) {
    this.setState({
      uiData: { chosenStyle: dotStyle },
      displayData: { dotStyle: dotStyle }
    })
  }

  updateAlgo(algo) {
    this.setState({
      uiData: { chosenAlgo: algo },
      displayData: { algo: algo }
    })
  }

  updateSize(size) {
    this.setState({
      uiData: { chosenSize: size },
      displayData: { size: size }
    })
  }

  render() {
    return (
      <div className="LayerContainer">
        <DisplayLayer data= {{
          numLayers: this.numLayers,
          dotStyle: this.state.displayData.dotStyle
        }} >
        </DisplayLayer>
        <LayerEditor data={{ 
          styleRange: this.props.styleRange,
          numLayers: this.numLayers,
          chosenDotStyle: this.state.uiData.chosenDotStyle, 
          updateDotStyle: this.updateDotStyle,
          }} />
      </div>
    )
  }
}
