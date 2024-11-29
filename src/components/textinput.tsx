import { useState, ChangeEvent, FormEvent } from 'react';

export default function TextInput() {
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message) {
      setResponseMessage('Please enter a message first.');
      return;
    }

    try {
      const response = await fetch('/api/saveMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`Failed to save message: ${response.statusText}`);
      }

      const result = await response.json();
      setResponseMessage(`Message saved successfully. Document ID: ${result.id}`);
      setMessage('');
    } catch (error) {
      setResponseMessage((error as Error).message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a message"
          value={message}
          onChange={handleMessageChange}
        />
        <button type="submit">Save Message</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}
