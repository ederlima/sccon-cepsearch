# SCCON - Consulta CEP

Projeto de teste para seleção de front-end developer para a SCCON - Tecnologia Geoespacial
Por Eder Lima (eder@ederlima.com.br)
Data: 15/12/2020

## Instalação

    git clone https://github.com/ederlima/sccon-cepsearch.git
    npm install

## Servidor de desenvolvimento (Abrir em http://localhost:4200)

    ng serve

## Build & Deploy
**Realize o Build**

    ng build --prod

**Deploy em servidor local**
Copie o a pasta 'cepsearch' em 'dist' e coloque na pasta pública do seu servidor local.
Atenção:
Para servidor com domínio comum e subpastas, ex: **http://localhost/cepsearch**, é necessário alterar o basehref para o nome do projeto no index.html, ex:

    <base href="/cepsearch/">

## Pontos positivos

 - O projeto utiliza o Bootstrap 4 para formatação da Grid responsiva e
   tabela de resultados;
 - O menu não utiliza dependências, é um    componente criado
   exclusivamente dentro do projeto;
 - O Formulário de    busca valida o cep e oferece máscara;
 - Os módulos são carregados usando LazyLoading e com preloadStrategy para garantir um carregamento rápido para o usuário
 - Módulos de componentes compartilhados e reaproveitáveis
 - Folhas de estilos utilizam SASS
 - Responsivo até largura mínima de 320px
 - Dados persistidos (somente leitura) para histórico no serviço Mocky.io
 - Mensagens para o usuário (Modal) sobre as ações e tratamento de erros


## Pontos a melhorar

 - Animações entre rotas
 - Animações ao Adicionar/Remover
 - Refatoração da tabela de resultados para um componente mais personalizado que responda no responsivo como um card

## Observações

 - Os componentes lógicos são as próprias rotas, que detém os estados e controlam os componentes controlados, não há necessidade de encapsular um componente lógico pelo tamanho da aplicação
