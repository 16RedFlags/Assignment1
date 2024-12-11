"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { ScrollArea } from "@/app/components/ui/scroll-area";

type Message = {
  id: number;
  user: string;
  content: string;
  avatar: string;
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      user: "Alice",
      content: "Hello everyone!",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      user: "Emma",
      content: "Hi Alice, how are you?",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          user: "You",
          content: newMessage.trim(),
          avatar: "/placeholder.svg?height=32&width=32",
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[600px] border rounded-lg bg-background shadow-lg">
      <ScrollArea className="flex-grow p-6">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3 mb-6">
            <Avatar>
              <AvatarImage src={message.avatar} alt={message.user} />
              <AvatarFallback>{message.user[0]}</AvatarFallback>
            </Avatar>
            <div className="bg-secondary/20 rounded-lg p-3">
              <p className="font-semibold">{message.user}</p>
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </ScrollArea>
      <form
        onSubmit={handleSendMessage}
        className="border-t p-4 flex space-x-2 bg-muted/50"
      >
        <Input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
