const fetchGet = async (urlString: string, params: { [key: string]: any } = {}) => {
  if (!urlString) {
    throw new Error("URL is required");
  }

  try {
    const url = new URL(urlString);

    Object.keys(params).forEach(key => {
      url.searchParams.append(key, params[key]);
    });

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Fetch error:", error);
    if (error instanceof Error) {
      throw {
        message: "Fetch error",
        details: error.message,
      };
    } else {
      throw {
        message: "Fetch error",
        details: String(error),
      };
    }
  }
}
