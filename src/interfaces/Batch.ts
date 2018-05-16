export interface Batch {
    name: string;

    addCourses(course: any);
    getStudents();
    addStudent(student: any);
}