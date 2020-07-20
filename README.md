<h1 align="center">
  Simple IoT
</h1>
<h4 align="center">🤖 My Hello World on IoT using Arduino 🤖</h4>

<p align="center">
  <img alt="GitHub language" src="https://img.shields.io/github/languages/top/leandrosouzaa/simple-iot">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leandrosouzaa/simple-iot.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/leandrosouzaa/simple-iot.svg">
  
  <a href="https://github.com/leandrosouzaa/simple-iot/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/leandrosouzaa/simple-iot.svg">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  
  <a href="https://github.com/leandrosouzaa/simple-iot/stargazers">
    <img alt="Repository" issues" src="https://img.shields.io/github/stars/leandrosouzaa/simple-iot?style=social" />                       </a>
</p>
                                                                                                                      
<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-clonagem">Clonagem e Debug</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-desenvolvedor">Desenvolvedor</a>
</p>                                                                                                                      

<p align="center">
    <img alt="printscreen" title="#app" width="100%" src="/files/mock.png" width="100%" />
</p> 

## Projeto 💻 
Uma pequena aplicação desenvolvida em Node, React e React-Native com a itenção de aprender um pouco mais sobre IoT enquanto prático o desenvolvimento full stack. 

## 👾 Tecnologias 
Foram utilizadas as seguintes tecnologias para o desenvolvimento do projeto
*  [React](https://github.com/facebook/react)
   >A declarative, efficient, and flexible JavaScript library for building user interfaces. https://reactjs.org
*  [React-Native](https://github.com/facebook/react-native)
   >A framework for building native apps with React. https://reactnative.dev
*  [Node.js](https://github.com/nodejs/node)
   >Node.js JavaScript runtime ✨🐢🚀✨ https://nodejs.org/
*  [Express](https://expressjs.com)
   >Fast, unopinionated, minimalist web framework for node. https://expressjs.com
*  [Jhonny-Five](https://github.com/rwaldron/johnny-five)
   >The JavaScript Robotics Programming Framework
   
## 👷‍♂️ Clonagem 
 * <b>Pré-Requisitos:</b> Para clonar e rodar esta aplicação você precisa configurar o ambiente para:
   - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
   - [NodeJs](https://nodejs.org/en/download/)
   - [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
   - [ReactJs](https://reactjs.org/docs/getting-started.html)
   - [React-Native](https://reactnative.dev/docs/getting-started)
   - [Jhonny-Five](https://github.com/rwaldron/johnny-five/wiki/Getting-Started)
 * <b>Circuito utilizado na aplicação:</b> Você pode visualizar ele em uma qualidade melhor [neste link](https://www.tinkercad.com/things/l8lk2AWqp5p-simple-iot).
      <img alt="printscreen" title="#app" width="100%" src="/files/circuito.png" width="100%" />
 * <b>Clonagem</b>
   - Com o Git instalado, execute o seguinte comando no terminal: <br />```git clone https://github.com/leandrosouzaa/simple-iot.git```
   - Aguarde o término de dowload, após a conslusão digite o comando a seguir para acessar o diretório do projeto: <br />```cd simple-iot```
 * <b>Backend</b>
   - Com o Yarn já instalado execute o seguinte comando para acessar o diretório do backend e instalar as dependências utilizadas:<br />```cd backend && yarn```
   - Enquanto aguarda a instalação dos pacotes verifique se a placa está conectada no computador com o circuito devidamente montado e confirme se cumpriu todos os pré-requisitos citados acima.
   - Com os passos anteriores já realizados inicie o servidor através do seguinte script: <br/>
   ```yarn dev```
   - Caso tudo ocorra como o planejado você irá visualizar a mensagem "API Online" no seu display LCD e os seguintes logs em seu terminal: <br />
   ```
   1595280495781 Available /dev/ttyUSB0  
   1595280495787 Connected /dev/ttyUSB0  
   1595280497438 Repl Initialized  
    >> Server Started in port 3333
   ```
 * <b>Web</b>
   - Abra um terminal no diretório clonado anteriormente (simple-iot).
   - Com o Yarn já instalado execute o seguinte comando para acessar o diretório do frontend e instalar as dependências utilizadas:<br />```cd web && yarn```
   - Enquanto aguarda a instalação dos pacotes verifique se cumpriu todos os pré-requisitos citados acima.
   - Após o término da execução, execute o seguinte comando para executar o servidor Web: <br /> ```yarn start```
   - Em seguida, irá abrir uma aba em seu navegador contendo a versão web da aplicação. Divirta-se!
   - <b>Atenção</b>: Para utilizar o cliente web da aplicação é necessário estar com o backend rodando.
* <b>Mobile</b>
   - Abra um terminal no diretório clonado anteriormente (simple-iot).
   - Com o Yarn já instalado execute o seguinte comando para acessar o diretório do frontend e instalar as dependências utilizadas:<br />```cd mobile && yarn```
   - Enquanto aguarda a instalação dos pacotes verifique se cumpriu todos os pré-requisitos citados acima.
   - Após o término da instalação dos pacotes, execute o comando a seguir para instalar a aplicação em seu dispositivo confome o sistema operacional do mesmo: <br />
   ```
   ## android
   yarn android
   
   ## ios
   yarn ios
   ```
  - Em outro terminal, execute este comando para iniciar o bundle da aplicação: <br /> ```yarn start```
  - Feito isso, basta aguardar e a aplicação irá iniciar em seu dispositivo. Divirta-se!
  - <b>Atenção</b>: Para utilizar o cliente mobile da aplicação é necessário estar com o backend rodando.
* <b>Aviso </b>: Talvez será necessário mudar o endereço da API. O mesmo se encontra no arquivo src/services/api de cada diretório (web e mobile).
* Caso tenha algum problema, sinta-se a vontade para [abrir uma issue neste repositório](https://github.com/leandrosouzaa/simple-iot/issues/new) que eu tentarei te ajudar ao máximo!
  
## 👨‍💻 Desenvolvedor 
 <table>
  <tr>
    <td>
      <img width="100px" src="https://avatars0.githubusercontent.com/u/51727533?s=460&u=db66dcd045f5e01193f7e162c4bbc193886ae348&v=4" />
    </td>
    <td>
      <b>Leandro Souza</b> <br />
      <span>Futuro Cientista da Computação pelo Instituto Federal<br /> de Educação, Ciência e Tecnologia de São Paulo.</span><br />
      <a href="https://github.com/leandrosouzaa">@leandrosouzaa</a>
    </td>
   </tr>
 </table>
<br />
<p align="center">Feito com 🖤 by <b>Leandro Souza</b></p>
