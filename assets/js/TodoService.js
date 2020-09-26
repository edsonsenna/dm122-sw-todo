let db;

export default class TodoService {

    constructor() {
        this.initializeDB();
    }

    initializeDB() {
        db = new Dexie('todoDB');

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
    }

    getAll() {
        return db.tasks.toArray();
    }

    get(id) {
        return db.tasks.get(id);
    }

    save(task) {
        return db.tasks.put(task);
    }

    delete(id) {
        return db.tasks.delete(id);
    }
}