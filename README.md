<h1 align='center'>❓☑ fullStackOverflow Developer API ☑❓</h1>
<p align='center'>API to record the questions and answers</p>

## Installation
  
        git clone https://github.com/patricia270/full-stack-overflow-developer.git
        npm i

## Start 
`npm run start:dev`

## Requests
+ POST /questions
    - body: 
    ```js
       {
          "question": "pergunta?",
          "student": "nome",
          "class": "turma",
          "tags": "tags"
        },
    ```
    - response:
    ```js
       {
	       "id": 123456
       },
    ```
    
+ GET /questions/:id
    - parameter: id (question id)
    - response:
        - answered question:
        
         ```js
           {	
              "question": "pergunta?",
              "student": "nome",
              "class": "turma",
              "tags": "tags"
              "answered": true,
              "submitAt": "2021-01-01 10:12"
              "answeredAt": "2021-01-01 10:30"
              "answeredBy": "nome de quem respondeu",
              "answer": "resposta" 
           }
        ```
        
        - unanswered question:
        
        ```js
         {
            "question": "pergunta?",
            "student": "nome",
            "class": "turma",
            "tags": "tags"
            "answered": false,
            "submitAt": "2021-01-01 10:12"
         }
        ```
        
+ POST /questions/:id
    - Each question can only be answered once
    - parameter: id (question id)
    - body: 
    ```js
       {
          "answer": "resposta" 
       }
    ```
+ GET /questions
   - response (only unanswered questions): 
   
    ```js
       [
          {
            "id": 1,
            "question": "pergunta?", 
            "student": "nome", 
            "class": "turma",
            "submitAt": "2021-01-01 10:12"
          },
      ]
    ```
 
+ POST /users
    - body: 
    ```js
       {
          "name": "nome",
          "class": "turma" 
       }
    ```
   - response: 
   
    ```js
       {
          "token": "1234-5678"
       }
    ```
+ GET /ranking
   - response (sorted by answers, LIMIT 10): 
   
    ```js
       [
          {
            "name": "nome",
            "answers": 15
          },
          {
            "name": "nome",
            "answers": 10
          },
       ]
    ```
    
+ PUT /questions/:id/up-vote
    - parameter: id (question id)
    - response: status code 200
   
+ PUT /questions/:id/down-vote
    - parameter: id (question id)
    - response: status code 200
