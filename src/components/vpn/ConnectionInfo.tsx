
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Wifi } from "lucide-react";

interface ConnectionInfoProps {
  isConnected: boolean;
}

const ConnectionInfo = ({ isConnected }: ConnectionInfoProps) => {
  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-2 p-2 rounded-full bg-primary/20">
              {isConnected ? (
                <Wifi className="h-5 w-5 text-primary" />
              ) : (
                <Wifi className="h-5 w-5 text-gray-500" />
              )}
            </div>
            <h3 className="text-sm font-medium">Local IP</h3>
            <p className="text-sm text-muted-foreground">192.168.1.5</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="mb-2 p-2 rounded-full bg-green-500/20">
              {isConnected ? (
                <Cloud className="h-5 w-5 text-green-400" />
              ) : (
                <Cloud className="h-5 w-5 text-gray-500" />
              )}
            </div>
            <h3 className="text-sm font-medium">Public IP</h3>
            <p className="text-sm text-muted-foreground">
              {isConnected ? "195.xxx.xx.xx" : "Not protected"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConnectionInfo;
