import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import ThumbnailEntry from './ThumbnailEntry.js';
import withDragDropContext from '../utils/withDragDropContext.js';
import PropTypes from 'prop-types';

console.log('ThumbnailEntryDragSource module');

// Drag sources and drop targets only interact
// if they have the same string type.
const Types = {
  THUMBNAIL: 'thumbnail'
};

const thumbnailSource = {
  /*canDrag(props) {
    return props.error === false;
  },*/

  beginDrag(props) {
    console.log('beginDrag');
    console.log(props);

    return {
      id: props.id
    };
  },

  endDrag(props, monitor) {
    console.log('endDrag');
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      console.log(`You dropped ${item.id} into ${dropResult.id}!`);
    }
  }
};

class ThumbnailEntryDragSource extends Component {
  constructor(props) {
    super(props);

    console.log('ThumbnailEntryDragSource constructor');
  }

  render() {
    console.log('ThumbnailEntryDragSource render');

    const { isDragging, connectDragSource } = this.props;

    return connectDragSource(
      <div>
        I am a draggable card number {id}
        {isDragging && ' (and I am being dragged now)'}
      </div>
    );
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

export default DragSource(Types.THUMBNAIL, thumbnailSource, collect)(
  ThumbnailEntryDragSource
);
