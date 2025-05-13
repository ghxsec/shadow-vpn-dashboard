
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const servers = [
  { id: 1, name: "United States", flag: "🇺🇸", ping: 45 },
  { id: 2, name: "Germany", flag: "🇩🇪", ping: 28 },
  { id: 3, name: "Japan", flag: "🇯🇵", ping: 110 },
  { id: 4, name: "Netherlands", flag: "🇳🇱", ping: 32 },
  { id: 5, name: "United Kingdom", flag: "🇬🇧", ping: 35 },
];

const ServerSelector = () => {
  const [selectedServer, setSelectedServer] = useState(servers[0]);

  const handleServerSelect = (server: typeof servers[0]) => {
    setSelectedServer(server);
    toast.success(`Connected to ${server.name}`);
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Server Location</CardTitle>
        <CardDescription>Select your preferred server location</CardDescription>
      </CardHeader>
      <CardContent>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full justify-between bg-secondary text-secondary-foreground">
              <div className="flex items-center">
                <span className="mr-2 text-xl">{selectedServer.flag}</span>
                {selectedServer.name}
              </div>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            {servers.map((server) => (
              <DropdownMenuItem
                key={server.id}
                onClick={() => handleServerSelect(server)}
                className="cursor-pointer flex justify-between"
              >
                <div className="flex items-center">
                  <span className="mr-2 text-xl">{server.flag}</span>
                  {server.name}
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-muted-foreground mr-2">
                    {server.ping}ms
                  </span>
                  {selectedServer.id === server.id && (
                    <Check className="h-4 w-4" />
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
    </Card>
  );
};

export default ServerSelector;
