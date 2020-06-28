const createCard = (): Element | HTMLElement => {
    const card = document.createElement('div');
    card.classList.add('card');
    return card;
};

const createContent = (index: number): Element | HTMLElement => {
    const content = document.createElement('div');
    const title = document.createElement('p');
    const number = document.createElement('p');

    content.classList.add('card-content');
    title.innerHTML = 'PokeIndex Number: ';
    number.innerHTML = index.toString();

    content.append(title, number);
    return content;
};

export const createElementCard = (image: string, index: number): Element | HTMLElement => {
    const card = createCard();
    const img = document.createElement('img');
    const content = createContent(index);

    img.setAttribute('src', image);
    card.append(img, content);

    return card;
};
