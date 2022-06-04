import fs from "fs"
import path from "path"
class streamingServices {
    constructor () {}

    async serveVideoService (slug: string, range: string) {

    try {
        const filePath =  path.resolve("src", "./media", `${slug}.mp4`)
        const fileSize = fs.statSync(filePath).size

        const chunkSize = 10 ** 6
        const start = Number(range.replace(/\D/g,""))
        const end = Math.min(start + chunkSize, fileSize -1)

        const contentLenght = end - start +1

        const headers = {
            "Content-Range": `Bytes ${start}-${end} / ${fileSize}`,
            "Accept-Ranges": "Bytes",
            "Content-Length": contentLenght,
            "Content-Type": "video/mp4"
        }   
        const videoStream = fs.createReadStream(filePath, {start, end})
        return { headers, videoStream }
    }
    catch (err) {
        return err
    }
       
    }
    
}
export default new streamingServices