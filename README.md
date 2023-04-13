This README is not ready. Once it is, I'll translate it to English.
Este README não está pronto. Quando estiver, traduzirei para o Inglês.

# Gerador de Certificados

Este projeto é uma aplicação web que visa resolver o problema de geração automatizada de certificados e consequente envio por e-mail. Ainda que hajam ferramentas como o MALA-DIRETA do Word, os usuários sentem atritos em suas jornadas por não terem como conectar a geração com o envio de e-mail, ou seja, precisam investir ainda mais tempo e esforço.

A aplicação utiliza HTML, CSS e JavaScript puro, sem a necessidade de nenhum framework adicional.

# Como funciona

``` !IMPORTANTE: A aplicação não dispõe de banco de dados, logo, nenhum dos dados inseridos nela serão processados fora do computador do usuário. ```

O usuário define qual será a imagem utilizada como fundo do certificado, e em seguida adiciona textos estáticos que estarão presentes em todos os certificados e textos dinâmicos que serão diferentes para todos os certificados.

A geração dos certificados é feita automaticamente por meio do JavaScript, que lê os dados da planilha do Excel provida pelo usuário e utiliza-os para preencher os campos do certificado. 

Os certificados podem ser salvos em um arquivo PDF ou enviados diretamente aos destinatários por e-mail.

# Como usar

## Usuário

## Desenvolvedor

Para utilizar a aplicação, basta clonar o repositório e abrir o arquivo index.html em um navegador. Certifique-se de ter uma planilha do Excel com os nomes dos usuários e as informações necessárias para preencher os campos do certificado.

Ao abrir a aplicação, insira suas informações no formulário e clique no botão de envio. Os certificados serão gerados automaticamente e estarão disponíveis para download ou envio por e-mail, dependendo da opção escolhida.

# Considerações finais

Sinta-se à vontade para contribuir com o projeto, fazendo um fork do repositório e enviando pull requests com melhorias e novas funcionalidades.

# Roteiro

A definir.

# Recursos Utilizados

- [Youtube | Thiago Pereira - Drag and Drop com Javascript](https://www.youtube.com/watch?v=tONadwAs_Hw)
- [Coding Beauty Dev | How to Get the Current Mouse Position in JavaScript](https://codingbeautydev.com/blog/javascript-get-mouse-position/)
- [Stack Overflow | addEventListener drop not firing](https://stackoverflow.com/questions/46668079/addeventlistener-drop-not-firing)
- [W3School | JavaScript and HTML DOM Reference](https://www.w3schools.com/jsref/)
- [MDN Web Docs | HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event)