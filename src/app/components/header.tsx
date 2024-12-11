import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Bell, MessageCircle, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-secondary/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          WomenConnect
        </Link>
        <div className="flex items-center space-x-4">
          <form className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="search" placeholder="Search..." className="pl-8" />
          </form>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary hover:text-primary/80"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary hover:text-primary/80"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary hover:text-primary/80"
          >
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
