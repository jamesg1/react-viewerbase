import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

// Drag sources and drop targets only interact
// if they have the same string type.
const Types = {
  THUMBNAIL: 'thumbnail'
};

const divTarget = {
  drop() {
    return { id: 'ExampleDropTarget' };
  }
};

// TODO: Find out why we can't move this into the Example app instead.
// It looks like the context isn't properly shared.

console.warn('StudyBrowserExampleDropTarget');

class ExampleDropTarget extends Component {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#fafafa';
    let color = 'black';
    let borderColor = 'black';
    if (isActive) {
      backgroundColor = 'black';
      color = 'var(--active-color)';
      borderColor = 'white';
    } else if (canDrop) {
      backgroundColor = 'black';
      color = 'white';
      borderColor = 'white';
    }

    return connectDropTarget(
      <div
        className="StudyBrowserExampleDropTarget"
        style={{
          color,
          borderColor,
          backgroundColor,
          width: '100%',
          height: '100px'
        }}
      >
        <h4>Drag / Drop something from the Study Browser here</h4>
        {isActive ? 'Release to drop' : 'Drag a box here'}
        <span className="study-drop-results" />
      </div>
    );
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
});

export default DropTarget(Types.THUMBNAIL, divTarget, collect)(
  ExampleDropTarget
);
