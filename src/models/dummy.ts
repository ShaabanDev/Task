import mongoose,{model,Schema, Model} from 'mongoose';


import {DummyIn} from '../utils/dum'

const DummySchema = new Schema<DummyIn>({
    date:{ type:Date },
    x: { y:{ type: String} },
  });


const Dummy: Model<DummyIn> = model('Dummy', DummySchema);

export default Dummy;
