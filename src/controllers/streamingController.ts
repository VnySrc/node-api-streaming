import { Request, Response } from "express";

import streamingServices from "../services/streamingServices";

export const serveVideo = async (req: Request, res: Response) => {
    const { range } = req.headers
    const { slug } = req.params
    if (range) {
        const response: any = await streamingServices.serveVideoService(slug, range)
       if (response instanceof Error) {
           res.status(503)
           res.send("Video unavaliable")
           res.end
       }
       else {
            res.writeHead(206, response.headers)
            response.videoStream.pipe(res)
       }
    }
    else{
        res.status(400)
        res.send("Requires range header")
        res.end
    }
    

}

export const home =  async (req: Request, res: Response) => {
    res.send("Api desenvolvida por @VnySrc")
    res.end
}