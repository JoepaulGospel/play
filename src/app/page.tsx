import React from 'react';
import Sidebar from '@/components/Sidebar';
import KanbanBoard from '@/components/KanbanBoard';
import { ArrowLeft, Folder, LayoutKanban, List, Logs, Table } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex h-screen bg-background text-white font-sans">
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header Area */}
        <div className="px-8 py-6 border-b border-border/40">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <ArrowLeft size={16} className="hover:text-white cursor-pointer" />
            <span className="hover:text-gray-300 cursor-pointer">Project</span>
            <span className="text-gray-700">/</span>
            <span className="text-gray-200">Finance Dashboard</span>
          </div>

          {/* Title & Controls */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1E293B] rounded-xl flex items-center justify-center">
                <Folder className="text-blue-500 fill-blue-500/20" size={20} />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">Finance Dashboard</h1>
            </div>

            {/* View Switcher */}
            <div className="flex items-center justify-between">
               <div className="bg-[#161618] p-1 rounded-lg border border-[#2A2A2C] inline-flex">
                 <button className="flex items-center gap-2 px-3 py-1.5 bg-[#262626] rounded text-white text-sm font-medium shadow-sm">
                   <LayoutKanban size={16} />
                   <span>Kanban</span>
                 </button>
                 <button className="flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors">
                   <List size={16} />
                   <span>List</span>
                 </button>
                 <button className="flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors">
                   <Logs size={16} />
                   <span>Timeline</span>
                 </button>
                 <button className="flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors">
                   <Table size={16} />
                   <span>Table</span>
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* Board Area */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden p-8">
          <KanbanBoard />
        </div>
      </main>
    </div>
  );
}
