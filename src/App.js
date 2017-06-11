import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Text } from 'react-hexgrid';
import getFrequencyForNote from './utils';
import './App.css';
import './grid.css';

class App extends Component {
  constructor(props) {
    super(props);
    var context = new AudioContext();

    /* VCO */
    var vco = context.createOscillator();
    vco.type = vco.SINE;
    vco.frequency.value = 0;
    vco.start(0);

    /* VCA */
    var vca = context.createGain();
    vca.gain.value = 0;

    /* Connections */
    vco.connect(vca);
    vca.connect(context.destination);

    this.state = {
      vco, vca
    };
  }
  playNote(note) {
    const frequency = getFrequencyForNote(note);
    const { vco, vca } = this.state;
    vco.frequency.value = frequency;
    vca.gain.value = 1;

    setTimeout(() => vca.gain.value = 0, 300);
  }
  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const hexagonSize = { x: 20, y: 20 };
    return (
      <div className="App">
        <div className="App-header">
          <h1>🎼 Soundsheet</h1>
        </div>
        <HexGrid width={width} height={height} viewBox="-50 -50 100 100">
          {/* Main grid with bit hexagons, all manual */}
          <Layout size={hexagonSize} flat={false} spacing={1.15} origin={{ x: 10, y: 10 }}>
            <Hexagon q={-2} r={0} s={0} onClick={() => this.playNote('C3')}>
              <Text>C</Text>
            </Hexagon>
            <Hexagon q={-1} r={-1} s={0} onClick={() => this.playNote('C#3')}>
              <Text>C#</Text>
            </Hexagon>
            <Hexagon q={-1} r={0} s={0} onClick={() => this.playNote('D3')}>
              <Text>D</Text>
            </Hexagon>
            <Hexagon q={0} r={-1} s={0} onClick={() => this.playNote('D#3')}>
              <Text>D#</Text>
            </Hexagon>
            <Hexagon q={0} r={0} s={0} onClick={() => this.playNote('E3')}>
              <Text>E</Text>
            </Hexagon>
            <Hexagon q={1} r={0} s={0} onClick={() => this.playNote('F3')}>
              <Text>F</Text>
            </Hexagon>
            <Hexagon q={2} r={-1} s={0} onClick={() => this.playNote('F#3')}>
              <Text>F#</Text>
            </Hexagon>
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default App;
