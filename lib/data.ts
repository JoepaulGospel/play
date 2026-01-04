export type Priority = 'High' | 'Medium' | 'Low';

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  tag: string;
  comments: number;
  attachments: number;
  daysLeft: number;
  progress: number;
  totalProgress: number;
  assignees: string[];
}

export const kanbanData: Record<string, Task[]> = {
  todo: [
    {
      id: '1',
      title: 'Define KPI list for Q2',
      priority: 'Medium',
      tag: 'Saas',
      comments: 18,
      attachments: 3,
      daysLeft: 4,
      progress: 14,
      totalProgress: 20,
      assignees: ['/avatars/user1.png', '/avatars/user2.png']
    },
    {
      id: '2',
      title: 'Set up database schema',
      priority: 'High',
      tag: 'Saas',
      comments: 18,
      attachments: 3,
      daysLeft: 4,
      progress: 14,
      totalProgress: 20,
      assignees: ['/avatars/user3.png', '/avatars/user1.png']
    },
    {
      id: '3',
      title: 'Confirm finance data sources',
      priority: 'Medium',
      tag: 'Saas',
      comments: 18,
      attachments: 3,
      daysLeft: 4,
      progress: 14,
      totalProgress: 20,
      assignees: ['/avatars/user2.png']
    }
  ],
  inProgress: [
    {
      id: '4',
      title: 'Create wireframes for dashboard',
      priority: 'Medium',
      tag: 'Design',
      comments: 18,
      attachments: 2,
      daysLeft: 2,
      progress: 18,
      totalProgress: 20,
      assignees: ['/avatars/user4.png']
    },
    {
      id: '5',
      title: 'Build initial component library',
      priority: 'High',
      tag: 'Dev',
      comments: 18,
      attachments: 5,
      daysLeft: 1,
      progress: 5,
      totalProgress: 20,
      assignees: ['/avatars/user1.png', '/avatars/user3.png', '/avatars/user4.png']
    }
  ],
  done: []
};
