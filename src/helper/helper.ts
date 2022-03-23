import * as bcrypt from 'bcrypt';

export class Helper{
    hash(plainPassword){
        const hash = bcrypt.hashSync(plainPassword, 10);
        return hash;
    }

    compare(plainPassword, hash){
        const valid = bcrypt.compareSync(plainPassword, hash);
        return valid;
    }
}
