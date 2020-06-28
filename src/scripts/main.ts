import { exhaustMap, tap, filter } from 'rxjs/operators';
import { getCards } from './http/cards.http';
import { createElementCard } from './card';
import { scrollHitBottom$ } from './scroll';
import { Card } from './interfaces/card';

const pageSize = 10;
const hasMore = true;
let page = 1;

const listView = document.querySelector('#listView');

const addCardsToListView = (cards: Card[]): void => {
    const htmlCards = cards.map((card) => createElementCard(card.imageUrl || '', card.nationalPokedexNumber || 0));
    listView?.append(...htmlCards);
};

scrollHitBottom$
    .pipe(
        filter(() => hasMore),
        exhaustMap(() => getCards(page, pageSize)),
        tap(addCardsToListView),
    )
    .subscribe(() => {
        page += 1;
    });
