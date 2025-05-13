
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ShieldOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface StatusCardProps {
  isConnected: boolean;
  onToggleConnection: () => void;
}

const StatusCard = ({ isConnected, onToggleConnection }: StatusCardProps) => {
  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader className="pb-4">
        <h3 className="text-lg font-medium">Protection Status</h3>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-3 mb-4">
          <div className={`status-indicator ${!isConnected ? "status-indicator-disconnected" : ""}`}></div>
          <span className="text-lg font-medium">
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </div>
        <div className="text-muted-foreground text-sm mb-6">
          {isConnected ? (
            <div>
              <p className="mb-1">Your connection is secure</p>
              <p>IP: 195.xxx.xx.xx</p>
            </div>
          ) : (
            <p>Your connection is not protected</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onToggleConnection}
          className={`w-full ${
            isConnected
              ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
              : "bg-green-500/20 text-green-400 hover:bg-green-500/30"
          }`}
        >
          {isConnected ? (
            <>
              <ShieldOff className="mr-2 h-4 w-4" /> Disconnect
            </>
          ) : (
            <>
              <Shield className="mr-2 h-4 w-4" /> Connect
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StatusCard;
