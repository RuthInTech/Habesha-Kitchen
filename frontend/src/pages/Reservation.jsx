import { useState } from "react";
import { sendReservation } from "../api.js";

export default function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendReservation({ name, email, date, people });
      alert("Reservation sent!");
    } catch (err) {
      alert("Failed to send reservation. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        value={people}
        min={1}
        onChange={(e) => setPeople(Number(e.target.value))}
      />
      <button type="submit">Reserve</button>
    </form>
  );
}
