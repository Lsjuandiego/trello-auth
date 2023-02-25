import { ToDo } from './../../models/todo.model';
import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  todos: ToDo[] = [
    {
      id: '1',
      title: 'Buy a unicorn',
    },
    {
      id: '2',
      title: 'Watch Netflix',
    },
    {
      id: '3',
      title: 'Make dishes',
    },
  ];
  doing: ToDo[] = [
    {
      id: '2',
      title: 'Watch Netflix',
    },
  ];
  done: ToDo[] = [
    {
      id: '4',
      title: 'Play LOL',
    },
  ];

  // metodo para ordenar la lista de tareas
  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(event);
  }
}
