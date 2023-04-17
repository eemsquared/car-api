import { CallHandler, Controller, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common"
import { Observable, map, tap } from "rxjs"

@Injectable()
export class MoulderInterceptor<T> implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                map(data => {
                    let count = 1
                    if (Array.isArray(data)) {
                        count = data.length
                    }
                    return { count, data: count === 1 ? [data] : data}
                })
            )
    }

}