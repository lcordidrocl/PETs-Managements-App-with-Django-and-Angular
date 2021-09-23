# Pet Management APP: Django and Angular

## About the App
This is a simple Pet management Applcation.
A Pet is defined by it's birthdate and it's Name.
<br>
<br>

### Search for Existing pets:
A user can search for Pets defined in the system, spcifying the Pet's Name or the Pet's age that it is interested in.

### Register new pets:
There is a management section that allows adding new pets, and deleting existing ones.
In order to add a new pet, user must define the new pet name and the pet's date of birth.

Not sure about the pet's birthdate?
Just check the aproximated checkbox! we will keep track of it.
<br>
<br>

### Remove existing pets
Want to remove pets from our registry ? 

In order to delete a pet, the user specify the Pet's name and the Pet's birthdate, which are, as mentioned above, the characteristics that define a pet.

Navigate to the Manage Pets section, and search for existing Pets based on those properties.

Just hit that trash button for those pets you don't want in the system anymore!
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

Pet registration could be improved, adding validation to the pet name, like the max length it allows. 
It would be nice to add the max date allowed for the pet's birthdate. (the app currently allows a pet to be registered with a date greater than today, which makes no sense at all)

Delete Mechanism might not be the most intuitive approach. It requires a pre-search in which the user needs to know the exact day of birth. So, it needs to use the search section in first place.
Delete was first part of the search functionalty, though it was moved to the managment section to be consistent with the different views the app offers, and promote separete of concerns. 

The app was tested with few pets, if this app is thought to be used with a big number of pets, the search section could be improved using pagination.

Adding and Deleting new pets were put in a different view taking that in count, so the new pets or the deleted ones do not interfer with a paginated view.
<br>
<br>

## Ubuntu installation steps

In order to run locally this application, we need to clone the git repository and run the docker compose command.
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





