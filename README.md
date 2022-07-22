# <p align = "center"> Driven Pass </p>

<p align="center">
   <img src="https://user-images.githubusercontent.com/72531277/178094665-f46c6a55-c821-42a0-bb9c-d5dd5f2d69fa.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-saulo victor-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/saulo775/drivenPass-back?color=4dae71&style=flat-square" />
</p>


##  Descrição

Navegar na internet pode ser uma atividade muito divertida, mas ao mesmo tempo, muito perigosa. Inúmeros estudos e levantamentos (nacionais e internacionais) mostram que o número de golpes virtuais não para de crescer. O que levanta a questão: como nos proteger?

Existem várias formas diferentes de se proteger. Tudo começa com o uso de senhas diferentes e seguras. Para uma senha ser segura, ela deve conter vários caracteres e números misturados, sem contar que o quanto mais longa ela for, melhor.

Só que como vamos memorizar senhas gigantes e sem significado semântico? É para resolver essa dor que os gerenciadores de senhas surgiram! Com eles, criamos apenas uma senha “mestra” e todas as outras senhas ficam gravadas em segredo! Logo, quando precisamos dela, basta lembrar da senha “mestra”!
***

##  Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript

***

## Rotas

```yml
POST /sign-up
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum"
}
```
    
```yml 
POST /sign-in
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "password": "loremipsum"
    }
```
    
```yml 
POST /credentials (autenticada)
    - Rota para cadastrar novas credenciais
    - headers: { "Authorization": "Bearer $token" }
    - body: {
	"title": "loren ipsun",
	"url": "https://github.com/loren",
	"username": "github",
	"password": "loren123"
}
```

```yml 
GET /credentials (autenticada)
    - Rota para listar todos as credenciais
    - query params: {"credentialId": 12}
    - headers: { "Authorization": "Bearer $token" }
    - body: {
}
```

```yml 
DELETE /credentials (autenticada)
    - Rota para deletar uma credencial
    - params: {"credentialId": 12}
    - headers: { "Authorization": "Bearer $token" }
    - body: {
}
```



```yml 
POST /notes (autenticada)
    - Rota para cadastrar novas safe notes
    - headers: { "Authorization": "Bearer $token" }
    - body: {
	"title": "loren ipsun",
	"annotation": "loren ipsim dollor assiment dollor."
}
```

```yml 
GET /notes (autenticada)
    - Rota para listar todos as credenciais
    - query params: {"noteId": 12}
    - headers: { "Authorization": "Bearer $token" }
    - body: {
}
```

```yml 
DELETE /notes (autenticada)
    - Rota para deletar uma nota
    - params: {"notelId": 12}
    - headers: { "Authorization": "Bearer $token" }
    - body: {
}
```



```yml 
POST /cards (autenticada)
    - Rota para cadastrar novos cartões
    - headers: { "Authorization": "Bearer $token" }
    - body: {
	"title": "cartão prime",
	"cardNumber": "123456789",
	"username": "github",
	"securityCode": "123",
	"expirationDate": "12/2026",
	"password": "senha123",
	"isVirtual": false,
	"type": "both"
}
```

```yml 
GET /cards (autenticada)
    - Rota para listar um ou todos os cartões
    - query params: {"cardId": 12}
    - headers: { "Authorization": "Bearer $token" }
    - body: {
}
```

```yml 
DELETE /cards (autenticada)
    - Rota para deletar um cartão
    - params: {"cardId": 12}
    - headers: { "Authorization": "Bearer $token" }
    - body: {
}
```


```yml 
POST /wifi (autenticada)
    - Rota para cadastrar novas redes wifi
    - headers: { "Authorization": "Bearer $token" }
    - body: {
	{
	"title": "titulo daora",
	"networkName": "rede 2",
	"password": "loren12345"
}
}
```

```yml 
GET /wifi (autenticada)
    - Rota para listar uma ou todas as redes wifi
    - query params: {"wifiId": 12}
    - headers: { "Authorization": "Bearer $token" }
    - body: {
}
```

```yml 
DELETE /wifi (autenticada)
    - Rota para deletar uma rede wifi
    - params: {"wifiId": 12}
    - headers: { "Authorization": "Bearer $token" }
    - body: {
}
```


***

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o [node], então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/saulo775/drivenPass-back
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm run dev
```
