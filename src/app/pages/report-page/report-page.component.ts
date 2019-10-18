import { Component, OnInit, NgModule } from '@angular/core';
import { TreetableModule, Node } from '../../treetable/treetable.module';
import { mockTree } from '../../treetable/mocks/mockTree';
import { mockTreeAsArrayOfNodes } from '../../treetable/mocks/mockTreeAsArrayOfNodes';
import { Folder, Task } from '../../treetable/mocks/models';


@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {

  singleRootTree: Node<Folder> = mockTree;
  arrayOfNodesTree: Node<Task>[] = mockTreeAsArrayOfNodes;

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
    TreetableModule
  ],
  exports: [ReportPageComponent],
  declarations: [ReportPageComponent],
})
export class ReportPageModule { }