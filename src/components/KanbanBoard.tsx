import React from 'react';
import { MoreVertical, Plus } from 'lucide-react';
import TaskCard from './TaskCard';
import { kanbanData } from '@/lib/data';

const ColumnHeader = ({ title, count, color }: { title: string, count?: number, color?: string }) => (
  <div className="flex items-center justify-between mb-4 px-1">
    <div className="flex items-center gap-3">
      <div className={`w-1 h-4 rounded-full ${color || 'bg-white'}`} />
      <span className="text-sm font-medium text-gray-200">{title}</span>
      {count !== undefined && <span className="text-xs text-gray-500 bg-zinc-800 px-2 py-0.5 rounded-full">{count}</span>}
    </div>
    <button className="text-gray-500 hover:text-white">
      <MoreVertical size={16} />
    </button>
  </div>
);

export default function KanbanBoard() {
  return (
    <div className="flex gap-6 h-full overflow-x-auto pb-4">
      {/* To Do Column */}
      <div className="w-[340px] shrink-0">
        <ColumnHeader title="To Do" color="bg-white" />
        <div className="space-y-3">
          {kanbanData.todo.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
        <button className="flex items-center gap-2 text-gray-400 hover:text-white mt-4 px-2 py-2 text-sm transition-colors w-full">
          <Plus size={16} />
          <span>Add New</span>
        </button>
      </div>

      {/* In Progress Column */}
      <div className="w-[340px] shrink-0">
        <ColumnHeader title="In Progress" color="bg-blue-500" />
        <div className="space-y-3">
          {kanbanData.inProgress.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
         <button className="flex items-center gap-2 text-gray-400 hover:text-white mt-4 px-2 py-2 text-sm transition-colors w-full">
          <Plus size={16} />
          <span>Add New</span>
        </button>
      </div>

      {/* Done Column (Placeholder to show board extent) */}
      <div className="w-[340px] shrink-0">
         <ColumnHeader title="Done" color="bg-green-500" />
         <button className="flex items-center gap-2 text-gray-400 hover:text-white mt-0 px-2 py-2 text-sm transition-colors w-full">
          <Plus size={16} />
          <span>Add New</span>
        </button>
      </div>
    </div>
  );
}
