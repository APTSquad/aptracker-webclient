import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'ICL',
    children: [
      {
        name: 'ICL 2019', children: [
          { name: 'Инициализация' },
          { name: 'Анализ требований' }
        ]
      },
      {
        name: 'ICL 2019 Q2', children: [
          { name: 'Client' },
          { name: 'API' }
        ]
      },
    ]
  }, {
    name: 'MCL',
    children: [
      {
        name: 'MCL-1', children: [
          { name: 'Инициализация' },
          { name: 'Анализ требований' }
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'exp-tree',
  templateUrl: 'exp-tree.component.html',
  styleUrls: ['exp-tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpTreeComponent implements OnInit {
  ngOnInit(): void {
    this.treeControl.expandAll();
  }
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  isArticle = (_: number, node: ExampleFlatNode) => this.treeFlattener.getLevel(node) > 1;
}


@NgModule({
  imports: [
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatTreeModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [ExpTreeComponent],
  declarations: [ExpTreeComponent],
})
export class ExpTreeModule { }