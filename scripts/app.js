const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

// Тут типа сам тест начинается
class Quiz
{
	constructor(type, questions, results)
	{
		// Тип теста
		this.type = type;

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
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
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
	new Result("Харош", 0),
	new Result("Мега Харош", 2),
	new Result("Ультра Харош", 4),
	new Result("Ультра Мега Харош", 6),
    new Result("Ультра Мега Супер Харош", 8),
    new Result("ЧЕЛ ХАРОШ", 10),
    new Result("ОХУИТЕЛЕН 😎", 12),
];

// Массив с вопросами
const questions = 
[
	new Question("Было дерево, как?", 
	[
		new Answer("Да.", 0),
		new Answer("Чего блять", 0),
		new Answer("Как дерево то было?", 1),
		new Answer("Мб лучше два козла?", 0)
	]),

	new Question("Вас уменьшили и поместили в жопу алигатора. Ваши действия", 
	[
		new Answer("Посижу и подожду", 0),
		new Answer("Сделаю смузи", 0),
		new Answer("Ебааааааать", 0),
		new Answer("Уебать алигатора", 1) 
	]),

	new Question("Пахнет як?", 
	[
		new Answer("Почему як пахнет?", 0),
		new Answer("А как вкусно", 1),
		new Answer("Амонгус", 0),
		new Answer("Хайп трэш зашквар", 0)
	]),

	new Question("Было 2 козла, сколько узбеков осталось съесть?", 
	[
		new Answer("МУ МУ пашёл нахуй", 1),
		new Answer("4", 0),
		new Answer("пашёл нахуй МУ МУ", 0),
		new Answer("3", 0)
	]),

	new Question("Медведь съел 100 кг яблок, с какой скоростью летит картошка на луну, если пробел на клавиатуре играет в доту?", 
	[
		new Answer("Пизда копчённому", 0),
		new Answer("Куда там лукашенко летит?", 1), 
		new Answer("Со скоростью медведя", 0),
		new Answer("10", 0)
	]),

	new Question("2 + 2 * 2 * 2 - 2 / 2 + 2 * 2 / 2 - 0 = ?", 
	[
		new Answer("чё", 0),
		new Answer("чё", 1),
		new Answer("чё", 0),
		new Answer("чё", 0)
	]),
    
    new Question("Кем вы хотите стать, когда вырастете?", 
	[
		new Answer("Президентом", 0),
		new Answer("Навальным", 0),
		new Answer("Шлюхой", 1),
		new Answer("ОМОНОМ", 0)
	]),
    
    new Question("Что вы будете делать с миллионом долларов?", 
	[
		new Answer("Нюхать кокс", 0),
		new Answer("Нюхать кокс и ебать глориу из мадагаскара", 0),
		new Answer("Ходить по мелману", 1),
		new Answer("Пить чай из кончи", 0)
	]),
    
    new Question("Если бы вам разрешили устроить парад, то какой бы это был парад?", 
	[
		new Answer("Гей парад", 0),
		new Answer("Парад из геев", 0),
		new Answer("Парад геев", 1),
		new Answer("Парад Навального", 0)
	]),
    
    new Question("Что вы скажете своим детям перед смертью?", 
	[
		new Answer("Ебать лохи...", 0),
		new Answer("НЮХАЙТЕ БЕБРУ!!11", 0),
		new Answer("Кто такой вжух?", 1),
		new Answer("300...", 0)
	]),
    
    new Question("Я правда толстая?", 
	[
		new Answer("Конечно нет", 0),
		new Answer("Конечно да", 0),
		new Answer("Ты кто такая блять...", 0),
		new Answer("Для начала скинь 600 кг.", 1)
	]),
    
        new Question("Был красный цвет, пришёл негр, перекрасил в синий. В чём отсылка?", 
	[
		new Answer("Оксимирон и ЛСП - Безумие", 1),
		new Answer("Да", 0),
		new Answer("Нет", 0),
		new Answer("Я правда толстая?", 0)
	])
];

// Сам тест
const quiz = new Quiz(1, questions, results);

Update();

// Обновление теста
function Update()
{
	// Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		// Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		// Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		// Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		// Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		// Прикрепляем события к новым кнопкам
		Init();
	}
	else
	{
		// Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
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
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		// Иначе просто подсвечиваем зелёным ответ у чела
		btns[index].className = "button button_correct";
	}

	// Ждём секунду и обновляем тест (по приколу типа, ладно, это оч важно(нет))
	setTimeout(Update, 1000);
}