import model from './model'
// model.TipsModel.findOne().then(data=>console.log(data + '1111'))
const { TipsModel } = model;
TipsModel.create({
    title:'welcome',
    content: 'hello',
    createdAt: new Date(),
    updatedAt: new Date(),
}).then(() => {
    return TipsModel.find({})
}).then(data => console.log(data))
.catch(err=> console.log(err));