
import { Button } from "@/components/ui/button";
import { Settings, User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">NexusVPN</h1>
        <p className="text-sm text-muted-foreground mt-1">Secure. Private. Fast.</p>
      </div>
      <div className="flex space-x-2">
        <Button variant="outline" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
