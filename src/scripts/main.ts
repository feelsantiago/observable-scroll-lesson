import { getCards } from './http/cards.http';

getCards(1, 20).subscribe(console.log);
