import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Text } from 'react-hexgrid';
import './App.css';
import './grid.css';

class App extends Component {
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
            <Hexagon q={-2} r={0} s={0}>
              <Text>C</Text>
            </Hexagon>
            <Hexagon q={-1} r={-1} s={0}>
              <Text>C#</Text>
            </Hexagon>
            <Hexagon q={-1} r={0} s={0}>
              <Text>D</Text>
            </Hexagon>
            <Hexagon q={0} r={-1} s={0}>
              <Text>D#</Text>
            </Hexagon>
            <Hexagon q={0} r={0} s={0}>
              <Text>E</Text>
            </Hexagon>
            <Hexagon q={1} r={0} s={0}>
              <Text>F</Text>
            </Hexagon>
            <Hexagon q={2} r={-1} s={0}>
              <Text>F#</Text>
            </Hexagon>
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default App;
