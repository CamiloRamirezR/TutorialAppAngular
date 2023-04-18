import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './dataCourses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private courses: Array<Course> = [];
  getCourseList(): Array<Course> {
    return dataCourses;
  }

  constructor() { }

  ngOnInit() {
    this.courses = this.getCourseList();
  }

}
