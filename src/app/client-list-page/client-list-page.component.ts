import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  client: string;
  projects: string;
  article: string;
}

/** Constants used to fill up our data base. */
const PROJECTS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const CLIENT_NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

const ARTICLES: string[] = [
  'From its medieval origins to the digital', 
  'aying out print, graphic or web designs. ',
   'unknown typesetter in the 15th century ', 
   'scrambled parts of Ciceros De Finibus Bonorum', 
   'Lorem ipsum dolor sit amet, consectetur', 
   'The purpose of lorem ipsum is to create', 
   'The passage experienced a surge ', 
   'Latin derived from', 
   'Until recently, the prevailing view', 
   'Um, not so fast',
];

@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list-page.component.html',
  styleUrls: ['./client-list-page.component.scss']
})
export class ClientListPageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'client', 'project', 'article'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Create 50 users
    const users = Array.from({length: 50}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = CLIENT_NAMES[Math.round(Math.random() * (CLIENT_NAMES.length - 1))] + ' ' +
  CLIENT_NAMES[Math.round(Math.random() * (CLIENT_NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    client: name,
    projects: PROJECTS[Math.round(Math.random() * (PROJECTS.length - 1))],
    article: ARTICLES[Math.round(Math.random() * (ARTICLES.length - 1))]
  };

}
