const fetchPost = async (urlString: string, body: { [key: string]: any } = {}) => {
    if (!urlString) {
        throw new Error("URL is required");
    }

    try {
        const url = new URL(urlString);

        const response = await fetch( url.toString(), {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(body),
                }
            );

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        return JSON.stringify(data, null, 2);

    } catch (error) {
        if (error instanceof Error) {
            throw {
                message: "Fetch error",
                details: error.message
            }

        } else {
            throw {
                message: "Fetch error",
                details: String(error)
            }
        }
    }
}
