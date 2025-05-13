
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for the charts
const generateData = () => {
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      time: i,
      download: Math.round(Math.random() * 100),
      upload: Math.round(Math.random() * 50),
      latency: Math.round(Math.random() * 20 + 10),
    });
  }
  return data;
};

const data = generateData();

const NetworkStats = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Network Statistics</CardTitle>
        <CardDescription>Monitor your connection performance</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="speed" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="speed">Speed</TabsTrigger>
            <TabsTrigger value="latency">Latency</TabsTrigger>
          </TabsList>
          <TabsContent value="speed" className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="time" tick={false} />
                <YAxis tick={{ fill: '#888' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F2C', 
                    borderColor: '#444',
                    borderRadius: '8px' 
                  }} 
                />
                <Line
                  type="monotone"
                  dataKey="download"
                  stroke="#9b87f5"
                  strokeWidth={2}
                  name="Download (Mbps)"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="upload"
                  stroke="#4ade80"
                  strokeWidth={2}
                  name="Upload (Mbps)"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="latency" className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="time" tick={false} />
                <YAxis tick={{ fill: '#888' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F2C', 
                    borderColor: '#444',
                    borderRadius: '8px' 
                  }} 
                />
                <Line
                  type="monotone"
                  dataKey="latency"
                  stroke="#f97316"
                  strokeWidth={2}
                  name="Latency (ms)"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Download</div>
            <div className="text-xl font-semibold text-primary">85 Mbps</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Upload</div>
            <div className="text-xl font-semibold text-green-400">32 Mbps</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Latency</div>
            <div className="text-xl font-semibold text-orange-400">24 ms</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetworkStats;
