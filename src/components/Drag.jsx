import {DraggableItem, DraggableContainer} from "@shopify/draggable"

const random255 = () => Math.floor(Math.random() * 256);
const randomColor = () => `rgb(${random255()}, ${random255()}, ${random255()})`;

class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockCount: 14,
    };
    this.handleBlockCount = this.handleBlockCount.bind(this);
  }

  handleBlockCount(e) {
    if (e.target.value) {
      this.setState({
        blockCount: parseInt(e.target.value),
      });
    }
  }

  render() {
    return (
      <div className="Drag">
        <div className="App-body">
          <div className="App-body-count">
            <h1 className="App-body-count-text">Block count:</h1>
            <input
              type="number"
              className="App-body-count-input"
              value={this.state.blockCount}
              onChange={this.handleBlockCount}
            />
          </div>
          <DraggableContainer
            as="div"
            type="sortable"
            className="BlockGenerator"
          >
            {Array.from(Array(this.state.blockCount).keys()).map(number => (
              <DraggableItem
                as="div"
                className="Block"
                style={{ backgroundColor: randomColor() }}
              >
                {number}
              </DraggableItem>
            ))}
          </DraggableContainer>
        </div>
      </div>
    );
  }
}

export default Drag;