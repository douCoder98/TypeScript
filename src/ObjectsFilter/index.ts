class User {
    constructor(public name: string, public age: number) {}
}

const users = [
    new User('Alice', 25),
    new User('Bob', 30),
    new User('Charlie', 35)
]

function jsonData(path: string): User[] {
    let usersJson = require(path);
    let data: User[] = [];
    usersJson = usersJson.users;
        for (const user of usersJson) {
            data.push(new User(user.name, user.age));
        }

    return data;
}

function ramData(users: User[]): User[] {
    return users;
}

function filterTask(filters: {[key: string]: any}, users: User[]): User[] {
    let results: User[] = [];
    let task = 'Filter: WHERE ';
    for (const key in filters) {
        task += key + ' = ' + filters[key] + ' AND ';
    }
    task = task.slice(0, -4);
    console.log(task);
    for (const user in users) {
        results = users.filter(user => user.age === filters.age && user.name === filters.name);
    }
    return results;
}

console.log(filterTask({name: 'Bob', age: 30}, ramData(users)));
