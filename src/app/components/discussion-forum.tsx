"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

type Post = {
  id: number;
  user: string;
  avatar: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
};

export default function DiscussionForum() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: "Jane Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Thoughts on work-life balance",
      content:
        "As a working mother, I find it challenging to balance my career and family life. What strategies do you use to maintain a healthy work-life balance?",
      likes: 15,
      comments: 7,
    },
    {
      id: 2,
      user: "Emily Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Negotiating salary: Tips and tricks",
      content:
        "I recently successfully negotiated a higher salary. Here are some tips that worked for me...",
      likes: 23,
      comments: 12,
    },
  ]);

  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPostTitle.trim() && newPostContent.trim()) {
      setPosts([
        {
          id: posts.length + 1,
          user: "You",
          avatar: "/placeholder.svg?height=40&width=40",
          title: newPostTitle.trim(),
          content: newPostContent.trim(),
          likes: 0,
          comments: 0,
        },
        ...posts,
      ]);
      setNewPostTitle("");
      setNewPostContent("");
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-6 bg-accent/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">
            Start a New Discussion
          </CardTitle>
          <CardDescription>
            Share your thoughts and experiences with the community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitPost} className="space-y-4">
            <Input
              placeholder="Post title"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              required
            />
            <Textarea
              placeholder="Write your post here..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Create Post
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="bg-secondary/10 hover:bg-secondary/20 transition-colors"
          >
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.avatar} alt={post.user} />
                  <AvatarFallback>{post.user[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{post.title}</CardTitle>
                  <p className="text-sm text-gray-500">Posted by {post.user}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="ghost"
                className="text-primary hover:text-primary/80"
              >
                Like ({post.likes})
              </Button>
              <Button
                variant="ghost"
                className="text-primary hover:text-primary/80"
              >
                Comment ({post.comments})
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
