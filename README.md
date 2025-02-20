# SamuraiBS

**SamuraiBS** é um projeto de aprendizado desenvolvido para testar e explorar as funcionalidades da ferramenta de automação de testes **Cypress**. Este projeto simula uma aplicação de barbershop, permitindo que os usuários experimentem o agendamento de serviços de cabelo e barba, enquanto praticam a escrita de testes end-to-end.

## Objetivo do Projeto

O principal objetivo do SamuraiBS é proporcionar um ambiente de prática e aprendizado para automação de testes, utilizando Cypress. Os desenvolvedores poderão entender melhor como criar testes eficazes, gerenciar interações com a interface e validar funcionalidades da aplicação.

## Funcionalidades

- **Agendamento de Serviços**: Simula a capacidade de agendar serviços de cabelo e barba.
- **Gerenciamento de Perfis**: Permite a simulação do gerenciamento de perfis de usuários, incluindo informações de contato e histórico de agendamentos.
- **Testes Automatizados**: Utiliza Cypress para criar e executar testes automatizados que verificam a funcionalidade da aplicação e a experiência do usuário.

## Tecnologias Utilizadas

- **Node.js**: v20.15.0
- **Cypress**: v14.0.3
- **Banco de Dados**: [Neon](https://neon.tech) (banco de dados online)

## Variáveis de Conexão com o Banco de Dados

As variáveis de conexão com o banco de dados estão sendo salvas localmente e temporariamente. Certifique-se de configurar as variáveis necessárias para que a aplicação funcione corretamente.

### Exemplo de Variáveis de Ambiente

```bash
export DB_USER=seu_usuario
export DB_PASSWORD=sua_senha
export DB_HOST=seu_host
export DB_PORT=5432
export DB_NAME=seu_banco_de_dados
export DB_SSL=true
