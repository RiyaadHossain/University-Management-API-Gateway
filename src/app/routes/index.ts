import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/routes';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/routes';
import { BuildingRoutes } from '../modules/building/routes';
import { CourseRoutes } from '../modules/course/routes';
import { OfferedCourseRoutes } from '../modules/offeredCourse/routes';
import { OfferedCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/routes';
import { OfferedCourseSectionRoutes } from '../modules/offeredCourseSection/routes';
import { RoomRoutes } from '../modules/room/routes';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/routes';
import { StudentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/routes';
import { StudentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/routes';
import { StudentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/routes';
import { UserRoutes } from '../modules/user/routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/building',
    routes: BuildingRoutes
  },
  {
    path: '/courses',
    routes: CourseRoutes
  },
  {
    path: '/offered-courses',
    routes: OfferedCourseRoutes
  },
  {
    path: '/offered-course-class-schedules',
    routes: OfferedCourseClassScheduleRoutes
  },
  {
    path: '/offered-course-section',
    routes: OfferedCourseSectionRoutes
  },
  {
    path: '/rooms',
    routes: RoomRoutes
  },
  {
    path: '/semester-registrations',
    routes: SemesterRegistrationRoutes
  },
  {
    path: '/student-enrolled-courses',
    routes: StudentEnrolledCourseRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    routes: StudentEnrolledCourseMarkRoutes
  },
  {
    path: '/student-semester-payments',
    routes: StudentSemesterPaymentRoutes
  },
  {
    path: '/users',
    routes: UserRoutes
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
