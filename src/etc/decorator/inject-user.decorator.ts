import { createParamDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';

// export const InjectUser = (...args: string[]) => SetMetadata('inject-user', args);
// membuat decorator sendiri
//cara membuatnya = nest g decorator etc/decorator/inject-user-decorator

export const InjectUser = createParamDecorator((data: any, ctx :  ExecutionContext) => {
    // console.log('masuk inject user')
    const req = ctx.switchToHttp().getRequest();
    req.body.user = {id: req.user.id}
    // console.log(req.body.user)
    return req.body;
})