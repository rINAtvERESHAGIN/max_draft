const initialData = {
    tasks:{
        'task-1':{id: 'task-1', content: 'Take out the garbage'},
        'task-2':{id: 'task-2', content: 'Learn how drag and drop work'},
        'task-3':{id: 'task-3', content: 'Write a from editor'},
        'task-4':{id: 'task-4', content: 'Create onDragEnd function'},
    },
    columns: {
        'column-1':{
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1','task-2','task-3','task-4',]
        },
    },
    columnOrder:['column-1']
}


export default initialData;
