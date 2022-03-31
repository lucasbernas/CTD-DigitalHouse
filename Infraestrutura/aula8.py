from calendar import prmonth


print("Hello World")
nome = "lucas"
print(nome)

lista_alunos = ["Guilherme", "Lucas"]
print(lista_alunos[0])
lista_alunos.append("Belicio")
print(lista_alunos)
lista_alunos.remove("Guilherme")
print(lista_alunos)

tupla1 = (1, 2, 3)
tupla2 = (4,5,6)
print(tupla1)
tupla3 = tupla1 + tupla2
print(tupla3)

dados_pessoais = {
    'nome': 'Batman',
    'cidade': 'Gotham'
}

print(dados_pessoais['nome'])

dados_pessoais['veiculo'] = 'Batmovel'
print(dados_pessoais)

idade = 18

if idade >= 18 and idade == 17: 
    print("Pode entrar")
elif idade > 15 or idade == 16:
    print("Só pode ir na sorveteria")
else:
    print("não pode entrar")

print("passou do else")

