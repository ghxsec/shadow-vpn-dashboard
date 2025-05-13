
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const QuickSettings = () => {
  const [killSwitch, setKillSwitch] = useState(false);
  const [autoConnect, setAutoConnect] = useState(true);
  const [adBlocker, setAdBlocker] = useState(true);

  const handleKillSwitchChange = (checked: boolean) => {
    setKillSwitch(checked);
    toast.success(checked ? "Kill switch enabled" : "Kill switch disabled");
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <h3 className="text-lg font-medium">Quick Settings</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="kill-switch">Kill Switch</Label>
            <p className="text-sm text-muted-foreground">
              Block all traffic if VPN disconnects
            </p>
          </div>
          <Switch
            id="kill-switch"
            checked={killSwitch}
            onCheckedChange={handleKillSwitchChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="auto-connect">Auto-Connect</Label>
            <p className="text-sm text-muted-foreground">
              Connect on system startup
            </p>
          </div>
          <Switch
            id="auto-connect"
            checked={autoConnect}
            onCheckedChange={setAutoConnect}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="ad-blocker">Ad Blocker</Label>
            <p className="text-sm text-muted-foreground">
              Block ads and trackers
            </p>
          </div>
          <Switch
            id="ad-blocker"
            checked={adBlocker}
            onCheckedChange={setAdBlocker}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickSettings;
