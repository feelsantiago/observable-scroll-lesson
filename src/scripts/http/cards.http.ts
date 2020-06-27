import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { config } from '../config';
import { Card, CardResponse } from '../interfaces/card';

export const getCards = (page: number, pageSize: number): Observable<Card[]> => {
    return ajax(`${config.baseUrl}/cards?page=${page}&pageSize=${pageSize}`).pipe(
        map((result) => result.response as CardResponse),
        map((response) => response.cards),
    );
};
