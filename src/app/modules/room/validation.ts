import { z } from 'zod';

const create = z.object({
  body: z.object({
    roomNumber: z.string({ required_error: 'Room Number is required' }),
    floor: z.string({ required_error: 'Floor is required' })
  })
});

const update = z.object({
  body: z.object({
    roomNumber: z.string().optional(),
    floor: z.string().optional()
  })
});

export const RoomValidation = {
  create,
  update
};
