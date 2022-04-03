import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import {  getConnection } from 'typeorm';
// import { UserService } from 'src/user/user.service';

//membuat validator
@ValidatorConstraint({async: true})
@Injectable()
export class ExistValidator implements ValidatorConstraintInterface {
    // constructor(private readonly userService: UserService){}
    async validate(value: any, args:ValidationArguments){
        let result = true;
        let find = { [args.constraints[1]] : args.value } //ada 2 argumentt , kita ambil argument indeks kedua
        let check = await getConnection().getRepository(args.constraints[0]).findOne(find)
        // let check = await this.userService.findOne({id: 1})
        if(check){
            result = false;
        }

        return result
    }
    defaultMessage(args: ValidationArguments){
        return args.property+ ' ' + args.value + 'sudah digunakan';
    }
}
//meregisterkan IsExist yang akan dipanggil di create-user-dto dengan cara @IsExist
export function IsExist(option:any, validationOption?:ValidationOptions){
    return function (object:any, propertyName: string){
        console.log('masuk isExist')
        registerDecorator({
            name: 'IsExist',
            target: object.constructor,
            propertyName : propertyName,
            constraints : option,
            options : validationOption,
            validator : ExistValidator,
            async : true
        })
    }
}

// import { Injectable } from '@nestjs/common';
// import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
// import { getConnection } from 'typeorm';
// @ValidatorConstraint({async: true})
// @Injectable()
// export class ExistValidator implements ValidatorConstraintInterface {
//     async validate(value:any, args:ValidationArguments){
//         let result = true;
//         let find = { [args.constraints[1]] : args.value }
//         let cek = await getConnection().getRepository(args.constraints[0]).findOne(find)
//         console.log(cek)
//         if(cek){
//             result = false;
//         }
//         return result
//     }
//     defaultMessage(args:ValidationArguments){
//         return args.property+ ' ' + args.value + ' telah digunakan'
//     }
// }

// export function IsExist(option:any, validationOption?:ValidationOptions){
//     return function (object:any, propertyName:string){
//         registerDecorator({
//             name : 'IsExist',
//             target : object.constructor,
//             propertyName : propertyName,
//             constraints : option,
//             options : validationOption,
//             validator : ExistValidator,
//             async : true
//         })
//     }
// }