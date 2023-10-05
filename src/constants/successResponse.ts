import { Response } from 'express';

export const sendSuccessResponse = (res: Response, data: object) => {
  return res.status(200).json({ success: true, data });
};
