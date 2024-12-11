import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatInterface from "@/components/chat-interface";
import CreateGroup from "@/components/create-group";
import DiscussionForum from "@/components/discussion-forum";
import { Card } from "@/app/components/ui/card";

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">
        Women's Community
      </h1>
      <Card className="p-6 bg-background shadow-lg">
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="w-full justify-start mb-4">
            <TabsTrigger value="chat" className="text-lg">
              Chat
            </TabsTrigger>
            <TabsTrigger value="groups" className="text-lg">
              Groups
            </TabsTrigger>
            <TabsTrigger value="discussions" className="text-lg">
              Discussions
            </TabsTrigger>
          </TabsList>
          <TabsContent value="chat">
            <ChatInterface />
          </TabsContent>
          <TabsContent value="groups">
            <CreateGroup />
          </TabsContent>
          <TabsContent value="discussions">
            <DiscussionForum />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}