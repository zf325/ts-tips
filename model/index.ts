import mongoose from 'mongoose';
import TipsModel from './tips';

mongoose.connect('mongodb://localhost:27017/tips', { useNewUrlParser: true });
// console.log('hahah')
// TipsModel.findOne({}).then(data => console.log(data))

// export * from './tips'
export default {
    TipsModel,

}


