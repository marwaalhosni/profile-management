const API_URL = "http://localhost:5000/preferences"; // replace with real API later

export async function getPreferences() {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching preferences:", error);
    return null;
  }
}

export async function savePreferences(data) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("Error saving preferences:", error);
    return null;
  }
}
