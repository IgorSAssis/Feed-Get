<p align="center">
  <img src="https://github.com/IgorSAssis/Feed-Get/blob/main/.github/logo.svg" width="400" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NLW-Letmeask-%23835afd" />
  <img src="https://img.shields.io/github/commit-activity/m/IgorSAssis/Feed-Get?color=835afd" />
  <img src="https://img.shields.io/github/last-commit/IgorSAssis/Feed-Get?color=835afd"></img> 
  <img src="https://img.shields.io/github/languages/top/IgorSAssis/Feed-Get?color=774DD6&logo=Typescript&logoColor=blue"></img>
  <img src="https://img.shields.io/github/repo-size/IgorSAssis/Feed-Get?color=774DD6"></img>
  <img src="https://img.shields.io/github/license/IgorSAssis/Feed-Get?color=774DD6"></img>
</p>

> :clipboard: A project designed to help people collect feedbacks from their users :clipboard:

## :pushpin: Table of contents
* [Screenshots](#Screenshots)
* [Technologies](#Technologies)
* [Deployment](#Deployment)
* [How to run](#HowToRun)
* [License](#License)

<a name="Screenshots" />

## :camera: Screenshots

<p align="center">
  <a href="https://github.com/IgorSAssis/Feed-Get/blob/main/.github/home-light-theme.png">
    <img src="https://github.com/IgorSAssis/Feed-Get/blob/main/.github/home-light-theme.png" width="400"/>
  </a>
  <a href="https://github.com/IgorSAssis/Feed-Get/blob/main/.github/feedback-form-light.png">
    <img src="https://github.com/IgorSAssis/Feed-Get/blob/main/.github/feedback-form-light.png" width="400"/>
  </a>
    <a href="https://github.com/IgorSAssis/Feed-Get/blob/main/.github/home-dark-theme.png">
    <img src="https://github.com/IgorSAssis/Feed-Get/blob/main/.github/home-dark-theme.png" width="400"/>
  </a>
  <a href="https://github.com/IgorSAssis/Feed-Get/blob/main/.github/feedback-form-dark.png">
    <img src="https://github.com/IgorSAssis/Feed-Get/blob/main/.github/feedback-form-dark.png" width="400"/>
  </a>
</p>

<a name="Technologies" />

## :computer: Technologies used
* [Node.js](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [Prisma](https://www.prisma.io/)
* [Jest](https://jestjs.io/pt-BR/)
* [PostgreSQL](https://www.postgresql.org/)

<a name="Deployment" />

## :package: Deployment
### Server
* [Railway](https://railway.app/)

### Website
* [Vercel](https://vercel.com/)

<a name="HowToRun" />

## 📋 How to run

First of all, clone this project
```shell
$ git clone https://github.com/IgorSAssis/Feed-Get
```

### 🖥 Server
```shell
$ cd server
$ npm install
```
Create a **.env** file and add the following settings:
```shell
DATABASE_URL=postgresql://<USER>:<PASSWORD>@localhost:5432/feedbacks
```
Then generate prisma artifacts and run migrations with
```shell
$ npx prisma generate
$ npx prisma migrate dev
```
Finally, start the server with
```shell
$ npm run dev
```

### 🌐 Website
```shell
$ cd web
$ npm install
```

Create a **.env.local** file and add the following settings:
```shell
VITE_API_URL=http://localhost:3333
```

Finally, start the server with
```shell
$ npm run dev
```

<a name="License" />

## :page_facing_up: Licenses
This project is under the  [MIT license](https://github.com/IgorSAssis/Feed-Get/blob/master/LICENSE)
