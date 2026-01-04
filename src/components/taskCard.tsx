import React from 'react';
import { MessageSquare, Paperclip, Clock, MoreVertical } from 'lucide-react';
import { Task, Priority } from '@/lib/data';

const PriorityTag = ({ priority }: { priority: Priority }) => {
  const colors = {
    High: 'text-red-400',
    Medium: 'text-orange-400',
    Low: 'text-green-400',
  };
  
  const dotColors = {
    High: 'bg-red-400',
    Medium: 'bg-orange-400',
    Low: 'bg-green-400',
  };

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-[#252527] rounded text-[10px] font-medium border border-white/5">
      <div className={`w-1.5 h-1.5 rounded-full ${dotColors[priority]}`} />
      <span className={colors[priority]}>{priority}</span>
    </div>
  );
};

const Tag = ({ label }: { label: string }) => (
  <div className="px-2 py-1 bg-[#1E293B] text-blue-400 text-[10px] font-medium rounded border border-blue-900/30">
    {label}
  </div>
);

// Generates the segmented progress bar visual
const ProgressBar = ({ current, total }: { current: number, total: number }) => {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i} 
          className={`w-[2px] h-3 rounded-full ${i < current ? 'bg-blue-500' : 'bg-[#333]'}`}
        />
      ))}
      <span className="ml-2 text-[10px] text-gray-500 font-medium">
        {current} / {total}
      </span>
    </div>
  );
};

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-card hover:bg-card-hover p-4 rounded-2xl border border-border group cursor-pointer transition-all duration-200">
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-2">
          <PriorityTag priority={task.priority} />
          <Tag label={task.tag} />
        </div>
        {/* <button className="text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical size={16} />
        </button> */}
      </div>

      <h3 className="text-sm font-semibold text-white mb-4 leading-snug">
        {task.title}
      </h3>

      <div className="flex items-center gap-4 text-gray-500 mb-5">
        <div className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
          <MessageSquare size={14} />
          <span className="text-xs">{task.comments}</span>
        </div>
        <div className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
          <Paperclip size={14} className="rotate-45" />
          <span className="text-xs">{task.attachments}</span>
        </div>
        <div className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
          <Clock size={14} />
          <span className="text-xs">{task.daysLeft} days</span>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <ProgressBar current={task.progress} total={task.totalProgress} />
        
        <div className="flex -space-x-2">
          {task.assignees.map((avatar, idx) => (
             <div key={idx} className="w-6 h-6 rounded-full border border-[#1C1C1E] bg-zinc-700 overflow-hidden">
                 <img src={`https://i.pravatar.cc/150?u=${idx + task.id}`} alt="Assignee" className="w-full h-full object-cover" />
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
