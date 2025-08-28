const getweather = async() => {
    const city = document.getElementById('input').value;
    const name = document.getElementById('name');
    const temp = document.getElementById('temp');
    const desc = document.getElementById('desc');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eed41d8474d6f49e645f8159b68cdf49`);
        const data = await response.json();

        if (response.ok) {
            name.innerText = data.name;
            temp.innerText = data.main.temp + " °C";
            desc.innerText = data.weather[0].main;

            Background(data.weather[0].main);
        } else {
            throw new Error("City not found");
        }
    } catch (error) {
        alert("City not found");
    }
};

document.getElementById('Search').addEventListener('click', getweather);

function Background(Condition) {
    let backgroundImage;

    const cond = Condition.toLowerCase();

    if (cond === 'clear') {
        backgroundImage = 'url("https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg")';
    } else if (cond === 'clouds') {
        backgroundImage = 'url("https://cdn.pixabay.com/photo/2015/12/25/13/03/sky-1107579_1280.jpg")';
    } else if (cond === 'rain') {
        backgroundImage = 'url("https://cdn.pixabay.com/photo/2018/03/11/12/14/raindrops-3216607_1280.jpg")';
    } else if (cond === 'snow') {
        backgroundImage = 'url("https://cdn.pixabay.com/photo/2022/12/10/11/05/snow-7646952_1280.jpg")';
    } else {
        backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_1280.jpg")';
    }

    document.body.style.backgroundImage = backgroundImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
}