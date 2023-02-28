import { ToDo, Column } from './../../models/todo.model';
import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';
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
  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
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
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '2',
          title: 'Watch Netflix',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Play LOL',
        },
      ],
    },
  ];

  constructor(private dialog: Dialog) {}

  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];

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

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    });
  }

  openDialog() {
    this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '30%',
      autoFocus: false,
    });
  }
}
