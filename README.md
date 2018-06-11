# Salários Unicamp

Você sabia que os salários da Unicamp são públicos?

Nesse repo eu coletei os arquivos TXT disponibilizados em https://www.unicamp.br/unicamp/informacao/remuneracao-unicamp

Eles estão salvos na pasta txts/ no format YYYY-MM.txt

Você pode clonar esse repo para analisá-los.

Se quiser importá-los para uma instância MongoDB basta ter `node` e `mongo` instalados e rodar:
1. `npm i`
2. `node parseTXTs`
3. `mongoimport -d unicamp -c salarios --drop compiled.json`
4. `mongo unicamp`

## Sobre os dados
(Retiradas do site da Unicamp)

DESCONTOS LEGAIS
- IAMSPE
- Previdência – SPPREV (servidor estatutário)
- Previdência – INSS (servidor celetista)
- Previdência Complementar – SP PREVCOM (opcional)
- Imposto de Renda
- Pensão Alimentícia (processo judicial)
- Contribuição Sindical Anual Obrigatória

INDENIZAÇÕES
- 1/3 sobre dias de férias (ativos)
- Antecipação de 50% do 13º salário
- Abono de permanência (ativos)
- Auxílio criança
- Auxílio educação especial
 
1. A planilha com as remunerações é composta de ativos e inativos;

2. Todas as remunerações estão no limite do teto constitucional, conforme previsão do artigo 37, XI, da Constituição Federal de 1988;

3. Todas as parcelas da remuneração que excedem o subsídio do Governador estão congeladas de acordo com a decisão TC 4001/026/06, proferida pelo Tribunal de Contas do Estado de São Paulo;

4. Em cumprimento à decisão proferida no acórdão de 03 de agosto de 2015, pela 6º Câmara de Direito Público do TJSP, referente ao processo 1016686-14.2014.8.26.0114, para os docentes serão mantidos os pagamentos de plantões e verbas assemelhadas, decorrentes da prestação de serviço extraordinário, ainda que ultrapassado o valor do subsídio do Governador;

5. Os descontos relativos às consignatárias autorizadas pelo servidor não foram computados (associações, sindicatos, operações bancárias, etc)

## Acesso público
Em breve vou disponibilizar uma instância online para queries pela comunidade