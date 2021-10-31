import os
from shutil import copyfile

pwd = os.path.abspath(os.getcwd())

for x in range(100):
    copyfile(pwd + "/public/images/default.jpg", pwd + "/public/images/" + str(x + 1) + ".jpg")

for x in range(100):
    copyfile(pwd + "/public/images2/default.jpg", pwd + "/public/images2/" + str(x + 1) + ".jpg")