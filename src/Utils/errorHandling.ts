import { Response } from 'express';


export const jsonErrorHandler = (err, req, res, next) => {
    res.status(500).send({ error: err });
}
export function defaultErrorHandling(res: Response, error) {
    return res.status(400).json({
        code: 400,
        info: error?.response?.message ?? error?.message ?? "something went wrong!",
        error: error
    })
}