import { z } from 'zod';
import { WeekDays } from './constant';

const create = z.object({
  body: z.object({
    startTime: z.string({ required_error: 'Start Time is required' }),
    endTime: z.string({ required_error: 'End Time is required' }),
    daysOfWeek: z.enum(WeekDays as [string, ...string[]]),
    offeredCourseSectionId: z.string({
      required_error: 'Offered Course Id is required'
    }),
    semesterRegistrationId: z.string({
      required_error: 'Semester Registration Id is required'
    }),
    roomId: z.string({ required_error: 'Room Id is required' }),
    facultyId: z.string({ required_error: 'Faculty Id is required' })
  })
});

const update = z.object({
  body: z.object({
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    daysOfWeek: z.enum(WeekDays as [string, ...string[]]).optional(),
    offeredCourseSectionId: z.string().optional(),
    semesterRegistrationId: z.string().optional(),
    roomId: z.string().optional(),
    facultyId: z.string().optional()
  })
});

export const OfferedCourseClassScheduleValidation = {
  create,
  update
};
