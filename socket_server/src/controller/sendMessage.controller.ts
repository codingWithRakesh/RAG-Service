import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js"
import { ApiError } from "../utils/apiError.js";
import { data } from "../cache/data.js";
import axios from "axios";
import { Request, Response } from "express";
import { Server } from "socket.io";

const javaURL: string = process.env.JAVA_URL || "http://localhost:8080/api/v2";
const sendMessage = asyncHandler(async (req: Request, res: Response): Promise<Response | void> => {
    const apiKey: string = req.headers["x-api-key"] as string || "";
    const { query }: { query: string } = req.body;

    if (!apiKey) {
        throw new ApiError(400, "API key is required")
    }
    if (!query) {
        throw new ApiError(400, "Query is required")
    }

    const userId: string = data.get("userId") as string;
    // const userId = "12345";
    if (!userId) {
        throw new ApiError(400, "User is not connected")
    }

    console.log({javaURL})

    const response = await axios.post(`${javaURL}/messages/query`,
        {query: query},
        {
            headers: {
                "x-api-key": apiKey
            }
        }
    )
    console.log("API Response: Server", response.data);

    const io: Server = req.app.get("io");
    io.to(userId).emit("receive-message", { response:response.data });

    return res.status(200).json(new ApiResponse(200, { query, apiKey, userId }, "Message sent successfully"))
})

export {
    sendMessage
}