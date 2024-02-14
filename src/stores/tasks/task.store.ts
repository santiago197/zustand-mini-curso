import { StateCreator, create } from 'zustand';
import type { Task, TaskStatus } from '../../interfaces';
import { devtools } from 'zustand/middleware';

interface TaskState {
	tasks: Record<string, Task>; // {[key:string]"Task"}
	getTaskByStatus: (status: TaskStatus) => Task[];
	dragginTaskid?: string;

	setDraggindTaskId: (taskId: string) => void;
	removeDraggindTaskId: () => void;
}

const storeApi: StateCreator<TaskState> = (set, get) => ({
	dragginTaskid: undefined,
	tasks: {
		'ABC-1': { id: 'ABC-1', title: 'Task 1', status: 'open' },
		'ABC-2': { id: 'ABC-2', title: 'Task 2', status: 'in-progress' },
		'ABC-3': { id: 'ABC-3', title: 'Task 3', status: 'open' },
		'ABC-4': { id: 'ABC-4', title: 'Task 4', status: 'open' },
	},
	getTaskByStatus: (status: TaskStatus) => {
		const tasks = get().tasks;
		return Object.values(tasks).filter((task) => task.status == status);
	},
	setDraggindTaskId: (taskId: string) => {
		set({ dragginTaskid: taskId });
	},
	removeDraggindTaskId: () => {
		set({ dragginTaskid: undefined });
	},
});
export const useTaskStore = create<TaskState>()(devtools(storeApi));
