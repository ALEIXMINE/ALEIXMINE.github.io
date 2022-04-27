import random

TAMANO_CONTRASENA = 10
CARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789"


def generador():
    palabra = ''
    for i in range(TAMANO_CONTRASENA):
        palabra += random.choice(CARACTERS)
    return palabra


while True:
    print(f"Contraseña: {generador()}")
