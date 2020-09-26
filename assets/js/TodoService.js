const db = new Dexie('todoDB');

db.version(1).stores({
    tasks: '++id, description, done'
});

db.on('populate', async () => {
    console.log('It runs only once!');
    await db.tasks.bulkPut([
        {
            description: 'Learn JS',
            done: false
        },
        {
            description: 'Learn Python',
            done: false
        },
        {
            description: 'Learn C++',
            done: false
        },
        {
            description: 'Learn TS',
            done: false
        },
    ])
})

async function list() {
    db.tasks.each(task => console.log(task));
    const taskTakeScript = await db.tasks.get(4);
    taskTakeScript.done = true;
    db.tasks.put(taskTakeScript);
    const tasksDone = await db.tasks
        .where('description')
        .equals('Learn TS').first();
    console.log('Query', tasksDone);

}

list();

// export default class TodoService {
//     constructor() {

//     }
// }