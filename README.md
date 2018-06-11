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

Em breve vou disponibilizar uma instância online para queries pela comunidade