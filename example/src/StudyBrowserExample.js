import React, { Component } from 'react';
import { StudyBrowser } from 'react-viewerbase';
import StudyBrowserExampleDropTarget from './StudyBrowserExampleDropTarget.js';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';

const exampleStudies = [
  {
    thumbnails: [
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/Anti-PD-1_Lung.jpg',
        seriesDescription: 'Anti-PD-1_Lung',
        active: true,
        seriesNumber: 2,
        numImageFrames: 512,
        stackPercentComplete: 30
      },
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/Anti-PD-1_MELANOMA.jpg',
        seriesDescription: 'Anti-PD-1_MELANOMA',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256,
        stackPercentComplete: 70
      }
    ]
  },
  {
    thumbnails: [
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-GBM.jpg',
        seriesDescription: 'CPTAC-GBM',
        active: true,
        seriesNumber: 2,
        numImageFrames: 512,
        stackPercentComplete: 100
      },
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-CM.jpg',
        seriesDescription: 'CPTAC-CM',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256
      },
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-HNSCC.jpg',
        seriesDescription: 'CPTAC-HNSCC',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256
      },
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-LSCC.jpg',
        seriesDescription: 'CPTAC-LSCC',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256
      }
    ]
  }
];

class StudyBrowserExample extends Component {
  constructor(props) {
    super(props);

    this.onThumbnailDoubleClick = this.onThumbnailDoubleClick.bind(this);
    this.onThumbnailClick = this.onThumbnailClick.bind(this);
    debugger;
  }

  onThumbnailClick() {
    console.warn('onThumbnailClick');
    console.warn(this);
  }
  onThumbnailDoubleClick() {
    console.warn('onThumbnailDoubleClick');
    console.warn(this);
  }

  render() {
    const dragDropBackend = HTML5Backend;

    return (
      <DragDropContextProvider backend={dragDropBackend}>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <h3>Study Browser</h3>
            <p>
              A simple scrollable list of image sets. Users can drag/drop data
              from here into a panel in the layout.
            </p>
            <div className="study-drop-area">
              <h4>Drag / Drop something from the Study Browser here</h4>
              <span className="study-drop-results">
                <StudyBrowserExampleDropTarget/>
              </span>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6" style={{ height: '512px' }}>
            <StudyBrowser
              dragDropBackend={dragDropBackend}
              studies={exampleStudies}
              onThumbnailClick={this.onThumbnailClick}
              onThumbnailDoubleClick={this.onThumbnailDoubleClick}
              onThumbnailDrag={this.onThumbnailDrag}
              onThumbnailDrop={this.onThumbnailDrop}
            />
          </div>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default StudyBrowserExample;
