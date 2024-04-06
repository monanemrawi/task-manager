require('../src/db/mongoose')
const Task = require('../src/models/tasks')

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('66108d02ff5ede93a83fdb29').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})