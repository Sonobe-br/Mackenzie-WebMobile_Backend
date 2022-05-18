import { Injectable } from '@nestjs/common';
import { Student } from './student_model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';    
import { async } from 'rxjs';


@Injectable()
export class StudentService {}

constructor ( @InjectModel('Model') private readonly student_model: Model<Student>) {}

/* CRUD - CREATE, READ, UPDATE, DELETE */
/* CREATE */
async createStudent(student: Student) {
    const studentModel = new this.studentModel (
        {
            nome: student.name,
            tia: student.tia,
            curso: student.course
        }
    );
    const result = await studentModel.save();
    return result.id as string;    
}

/* READ */

async readStudents() {
    const students = await this.studentModel.find().exec();
    return students;
} 
