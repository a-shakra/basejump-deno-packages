import {corsHeaders} from "./cors-headers.ts";

export default function errorResponse(message: string, code: number = 400): Response {
    console.error('error occurred', message);
    return new Response(
        JSON.stringify({
            error: message
        }),
        {
            status: code,
            headers: {
                ...corsHeaders,
                "Content-Type": "application/json"
            }
        }
    )
}