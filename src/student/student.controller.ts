import { Body, Controller, Get } from '@nestjs/common';
import { Student } from './student_model';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor (private readonly studentService: StudentService) {}

    @Get()
    readAllStudent(): Promise<any>{
        return this.studentService.readStudents();
    }

    @Post()
    async createStudent(@Body() student: Student): Promise<any>{
        let response = await this.studentService.createStudent(student);
        return {id: response};
    }
}
