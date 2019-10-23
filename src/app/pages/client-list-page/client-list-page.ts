import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list-page.html',
  styleUrls: ['./client-list-page.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientListPageComponent implements OnInit {

  // dataSource = ELEMENT_DATA;

  columnsToDisplay = ['id', 'name', 'Update'];
  expandedElement: PeriodicElement | null;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  projcolumnsToDisplay = ['id', 'name', 'Update', 'add'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

export interface PeriodicElement {
  id: number;
  name: string;
  projects: Array<PD>;

}
export interface PD {
  id: number;
  name: string;
}

// const PROJECT_DATA =[
//       {
//         id: 1,
//         name:' Hydrogen is a chemical',
//
//       }
// ]

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'Hydrogen',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is lorem ipsumm'
      },
      {
        id: 1,
        name: ' Hydrogen is a fisic, chemical'

      },
      {
        id: 1,
        name: ' Hydrogen is a chemical, fonse'
      }
    ]
  }, {
    id: 2,
    name: 'Helium',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 3,
    name: 'Lithium',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 4,
    name: 'Beryllium',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 5,
    name: 'Boron',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 6,
    name: 'Carbon',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]

  }, {
    id: 7,
    name: 'Nitrogen',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]

  }, {
    id: 8,
    name: 'Oxygen',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]

  }, {
    id: 9,
    name: 'Fluorine',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 10,
    name: 'Neon',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 11,
    name: 'Nitrogen',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 12,
    name: 'Oxygen',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 13,
    name: 'Fluorine',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 14,
    name: 'Neon',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 15,
    name: 'Nitrogen',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 16,
    name: 'Oxygen',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 17,
    name: 'Fluorine',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]
  }, {
    id: 18,
    name: 'Neon',
    projects: [
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      },
      {
        id: 1,
        name: ' Hydrogen is a chemical',
      }
    ]

  },
];


@NgModule({
  imports: [
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    CommonModule,
    MatButtonModule
  ],
  exports: [ClientListPageComponent],
  declarations: [ClientListPageComponent],
})
export class ClientListPageModule { }
