require('../src/db/mongoose')
const User = require('../src/models/users')

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('660febfa94096054ad69cfa7', 9).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})