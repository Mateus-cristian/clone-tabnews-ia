# AGENTS.md

## Diretrizes gerais

- Entenda a solicitação e analise o contexto relevante antes de fazer alterações.
- Consulte o código, a documentação e a configuração existentes como fontes de verdade.
- Siga os padrões de estrutura, nomenclatura e estilo já adotados no projeto.
- Quando algum detalhe não estiver definido, faça apenas suposições seguras e compatíveis
  com o escopo. Peça esclarecimento quando uma decisão puder mudar significativamente o
  resultado.
- Não presuma requisitos, funcionalidades ou restrições que não estejam documentados ou
  presentes na solicitação.

## Escopo das alterações

- Faça a menor alteração coerente que resolva completamente a tarefa.
- Não altere arquivos ou comportamentos sem relação com a solicitação.
- Preserve o comportamento existente, salvo quando a mudança for intencional.
- Respeite alterações já presentes no diretório de trabalho, mesmo que ainda não tenham
  sido versionadas.
- Evite refatorações amplas durante correções ou funcionalidades pequenas.
- Procure implementações existentes antes de criar novas abstrações, utilitários ou
  componentes.
- Adicione dependências somente quando houver uma necessidade clara e quando as soluções
  existentes não forem suficientes.
- Atualize a documentação quando a mudança afetar comportamento, configuração ou forma de
  uso do projeto.

## Qualidade do código

- Priorize correção, clareza e manutenção em vez de soluções excessivamente sofisticadas.
- Use nomes que expressem a intenção do código e mantenha cada unidade com uma
  responsabilidade bem definida.
- Evite duplicação, mas não crie abstrações antes de existir uma necessidade concreta.
- Trate erros de forma explícita e coerente com os padrões existentes.
- Não esconda falhas com retornos silenciosos, valores genéricos ou capturas amplas de
  exceções.
- Considere casos de borda e compatibilidade com o comportamento existente.
- Adicione comentários apenas quando explicarem uma decisão ou restrição que não seja
  evidente no próprio código.
- Considere acessibilidade, segurança, desempenho e experiência de uso sempre que forem
  relevantes para a alteração.

## Segurança e dados

- Não adicione chaves, senhas, tokens, arquivos `.env` ou outros dados sensíveis ao Git.
- Não exponha informações sensíveis em mensagens de erro, logs, exemplos ou testes.
- Valide dados recebidos nas fronteiras do sistema e não confie apenas na validação da
  interface.
- Evite ações destrutivas quando o alvo ou o impacto não estiverem claros.
- Não enfraqueça controles de segurança para contornar erros ou facilitar a implementação.

## Validação

- Descubra e execute as validações disponíveis e relevantes para a área alterada.
- Ajuste o nível de validação ao risco e ao alcance da mudança.
- Adicione ou atualize testes quando houver mudança de comportamento e a estrutura do
  projeto oferecer suporte a isso.
- Revise o resultado final em busca de código morto, mensagens de depuração, arquivos
  gerados e alterações não relacionadas.
- Não afirme que uma validação foi executada se ela não foi realizada com sucesso.
- Caso alguma validação não possa ser executada, informe o motivo e o risco restante.

## Comunicação da entrega

- Informe de forma objetiva o que foi alterado e o motivo da mudança.
- Liste as validações realmente executadas e seus resultados.
- Destaque limitações, riscos conhecidos ou decisões relevantes para a continuidade do
  trabalho.
- Evite apresentar como concluída uma tarefa que ainda dependa de alguma ação necessária.
