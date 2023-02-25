import { Component } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faAngleUp = faAngleUp;
  faGear = faGear;
  faUsers = faUsers;
  faBorderAll = faBorderAll;
  faHeart = faHeart;
  faAngleDown = faAngleDown;
  faTrello = faTrello;
  faBox = faBox;
  faClock = faClock;
  faWaveSquare = faWaveSquare;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub item 1.1'
        },
        {
          label: 'Sub item 1.2'
        }
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub item 2.1'
        }
      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub item 3.1'
        }
      ]
    }
  ]
}
