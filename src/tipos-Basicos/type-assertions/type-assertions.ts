//estreitamento de tipo(não tem tanta certeza se o elemento existe)
const body = document.querySelector('body');
if(body)body.style.background = 'red';

//non-null assertion !
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

//type assertion(certeza que o elemento existe)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

