import { z } from 'zod';
import { academicSemesterCodes, academicSemesterMonths, academicSemesterTitles } from './contant';

const create = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required'
    }),
    year: z.number({ required_error: 'Year is required' }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: 'Code is required'
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'Start Month is required'
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'End month is required'
    })
  })
});

const update = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]]).optional(),
    year: z.number().optional(),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]]).optional(),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]).optional(),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]).optional()
  })
});

export const AcademicSemesterValidation = {
  create,
  update
};
