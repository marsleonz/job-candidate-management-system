"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { addMessageToDatabase } from "@/actions/add-message-to-database";

export default function MessageForm() {
  const [message, setMessage] = useState("");
  async function handleMessageToDatabase() {
    const response = await addMessageToDatabase(message);
    if (response.ok) {
      setMessage("");
    }
  }
  return (
    <div>
      <Input
        placeholder="input here"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <Button onClick={handleMessageToDatabase}>Submit</Button>
    </div>
  );
}
