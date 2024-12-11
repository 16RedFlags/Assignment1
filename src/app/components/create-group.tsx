"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function CreateGroup() {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the group data to your backend
    console.log("Group created:", {
      name: groupName,
      description: groupDescription,
    });
    // Reset form
    setGroupName("");
    setGroupDescription("");
  };

  return (
    <Card className="p-6 bg-secondary/10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Create a New Group
        </CardTitle>
        <CardDescription>
          Connect with like-minded women by starting your own group
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="group-name">Group Name</Label>
            <Input
              id="group-name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="group-description">Group Description</Label>
            <Textarea
              id="group-description"
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Create Group
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
