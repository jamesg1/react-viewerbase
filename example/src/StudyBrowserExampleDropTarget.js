import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const divTarget = {
  drop() {
    return { id: 'DropTarget' };
  }
};

class StudyBrowserExampleDropTarget extends Component {
  render() {
    console.log('render StudyBrowserExampleDropTarget');
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#222';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    return connectDropTarget(
      <div style={{ backgroundColor }}>
        {isActive ? 'Release to drop' : 'Drag a box here'}
      </div>
    );
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
});

export default DropTarget('thumbnail', divTarget, collect)(
  StudyBrowserExampleDropTarget
);
