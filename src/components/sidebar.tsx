import React from 'react';
import { 
  Search, 
  Sparkles, 
  LayoutTemplate, 
  Bell, 
  LayoutDashboard, 
  Inbox, 
  FolderKanban, 
  CalendarDays, 
  BarChart2, 
  HelpCircle, 
  Settings, 
  X, 
  Box
} from 'lucide-react';
import Image from 'next/image';

const NavItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <div className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 group ${active ? 'bg-[#262626] text-white' : 'text-gray-400 hover:text-white hover:bg-[#1f1f1f]'}`}>
    <Icon size={18} className={active ? 'text-white' : 'group-hover:text-white'} />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default function Sidebar() {
  return (
    <aside className="w-[280px] h-screen bg-sidebar flex flex-col border-r border-border/50 shrink-0">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="text-white w-5 h-5" />
          <h1 className="font-semibold text-lg tracking-tight">Taskplus</h1>
        </div>
        <div className="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700">
           {/* Placeholder Avatar */}
           <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" className="w-full h-full object-cover opacity-80" />
        </div>
      </div>

      <div className="px-4 mb-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search"
            className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg pl-10 pr-4 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-8 custom-scrollbar">
        {/* Top Section */}
        <div className="space-y-1">
          <NavItem icon={Sparkles} label="Taskplus AI" />
          <NavItem icon={LayoutTemplate} label="Templates" />
          <NavItem icon={Bell} label="Notification" />
        </div>

        {/* Main Nav */}
        <div className="space-y-1">
          <NavItem icon={LayoutDashboard} label="Dashboard" />
          <NavItem icon={Inbox} label="Inbox" />
          <NavItem icon={FolderKanban} label="Project" active />
          <NavItem icon={CalendarDays} label="Calendar" />
          <NavItem icon={BarChart2} label="Reports" />
          <div className="pt-4">
             <NavItem icon={HelpCircle} label="Help & Center" />
             <NavItem icon={Settings} label="Settings" />
          </div>
        </div>
      </div>

      {/* Upgrade Card */}
      <div className="p-4">
        <div className="bg-[#1C1C1E] rounded-2xl p-5 relative overflow-hidden border border-[#2A2A2C]">
           {/* Subtle gradient background effect */}
           <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
           
           <div className="flex justify-between items-start mb-3 relative z-10">
             <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700 shadow-inner">
                <Box className="text-gray-400 w-5 h-5" />
             </div>
             <button className="text-gray-500 hover:text-white">
               <X size={16} />
             </button>
           </div>
           
           <h3 className="text-white font-semibold text-sm mb-1 relative z-10">Upgrade to Pro!</h3>
           <p className="text-gray-500 text-xs mb-4 leading-relaxed relative z-10">
             Unlock Premium Features and Manage Unlimited projects
           </p>
           
           <button className="w-full bg-[#2C2C2E] hover:bg-[#3A3A3C] text-white text-xs font-medium py-2.5 rounded-lg transition-colors border border-[#3A3A3C] relative z-10">
             Upgrade Now
           </button>
        </div>
      </div>
    </aside>
  );
}
