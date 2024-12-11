import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import { Users, MessageSquare, Newspaper, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-20 bg-gradient-to-r from-secondary/50 to-accent/50 rounded-lg">
        <h1 className="text-5xl font-bold mb-6 text-primary">
          Welcome to WomenConnect
        </h1>
        <p className="text-2xl mb-8 max-w-2xl mx-auto">
          The world's largest community for women to chat, share, and
          collaborate.
        </p>
        <Button asChild size="lg" className="text-lg">
          <Link href="/signup">Join Now</Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Users,
            title: "Connect",
            description: "Network with women from various fields",
          },
          {
            icon: MessageSquare,
            title: "Discuss",
            description: "Engage in meaningful conversations",
          },
          {
            icon: Newspaper,
            title: "Share",
            description: "Share your experiences and knowledge",
          },
          {
            icon: BookOpen,
            title: "Learn",
            description: "Access resources and learn from peers",
          },
        ].map((item, index) => (
          <Card
            key={index}
            className="bg-secondary/10 hover:bg-secondary/20 transition-colors"
          >
            <CardHeader>
              <item.icon className="h-12 w-12 mb-4 text-primary" />
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">
          Featured Discussions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Women in Tech: Breaking Barriers",
              description:
                "Join the conversation on challenges and opportunities in the tech industry.",
              link: "/discussions/tech",
            },
            {
              title: "Entrepreneurship: From Idea to Success",
              description:
                "Share your startup journey and learn from successful women entrepreneurs.",
              link: "/discussions/entrepreneurship",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-accent/10 hover:bg-accent/20 transition-colors"
            >
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href={item.link}>Join Discussion</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
