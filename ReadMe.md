# Pet Management APP: Django and Angular

## About the App
This application allows registering new pets, looking at existing ones, consulting pets by name, as well as seeing each pet's age.
<br>
<br>

### Register new pets:
User must define the new pet name and the pet's date of birth.

Not sure about the pet's birthdate?
Just check the aproximated checkbox! we will keep track of it.
<br>
<br>

### Remove existing pets
Want to remove pets from our registry ? 
Just hit the trash icon for that pet.
<br>
<br>

### For Developers
The backend of this APP is done with Python, using Django framework.
The UI is built with Angular.
The app is dockerized for easy portability.
<br>
<br>

### Things to Improve:
It would be great to make use of Reactive Forms instead of Template Driven forms.
Pet registration could be improved, adding validation to the pet name, like the max length it allows. It woyuld be nice to add the max date allowed for the pet's birthdate. (the app currently allows a pet to be registered with a date greater than today, which makes no sense at all)
<br>
<br>

## Ubuntu installation steps

In order to run locally this application, we need to clone the git repository and run the docker compose comamand.
The ubuntu system needs to have installed the following packages: git, docker and docker compose

if git is not installed then run this commands:
`sudo apt-get update`
`sudo apt install git`

Anyone can check if git is installed by running the command `git --version`

Docker compose depends on docker packages, so **first install docker** ( if not installed yet ) following the official documentation:
https://docs.docker.com/engine/install/ubuntu/

After docker was succesfully installed, follow the official documentation to install docker compose:
https://docs.docker.com/compose/install/

## Clone the repo
Once we have all dependencies installed, we are ready to clone the repository and run the application locally.
Find a directory that suits you to clone the repo.
We can create a new folder with the following commands:
<br>

- `mkdir petsAppRepository`

- `cd petsAppRepository`

this is the apps repository on GitHub:
https://github.com/lcordidrocl/PETs-Managements-App-with-Django-and-Angular

In order to clone it, just run the following command, with the current directory standing in the path we defined before (petsAppRepository in this example):
<br>

- `git clone https://github.com/lcordidrocl/PETs-Managements-App-with-Django-and-Angular.git`

After git finishes cloning the repo, all the files we need should have been populated in the folder 'PETs-Managements-App-with-Django-and-Angular'

At this point we are ready to **Start the application**.
<br>
Get sure we are standing in the root of the cloned repo. For that run the following command:
<br>

- `cd PETs-Managements-App-with-Django-and-Angular`

Standing in the root of the repository, run the docker compose command that will compose the application up:
<br> 

- `sudo docker-compose -f docker/docker-compose.yml up`

You will know when docker finishes building the app once you see the following messages in the console:

ui     | ** Angular Live Development Server is listening on 0.0.0.0:4200, open your browser on http://localhost:4200/ ** </br>
ui     | </br>
ui     | </br>
ui     | ✔ Compiled successfully. </br><br>

**That's All!**
<br>

### Open your browser on http://localhost:4200/ and have fun!

<br>
<br>
Thanks





