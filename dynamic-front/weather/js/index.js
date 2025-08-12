"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector('#search-form > form');
const input = document.querySelector('#input-loc');
const sectionTimeInfo = document.querySelector('#time-info');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    console.log('Submit');
    if (input === null || !sectionTimeInfo) {
        return;
    }
    const localization = input.value;
    if (localization.length < 3) {
        alert(' Precisa ter 3 letras');
        return;
    }
    try {
        const response = yield fetch(``);
        const data = yield response.json();
        console.log(data);
        const infos = {
            temp: Math.round(data.main.temp),
            loc: data.name,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        };
        sectionTimeInfo.innerHTML = `
           <div class="time-data">
                <h2>${infos.loc}</h2>

                <span>${infos.temp} </span>
            </div>


            <img src="${infos.icon}" >
    `;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log('Welcome to your weather searcher');
    }
}));
