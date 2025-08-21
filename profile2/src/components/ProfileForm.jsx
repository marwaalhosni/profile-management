import React, { useState, useEffect } from "react";
import { getPreferences, savePreferences } from "../api";

export default function ProfileForm() {
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [culture, setCulture] = useState("collaborative");

  useEffect(() => {
    async function loadPreferences() {
      const prefs = await getPreferences();
      if (prefs) {
        setLocation(prefs.location || "");
        setSalary(prefs.salary || "");
        setCulture(prefs.culture || "collaborative");
      }
    }
    loadPreferences();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { location, salary, culture };
    await savePreferences(data);
    alert("Preferences saved!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Profile Preferences</h2>

      <label>Preferred Location:</label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label>Minimum Salary:</label>
      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <label>Culture Preference:</label>
      <select value={culture} onChange={(e) => setCulture(e.target.value)}>
        <option value="collaborative">Collaborative</option>
        <option value="fast-paced">Fast-paced</option>
        <option value="flexible">Flexible</option>
        <option value="traditional">Traditional</option>
      </select>

      <button type="submit" style={{ marginTop: "15px" }}>Save</button>
    </form>
  );
}
