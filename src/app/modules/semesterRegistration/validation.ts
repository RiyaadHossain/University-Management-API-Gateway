import { z } from 'zod';
import { SemesterRegistrationStatus } from './constant';

const create = z.object({
  body: z.object({
    startDate: z.coerce.date({ required_error: 'Start date is required!' }),
    endDate: z.coerce.date({ required_error: 'End date is required!' }),
    minCredit: z.number({ required_error: 'Min credit is required!' }),
    maxCredit: z.number({ required_error: 'Max credit is required!' }),
    academicSemesterId: z.string({
      required_error: 'Academic Semester is required!'
    })
  })
});

const update = z.object({
  body: z.object({
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    status: z
      .enum(SemesterRegistrationStatus as [string, ...string[]])
      .optional(),
    minCredit: z.number().optional(),
    maxCredit: z.number().optional(),
    academicSemesterId: z.string().optional()
  })
});

const startMyRegistration = z.object({
  body: z.object({
    semesterRegistrationId: z.string({
      required_error: 'Semester Registration Id is required!'
    }),
    studentId: z.string({ required_error: 'Student Id is required!' })
  })
});

const enrollAndWithdraw = z.object({
  body: z.object({
    offeredCourseId: z.string({
      required_error: 'Offered Course Id is required!'
    }),
    offeredCourseSectionId: z.string({
      required_error: 'Offered Course Section Id is required!'
    })
  })
});

export const SemesterRegistrationValidation = {
  create,
  update,
  startMyRegistration,
  enrollAndWithdraw
};
