import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// context singleton
let context;

export function setDragDropContext(newContext) {
  console.log('setDragDropContext');
  context = newContext;
}

// See https://github.com/react-dnd/react-dnd/issues/186#issuecomment-335429067
export default function withDragDropContext(Component) {
  console.log('withDragDropContext');
  // ensure a singleton instance of the context exists
  if (!context) {
    context = DragDropContext(HTML5Backend);
  }

  return context(Component);
}
