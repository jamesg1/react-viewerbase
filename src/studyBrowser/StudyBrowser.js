import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThumbnailEntry from './ThumbnailEntry';
import ThumbnailEntryDragSource from './ThumbnailEntryDragSource.js';
import './StudyBrowser.styl';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class StudyBrowser extends Component {
  static defaultProps = {
    studies: [],
    supportsDragAndDrop: true
  };

  static propTypes = {
    studies: PropTypes.array.isRequired,
    supportsDragAndDrop: PropTypes.bool.isRequired,
    onThumbnailClick: PropTypes.func,
    onThumbnailDoubleClick: PropTypes.func,
    dragDropBackend: PropTypes.func
  };

  render() {
    const studies = this.props.studies;

    const thumbnails = studies.map((study, studyIndex) => {
      return study.thumbnails.map((thumb, thumbIndex) => {
        if (this.props.supportsDragAndDrop) {
          return (
            <ThumbnailEntryDragSource
              key={`${studyIndex}_${thumbIndex}`}
              {...thumb}
              id={`${studyIndex}_${thumbIndex}`}
              onClick={this.props.onThumbnailClick}
              onDoubleClick={this.props.onThumbnailDoubleClick}
            />
          );
        } else {
          return (
            <ThumbnailEntry
              key={`${studyIndex}_${thumbIndex}`}
              {...thumb}
              id={`${studyIndex}_${thumbIndex}`}
              onClick={this.props.onThumbnailClick}
              onDoubleClick={this.props.onThumbnailDoubleClick}
            />
          );
        }
      });
    });

    const components = thumbnails.flat();
    return (
      <DragDropContextProvider backend={this.props.dragDropBackend}>
        <div className="StudyBrowser">
          <div className="scrollable-study-thumbnails">{components}</div>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default StudyBrowser;
