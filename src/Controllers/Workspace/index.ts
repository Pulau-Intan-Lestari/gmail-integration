import { Request, Response } from "express"
import { defaultErrorHandling } from "../../Utils/errorHandling"

export const GetWorkspace = (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            data: []
        })
    } catch (error) {
        return defaultErrorHandling(res, error)
    }
}