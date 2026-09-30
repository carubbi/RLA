<img src="../imgs/UNIFOR_logo1b.png" width="400"> 

# Raciocínio Lógico Algorítmico: Aula 8
Orientador: Prof. Me Ricardo Carubbi

# Exercícios Beecrowd: Funções e algoritmos clássicos

## Objetivo
Esta lista reúne exercícios do Beecrowd que podem ser trabalhados após a introdução de:

- funções
- contadores e acumuladores
- algoritmos de fatorial
- sequência de Fibonacci
- testes de primalidade
- geração de sequências
- conversão de base

Mesmo quando o enunciado não exige explicitamente funções, a recomendação didática é organizar a solução com funções sempre que isso deixar o algoritmo mais claro.

O foco é praticar esses temas sem exigir, neste momento:

- vetores
- matrizes
- recursão
- ordenação mais avançada
- estruturas de dados

## Sequência de retomada: um, dois e três parâmetros

Compare cada solução sequencial com a nova versão que usa uma função. Em todas, a função recebe números e retorna o cálculo; a leitura com `prompt`, a conversão da entrada e a formatação da saída permanecem no programa principal.

| Ordem | Exercício | Solução original | Nova solução | Função |
| --- | --- | --- | --- | --- |
| 1 | `1002` Área do Círculo | [BEE1002.ts](../../exercicios/BEE1002.ts) | [BEE1002_funcao.ts](../../exercicios/BEE1002_funcao.ts) | `calcularAreaCirculo(raio: number): number` |
| 2 | `1014` Consumo | [BEE1014.ts](../../exercicios/BEE1014.ts) | [BEE1014_funcao.ts](../../exercicios/BEE1014_funcao.ts) | `calcularConsumo(dist: number, litros: number): number` |
| 3 | `1079` Médias Ponderadas | [BEE1079.ts](../../exercicios/BEE1079.ts) | [BEE1079_funcao.ts](../../exercicios/BEE1079_funcao.ts) | `calcularMediaPonderada(a: number, b: number, c: number): number` |

No `1079`, a chamada da função se repete para cada caso de teste. Isso permite retomar parâmetros e retorno antes de discutir reutilização dentro de um laço.

## Validação e cálculo em funções

Depois da sequência inicial, retome exercícios em que uma função devolve `boolean` para decidir qual cálculo executar. A leitura e a saída continuam no programa principal.

| Ordem | Exercício | Solução original | Nova solução | Funções |
| --- | --- | --- | --- | --- |
| 4 | `1117` Validação de Nota | [BEE1117.ts](../../exercicios/BEE1117.ts) | [BEE1117_funcao.ts](../../exercicios/BEE1117_funcao.ts) | `notaValida` e `calcularMedia` |
| 5 | `1043` Triângulo | [BEE1043.ts](../../exercicios/BEE1043.ts) | [BEE1043_funcao.ts](../../exercicios/BEE1043_funcao.ts) | `formaTriangulo`, `calcularPerimetro` e `calcularAreaTrapezio` |

## 1. Exercícios mais diretamente ligados aos temas da aula

- `1153` Fatorial Simples
- `1151` Fibonacci Fácil
- `1165` Número Primo
- `1143` Quadrado e ao Cubo
- `1144` Sequência Lógica

## 2. Exercícios indicados para trabalhar funções
Mesmo que possam ser resolvidos sem função, são bons candidatos para separar o algoritmo em partes menores.

- `1153` Fatorial Simples
- `1151` Fibonacci Fácil
- `1165` Número Primo
- `1078` Tabuada
- `1079` Médias Ponderadas

## 3. Exercícios indicados para contagem, soma e multiplicação
São adequados para treinar variáveis de controle, acumuladores e atualização correta de estados.

- `1071` Soma de Ímpares Consecutivos I
- `1079` Médias Ponderadas
- `1094` Experiências
- `1099` Soma de Ímpares Consecutivos II
- `1153` Fatorial Simples
- `1143` Quadrado e ao Cubo

## 4. Exercícios indicados para sequências e geração de termos

- `1143` Quadrado e ao Cubo
- `1144` Sequência Lógica
- `1146` Sequências Crescentes
- `1151` Fibonacci Fácil

## 5. Exercícios indicados para divisibilidade e números primos

- `1165` Número Primo

## 6. Conversão e representação numérica

A conversão de bases é apresentada nesta aula. O BEE1193 foi realocado para a Aula 9 porque a solução percorre os algarismos por índice.

## 7. Exercícios por aplicação didática

### 7.1 Reutilização de código com funções
- `1078` Tabuada
- `1079` Médias Ponderadas
- `1153` Fatorial Simples
- `1151` Fibonacci Fácil
- `1165` Número Primo

### 7.2 Acumuladores de soma e produto
- `1071` Soma de Ímpares Consecutivos I
- `1094` Experiências
- `1099` Soma de Ímpares Consecutivos II
- `1153` Fatorial Simples

### 7.3 Geração de sequências
- `1143` Quadrado e ao Cubo
- `1144` Sequência Lógica
- `1146` Sequências Crescentes
- `1151` Fibonacci Fácil

### 7.4 Teste de divisibilidade
- `1165` Número Primo

## 8. Melhores exercícios para começar a aula
Se a proposta for iniciar com problemas mais simples e próximos dos exemplos vistos em sala, os mais adequados são:

1. `1153` Fatorial Simples
2. `1151` Fibonacci Fácil
3. `1165` Número Primo
4. `1143` Quadrado e ao Cubo

## 9. Progressão sugerida de dificuldade

### 9.1 Muito fáceis
- `1143` Quadrado e ao Cubo
- `1153` Fatorial Simples

### 9.2 Fáceis
- `1151` Fibonacci Fácil
- `1078` Tabuada
- `1079` Médias Ponderadas
- `1144` Sequência Lógica

### 9.3 Intermediários para iniciantes
- `1165` Número Primo
- `1146` Sequências Crescentes
- `1094` Experiências
- `1099` Soma de Ímpares Consecutivos II

## 10. Observações didáticas

- `1153` é o melhor problema para consolidar o padrão de produto acumulado.
- `1151` é adequado para treinar atualização ordenada de variáveis.
- `1165` é uma boa introdução a testes de divisibilidade e decomposição em função auxiliar.
- `1143` e `1144` são bons para treinar funções simples que geram padrões de saída.
- `1078` e `1079` podem ser reaproveitados para mostrar que funções também servem para organizar problemas já conhecidos.

## Exercício realocado da Aula 6

- `2626` Turma do JB6: separar a regra de vitória em uma função e repetir as partidas até o fim da entrada.

## Fontes
- Categoria Iniciante do Beecrowd: https://judge.beecrowd.com/en/questions/categories/1
