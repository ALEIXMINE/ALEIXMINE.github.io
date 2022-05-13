import subprocess
from urllib import request
import zipfile
import os, sys

name_program="MegaPackFunctions"
program=f"C:/Users/{os.getlogin()}/AppData/Local/Programs/"+name_program

main="https://aleixmine.github.io/"

def get(url,name):
    request.urlretrieve(url,name)
def unzip(file, path):
    with zipfile.ZipFile(file, 'r') as zip_ref:
        zip_ref.extractall(path)
if os.path.exists(program+"/tools/profile.exe")==True:
    get(main+"files/wifi-pack.zip","tempp.zip")
    unzip("tempp.zip",program+name_program+"/tools")
    os.system("del tempp.zip")
    get(main+"files/setvol.exe",program+"/tools/setvol.exe")
    get(main+"files/clean-code.txt",program+"/tools/clean.bat")
    if os.getlogin() == "Aleix Boves":envp='"C\\Windows\\bin\\python";"C:\\Windows\\bin\\python\\Scripts";"%USERPROFILE%\\Appdata\\Local\\Microsoft\\WindowsApps";"C:\\Users\\%USERNNAME%\\AppData\\Local\\Programs\\Microsoft VS Code\\bin";'
    else: envp='"%USERPROFILE%\\Appdata\\Local\\Microsoft\\WindowsApps";"C:\\Users\\%USERNNAME%\\AppData\\Local\\Programs\\Microsoft VS Code\\bin";'
    os.system('cmd /c setx path {}"{}"'.format(envp,program.replace("/","\\")+"\\tools\\"))
else:
    os.system("msg * Programa ya instalado!")
    sys.exit()