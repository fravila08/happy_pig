# The Happy Pig

The Happy Pig is a made up restaurant website with CRUD capabilities utilizing 2 Rapid Api's
to render content in the Front End.


## Tech Stack

**Client:** React, Rest API's, HTML, CSS, BootStrap

**Server:** Django, and PostgreSQL

<p align="left"> <a href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </a> <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.nginx.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>

## Visit

Go to https://fathehappypig.com to see this project deployed.


## Environment Variables

To run this project, you will need to add the following from the noun project into your 
environment variables to your .env file

**Your secret api keys for your both of your menu sections:**


`canadianrapidkey` 


`pizzarapidkey`


## Rapid API

#### Get all available meals
Click here to view the documentation https://rapidapi.com/hub

```http
const options = 
    {
    method: 'GET',
    url: 'https://themealdb.p.rapidapi.com/filter.php',
    params: {a: 'Canadian'},
    headers: {
        'X-RapidAPI-Key': `${keyOne}`,
        'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
    }
    };
    
    axios.request(options).then(function (response) {
        setMeals(response.data.meals)
        
    }).catch(function (error) {
        console.error(error);
    });

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `keyOne` | `string` | **Required**. Your Secret API key |




## Deployment

To deploy this project, first install requirements.txt then you need to create the data base 
with the following:

```bash
  createdb restaurant
```
Then go to the restaurant_front run the following:

```bash
  npm install
  npm run watch
```
Now head to restaurant_pro

```bash
  python3 manage.py makemigrations
  python3 manage.py migrate
```
Finally:

```bash
  python3 manage.py runserver
```


## Thanks for Stopping By!

Thank you for checking out this project, feel free to follow me for more projects like this. Also,
if you happen to need help with any projects you are currently working on, please let me know where
I can help.
