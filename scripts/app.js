const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

// Тут типа сам тест начинается
class Quiz
{
	constructor(questions, results) {

		// Массив с вопросами
		this.questions = questions;

		// Массив с возможными результатами
		this.results = results;

		// Количество набранных очков
		this.score = 0;

		// Номер результата из массива
		this.result = 0;

		// Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		// Добавление очков
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		// Если добавлено хотя одно очко (ахахах), то ответ так уж и быть засчитаем как верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			// Или ищем какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	// Next (типа дота поняли) некст вопрос крч
	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	// Если вопросы кончились, то код ниже определит результат 
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

// Тут вопрос предоставляем
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

// Тут ответ предоставляем
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

// Представляем результат
class Result 
{
	constructor(text, value, src)
	{
		this.text = text;
		this.value = value;
		this.src = src;
	}

	// Этот код проверит, достаточно ли очков набрал чел
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

// Массив с результатами
const results = 
[
	new Result("Лох ебаный", 0, 'https://pbs.twimg.com/media/E1IuQdoXoAEn4qf.jpg'),
	new Result("Моя бабушка и то больше набрала", 2, 'https://pbs.twimg.com/media/E7mDC45X0AULOxr.jpg'),
	new Result("Возьми верёвку и иди в туалет", 4, 'https://3.bp.blogspot.com/-SyuuQ1-ZMo4/U8WgZC8ca2I/AAAAAAAAA1c/d-RhPc78RXw/s1600/277288_Papel-de-Parede-Meme-Isso-e-Suspeito_2048x1536.jpg'),
	new Result("Ты Генрих", 6, 'https://pbs.twimg.com/media/Epv2dTMXMAAFrNY.jpg'),
  	new Result("Ты почти добрался до IQ ребенка", 8, 'https://i.ucrazy.ru/files/i/2012.7.2/1341232053_z_535868f3.jpg'),
  	new Result("Нихрена ты бравлер", 10, 'https://steamuserimages-a.akamaihd.net/ugc/1770449840184887267/ED7DA9E6E75128C7DD7FF1AD96BD8BDB3359B579/?imw=512&amp;imh=511&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'),
  	new Result("ты потерял 5 минут своей жизни)))))))))😎", 12, 'https://c.tenor.com/z2JlZku6XtgAAAAd/red-sus.gif'),
	new Result("остановись нахуй", 14, 'https://sun9-32.userapi.com/c857420/v857420954/47b8d/JP82dcYHMfA.jpg'),
	new Result('Я газету проебав, а ты остановись(((', 16, 'https://www.pngitem.com/pimgs/m/450-4509473_cereal-meme-face-hd-png-download.png'),
	new Result("Да ну нахуй, хватит плз", 18, 'https://avatars.mds.yandex.net/get-zen_doc/1585197/pub_5e42af153daffa442a677749_5e42b2a3382385540e95bcd7/scale_1200'),
	new Result("Я в ахуе с тебя чел, что такое личная жизнь?", 20, 'https://pbs.twimg.com/media/EIO5LH6W4AEdcD_.jpg'),
];


// Массив с вопросами
const questions = 
[
	new Question("На дороге лежат две женщины, одна пришита, другая прибита. Что будем делать?", 
	[
		new Answer("Я би", 0),
		new Answer("Чего блять", 0),
		new Answer("Убить обоих", 0),
		new Answer("Первую отпороть, вторую отодрать.", 1)
	]),

	new Question("Вас увеличили и поместили в жопу билла гейтса. Ваши действия", 
	[
		new Answer("Посижу и подожду", 0),
		new Answer("Буду искать код шиндовса", 1),
		new Answer("ХАХАХХАХА", 0),
		new Answer("Посрать", 0) 
	]),

	new Question("Что жижее?", 
	[
		new Answer("Вода", 0),
		new Answer("Voda", 0),
		new Answer("Вода", 0),
		new Answer("Voda", 1)
	]),

	new Question("Что это такое: на бутылке сидит, по-французски говорит?", 
	[
		new Answer("Макс из кухни", 0),
		new Answer("Макс не из кухни", 0),
		new Answer("пашёл нахуй МУ МУ", 1),
		new Answer("А и Б сидели на бутылке", 0)
	]),

	new Question("Ёжик скурил 150 кг герыча, с какой скоростью сдохнет ёжик, если messi messi messi messi?!", 
	[
		new Answer("А мне оставить?", 0),
		new Answer("месси месси месси месси", 0), 
		new Answer("messi messi messi messi", 1),
		new Answer("10", 0)
	]),

	new Question("10 + 10 + 10 * 10 * 10 ... 150 000 + 200 000?", 
	[
		new Answer("негр", 0),
		new Answer("чё", 0),
		new Answer("ответы есть?", 0),
		new Answer("негр", 1)
	]),
    
    new Question("Что вы сделаете, если сердце остановится?", 
	[
		new Answer("Сделаю сальтуху", 1),
		new Answer("сяду в тюрьму, так как РФ", 0),
		new Answer("выебу кота", 0),
		new Answer("съем торт", 0)
	]),
    
    new Question("Что вы будете делать с одним долларом?", 
	[
		new Answer("Куплю жевачку", 0),
		new Answer("Нюхать кокс и ебать алекса из мадагаскара", 1),
		new Answer("Ходить по мелману", 0),
		new Answer("Пить чай из доллара", 0)
	]),
    
    new Question("Если бы вам разрешили устроить парад, то какой бы это был парад?", 
	[
		new Answer("Парад генрихов", 0),
		new Answer("Парад из генрихов", 1),
		new Answer("Парад гейев", 0),
		new Answer("Парад Навального", 0)
	]),
    
    new Question("Что ты скажешь бомжу на улице?", 
	[
		new Answer("Ты там живой?", 0),
		new Answer("Тебе почка нужна?", 0),
		new Answer("Ну я тогда возьму", 0),
		new Answer("Соснёшь за 5$?", 1)
	]),
    
    new Question("Я правда генрих?", 
	[
		new Answer("Конечно нет", 0),
		new Answer("К сожалению да", 1),
		new Answer("Вы... в следующей серии...", 0),
		new Answer("Вы немного гей", 0)
	]),
    
  new Question("Был белый цвет, пришёл негр, перекрасил в белый. В чём ёжик?", 
	[
		new Answer("Ёжик в ёжике, не мешайте", 1),
		new Answer("Да", 0),
		new Answer("Нет", 0),
		new Answer("Я правда генрих?", 0)
	]),

	new Question("Пи пи, пупу, чек?", 
	[
		new Answer("Да не хочу я срать", 0),
		new Answer("кого чекать", 0),
		new Answer("Даун ебаный", 0),
		new Answer("В туалет выйди!", 1)
	]),

	new Question("Спасибо за внимание?", 
	[
		new Answer("Нахуй пошёл", 1),
		new Answer("Спасибо", 0),
		new Answer("Пожалуйста", 0),
		new Answer("Пошёл нахуй", 0)
	]),

	new Question("Внимание за спасибо?", 
	[
		new Answer("Опять ты нахуй?", 1),
		new Answer("Нахуй ты опять?", 0),
		new Answer("Негры", 0),
		new Answer("Спасибо за внимание", 0)
	]),

	new Question("Данный тест заминирован. Что будете делать?", 
	[
		new Answer("Снимать трусы", 0),
		new Answer("messi messi messi", 0),
		new Answer("messi messi merci", 1),
		new Answer("и бегать", 0)
	]),

	new Question("Snickers or Snegovicks?", 
	[
		new Answer("Twix", 1),
		new Answer("Xwit", 0),
		new Answer("messi messi merci", 0),
		new Answer("ахуеть", 0)
	]),

	new Question("я тебя выебал, чё делать будем?", 
	[
		new Answer("Позавтракаем", 1),
		new Answer("Поужинаем", 0),
		new Answer("Пойдём в полицию", 0),
		new Answer("мне 6 лет", 0)
	]),

	new Question("Я съел твой сникерс", 
	[
		new Answer("Пизда тебе", 0),
		new Answer("1000 - 7", 1),
		new Answer("7 - 1000", 0),
		new Answer("Я генрих", 0)
	]),

	new Question("ты меня выебал, чё делать будем?", 
	[
		new Answer("ХЗ", 0),
		new Answer("Пошёл нахуй", 0),
		new Answer("Нахуй пошёл", 0),
		new Answer("мне 6 лет", 0),
		new Answer("undefined", 0),
		new Answer("Пошёл нах", 0)
	]),
];

// Сам тест
const quiz = new Quiz(questions.sort(() => 0.5 - Math.random()), results);

Update();

// Обновление теста
function Update()
{
	// Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		// Если есть, меняем вопрос в заголовке
		headElem.textContent = quiz.questions[quiz.current].text;

		// Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		// Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.append(btn);
		}
		
		// Выводим номер текущего вопроса
		pagesElem.textContent = (quiz.current + 1) + " / " + quiz.questions.length;

		// Прикрепляем события к новым кнопкам
		Init();
	}
	else
	{
		// Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.textContent = quiz.results[quiz.result].text;
		pagesElem.textContent = "Очки: " + quiz.score;
		headElem.insertAdjacentHTML('beforebegin', `<img src="${quiz.results[quiz.result].src}" width="200" height="200">`)

	}
}

function Init()
{
	// Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		// Прикрепляем событие для каждой отдельной кнопки
		// При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	// Получаем номер правильного ответа
	let correct = quiz.Click(index);

	// Находим все кнопки
	let btns = document.getElementsByClassName("button");

	// Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	// Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным


		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 

	// Ждём секунду и обновляем тест (по приколу типа, ладно, это оч важно(нет))
	setTimeout(Update, 1000);
}
