import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../posts.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
export interface User {

  // id: number;
  // name: string;
  // experience: number;
  // domain: string;
  id: number;
  name: string;
  address: string;
  age: number;
  active: boolean;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  dataSource: any;

  // displayedColumns: string[] = ['id', 'name', 'experience', 'domain'];
  displayedColumns: string[] = ['id', 'name', 'address', 'age', 'active'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private postsService: PostsService) { }

  ngOnInit() {

    this.postsService.getUsers().subscribe(
        (data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
        }
    )

  }

}
