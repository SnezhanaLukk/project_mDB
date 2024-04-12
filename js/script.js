'use strict';

document.addEventListener('DOMContentLoaded', () => {


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        formClass = document.querySelector('form.add'),
        answer = formClass.querySelector('.adding__input'),
        click = formClass.querySelector('[type="checkbox"]');

    const deleted = (elem) => {
        elem.forEach(item => {
            item.remove();
        });
    };


    const changeContent = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };


    function createMovieList(arr, parent) {
        parent.innerHTML = "";
        arr.sort();

        arr.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(arr, parent);
            });
        });
    }

    const sortArr = (arr) => {
        arr.sort();
    };

    formClass.addEventListener('submit', (event) => {
        event.preventDefault();
        let film = answer.value;
        const addFilm = click.checked;
        if (film) {
            if (film.length > 21) {
                film = `${film.substring(0, 22)}...`;
            }
            if (addFilm) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(film);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });



    deleted(adv);
    changeContent();
    createMovieList(movieDB.movies, movieList);





});