import { IoReorderTwoOutline } from 'react-icons/io5';
import { Task } from '../../interfaces';
import { useTaskStore } from '../../stores';

interface Props {
	task: Task;
}

export const SingleTask = ({ task }: Props) => {
	const setDragginTaskId = useTaskStore((state) => state.setDraggindTaskId);
	const removeDraggindTaskId = useTaskStore(
		(state) => state.removeDraggindTaskId
	);
	const dragginTaskid = useTaskStore((state) => state.dragginTaskid);
	console.log(dragginTaskid);
	return (
		<div
			draggable
			onDragStart={() => setDragginTaskId(task.id)}
			onDragEnd={() => removeDraggindTaskId}
			className="h-full w-full"
		>
			<div className="mt-5 flex items-center justify-between p-2">
				<div className="flex items-center justify-center gap-2">
					<p className="text-base font-bold text-navy-700">{task.title}</p>
				</div>
				<span className=" h-6 w-6 text-navy-700 cursor-pointer">
					<IoReorderTwoOutline />
				</span>
			</div>
		</div>
	);
};
