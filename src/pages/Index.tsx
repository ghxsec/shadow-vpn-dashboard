
import { useState } from "react";
import Header from "@/components/vpn/Header";
import StatusCard from "@/components/vpn/StatusCard";
import ServerSelector from "@/components/vpn/ServerSelector";
import NetworkStats from "@/components/vpn/NetworkStats";
import QuickSettings from "@/components/vpn/QuickSettings";
import ConnectionInfo from "@/components/vpn/ConnectionInfo";
import { toast } from "sonner";

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleToggleConnection = () => {
    const newConnectionStatus = !isConnected;
    setIsConnected(newConnectionStatus);
    
    if (newConnectionStatus) {
      toast.success("VPN Connected", {
        description: "Your connection is now secure",
      });
    } else {
      toast.warning("VPN Disconnected", {
        description: "Your connection is no longer protected",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white animate-fade-in">
      <div className="container mx-auto p-4 sm:p-8 max-w-7xl">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Connection Status Card */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <StatusCard 
                isConnected={isConnected}
                onToggleConnection={handleToggleConnection}
              />
              <ServerSelector />
            </div>
          </div>
          
          {/* Network Statistics */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <NetworkStats />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <QuickSettings />
                <ConnectionInfo isConnected={isConnected} />
              </div>
            </div>
          </div>
        </div>
        
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 NexusVPN. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
