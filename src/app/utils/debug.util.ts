import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';

export const debug = <T>(message: string)  =>
    tap(
        (next) => {
            if (!environment.production) {
                console.log(message, next);
            }
        },
        (err) => {
            if (!environment.production) {
                console.error('ERROR >>', message, err);
            }
        },
        () => {
            if (!environment.production) {
                console.log('Completed - ');
            }
        }
    );
