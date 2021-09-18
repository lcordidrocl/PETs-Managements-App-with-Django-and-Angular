from datetime import datetime

def getAge(self, birthDate):
    date = datetime.strptime(birthDate, '%Y-%m-%d')
    age = datetime.today().year - date.year
    return age
        
