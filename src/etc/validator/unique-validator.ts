import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
// import { getConnection } from 'typeorm';

@Injectable()
export class UniqueValidator {
    // async validate(value: any, args:ValidationArguments){
    //     let result = false;
    //     let find = { [args.constraints[1]] : args.value } //ada 2 argumentt , kita ambil argument indeks kedua
    //     let check = await getConnection().getRepository(args.constraints[0]).findOne(find)
    //     // let check = await this.userService.findOne({id: 1})
    //     if(check){
    //         result = true;
    //     }

    //     return result
    // }
    // defaultMessage(args: ValidationArguments){
    //     return args.property+ ' ' + args.value + ' tidak ditemukan';
    // }
}

// export function IsUnique(option:any, validationOption?:ValidationOptions){
//     return function (object:any, propertyName: string){
//         console.log('masuk isExist')
//         registerDecorator({
//             name: 'IsUnique',
//             target: object.constructor,
//             propertyName : propertyName,
//             constraints : option,
//             options : validationOption,
//             validator : UniqueValidator,
//             async : true
//         })
//     }
// }
