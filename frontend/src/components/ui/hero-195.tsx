"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area
} from "recharts";
import { 
  LayoutDashboard, Users, CreditCard, Settings, Bell, Search, 
  ArrowUpRight, ArrowDownRight, Activity
} from "lucide-react";

// Mock Data
const revenueData = [
  { name: "Jan", total: 120 },
  { name: "Feb", total: 145 },
  { name: "Mar", total: 160 },
  { name: "Apr", total: 140 },
  { name: "May", total: 190 },
  { name: "Jun", total: 210 },
];

const categoryData = [
  { name: "Entertainment", value: 400 },
  { name: "Software", value: 300 },
  { name: "Utilities", value: 300 },
  { name: "Gym", value: 200 },
];
const COLORS = ["#2A9D90", "#10b981", "#8b5cf6", "#f43f5e"];

type TabType = "overview" | "subscriptions" | "analytics" | "profile";

export function Hero195() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  return (
    <section id="preview" className="py-24 relative bg-slate-50 overflow-hidden flex flex-col items-center border-t border-slate-200">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          A Dashboard That <span className="text-primary">Works For You</span>
        </h2>
        <p className="text-muted-foreground w-full max-w-2xl mx-auto text-lg md:text-xl">
          Everything you need at a glance — subscriptions, spending, and upcoming renewals.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 z-10">
        <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden flex flex-col mx-auto ring-1 ring-slate-900/5 h-[800px]">
          {/* Mock Browser Header */}
          <div className="h-12 border-b bg-muted/40 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="w-full max-w-md mx-auto bg-background border rounded-md h-7 flex items-center justify-center text-xs text-muted-foreground font-mono">
              app.subtracker.com/dashboard
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 border-r bg-muted/20 hidden md:flex flex-col p-4">
              <div className="flex items-center gap-2 mb-8 px-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  S
                </div>
                <span className="font-semibold text-lg tracking-tight">SubTracker</span>
              </div>
              
              <div className="space-y-1">
                <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">General</p>
                <div 
                  onClick={() => setActiveTab("overview")}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md font-medium text-sm transition-colors cursor-pointer",
                    activeTab === "overview" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                  )}>
                  <LayoutDashboard size={16} /> Overview
                </div>
                <div 
                  onClick={() => setActiveTab("subscriptions")}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md font-medium text-sm transition-colors cursor-pointer",
                    activeTab === "subscriptions" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                  )}>
                  <CreditCard size={16} /> Subscriptions
                </div>
                <div 
                  onClick={() => setActiveTab("analytics")}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md font-medium text-sm transition-colors cursor-pointer",
                    activeTab === "analytics" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                  )}>
                  <Activity size={16} /> Analytics
                </div>
              </div>

              <div className="space-y-1 mt-8">
                <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Settings</p>
                <div 
                  onClick={() => setActiveTab("profile")}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md font-medium text-sm transition-colors cursor-pointer",
                    activeTab === "profile" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                  )}>
                  <Users size={16} /> Profile
                </div>
              </div>
              
              <div className="mt-auto flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="User" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">Alex White</span>
                  <span className="text-xs">Free Plan</span>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-background overflow-hidden p-6 relative">
              
              {activeTab === "overview" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
                      <p className="text-muted-foreground text-sm">Here's a detailed look at your subscription landscape.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 bg-muted/50 border rounded-full px-4 py-1.5 text-sm">
                      <Search size={16} className="text-muted-foreground" />
                      <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none w-32" disabled />
                      <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center border">
                        <Bell size={12} />
                      </div>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Monthly Spend</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$1,234.50</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                          <ArrowUpRight strokeWidth={3} className="h-3 w-3 text-red-500 mr-1" />
                          <span className="text-red-500 font-medium">+4.1%</span> from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
                        <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">14</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                          <ArrowUpRight strokeWidth={3} className="h-3 w-3 text-red-500 mr-1" />
                          <span className="text-red-500 font-medium">+2</span> new this month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$142.00</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                          <ArrowDownRight strokeWidth={3} className="h-3 w-3 text-green-500 mr-1" />
                          Based on unused services
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Upcoming Renewals</CardTitle>
                        <Bell className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Within the next 7 days
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mb-8">
                    {/* Main Area Chart */}
                    <Card className="col-span-1 lg:col-span-4">
                      <CardHeader>
                        <CardTitle>Spending Trend</CardTitle>
                        <CardDescription>Your monthly costs over the last 6 months.</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <defs>
                              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2A9D90" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#2A9D90" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6b7280'}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6b7280'}} tickFormatter={(value) => `$${value}`} />
                            <Tooltip 
                              contentStyle={{borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                              itemStyle={{color: '#111827', fontWeight: 600}}
                            />
                            <Area type="monotone" dataKey="total" stroke="#2A9D90" strokeWidth={2} fillOpacity={1} fill="url(#colorTotal)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>

                    {/* Donut Chart */}
                    <Card className="col-span-1 lg:col-span-3">
                      <CardHeader>
                        <CardTitle>Categories</CardTitle>
                        <CardDescription>Breakdown by service type.</CardDescription>
                      </CardHeader>
                      <CardContent className="flex justify-center items-center h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={categoryData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={90}
                              paddingAngle={2}
                              dataKey="value"
                            >
                              {categoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === "subscriptions" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col pt-4">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h1 className="text-2xl font-bold tracking-tight">Your Subscriptions</h1>
                      <p className="text-muted-foreground text-sm">Manage all your active and paused plans.</p>
                    </div>
                  </div>
                  <Card className="flex-1 flex flex-col pt-6">
                    <CardContent className="h-full">
                      <div className="w-full">
                        <div className="flex items-center p-3 border-b text-sm font-medium text-muted-foreground mb-2">
                          <div className="flex-[2]">Service Name</div>
                          <div className="flex-1 text-right">Billing Cycle</div>
                          <div className="flex-1 text-right">Amount</div>
                          <div className="w-24 text-right">Status</div>
                        </div>
                        {[
                          { name: "Netflix Premium", cycle: "Monthly", amount: "$15.99", status: "Active" },
                          { name: "Spotify Duo", cycle: "Monthly", amount: "$14.99", status: "Active" },
                          { name: "Amazon Prime", cycle: "Yearly", amount: "$139.00", status: "Active" },
                          { name: "Gym Membership", cycle: "Monthly", amount: "$45.00", status: "Paused" },
                          { name: "Disney+", cycle: "Monthly", amount: "$7.99", status: "Active" },
                          { name: "Adobe Creative Cloud", cycle: "Yearly", amount: "$599.88", status: "Active" }
                        ].map((sub, i) => (
                          <div key={i} className="flex items-center p-3 hover:bg-muted/50 rounded-md transition-colors text-sm border-b last:border-0">
                            <div className="flex-[2] font-semibold text-foreground">{sub.name}</div>
                            <div className="flex-1 text-right text-muted-foreground">{sub.cycle}</div>
                            <div className="flex-1 text-right font-medium">{sub.amount}</div>
                            <div className="w-24 flex justify-end">
                              <span className={cn(
                                "px-2.5 py-0.5 rounded-full text-xs font-medium",
                                sub.status === "Active" ? "bg-green-100 text-green-700" : "bg-zinc-100 text-zinc-700"
                              )}>
                                {sub.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col pt-4">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h1 className="text-2xl font-bold tracking-tight">Spending Analytics</h1>
                      <p className="text-muted-foreground text-sm">Deep dive into your recurring costs.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Most Expensive</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xl font-bold">Adobe CC</div>
                        <p className="text-sm text-red-500">Accounts for 35% of total spend</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Lowest ROI (Estimated)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xl font-bold">Gym Membership</div>
                        <p className="text-sm text-amber-500">Not used in 3 weeks</p>
                      </CardContent>
                    </Card>
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                       <CardTitle>Year over Year Projection</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground">
                        <LineChart width={600} height={250} data={[
                          { name: '2023', total: 1100 },
                          { name: '2024', total: 1450 },
                          { name: '2025(p)', total: 1800 }
                        ]} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                          <Line type="monotone" dataKey="total" stroke="#8b5cf6" strokeWidth={3} dot={{r: 6}} />
                          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                          <XAxis dataKey="name" />
                          <YAxis tickFormatter={(val) => `$${val}`}/>
                          <Tooltip />
                        </LineChart>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "profile" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto mt-12">
                  <div className="text-center mb-8">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 rounded-full bg-slate-200 overflow-hidden mx-auto mb-4 border-4 border-background shadow-lg">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" alt="User" />
                      </div>
                      <div className="absolute bottom-4 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-background"></div>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">Alex White</h1>
                    <p className="text-muted-foreground text-sm">alex.white@example.com</p>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="text-xs font-semibold text-muted-foreground uppercase">Plan</label>
                           <p className="font-medium mt-1">Free Tier</p>
                        </div>
                        <div>
                           <label className="text-xs font-semibold text-muted-foreground uppercase">Member Since</label>
                           <p className="font-medium mt-1">October 2023</p>
                        </div>
                        <div>
                           <label className="text-xs font-semibold text-muted-foreground uppercase">Bank Connected</label>
                           <p className="font-medium mt-1 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-green-500"></span> Chase Bank (...4421)
                           </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

            </div>
          </div>
          <BorderBeam size={400} duration={14} colorFrom="#2A9D90" colorTo="#173 58% 70%" />
        </div>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
