import { fromEvent } from 'rxjs';
import { filter, startWith } from 'rxjs/operators';

export const isEndOfPage = (): boolean => {
    const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    return !(windowRelativeBottom > document.documentElement.clientHeight + 100);
};

export const scroll$ = fromEvent(document, 'scroll');
export const scrollHitBottom$ = scroll$.pipe(filter(isEndOfPage), startWith(true));
