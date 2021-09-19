from datetime import datetime

def getAge(self, birthDate):
    age = datetime.today().year - birthDate.year
    return age
        
