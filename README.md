# Salários Unicamp

Origem dos dados: https://www.unicamp.br/unicamp/informacao/remuneracao-unicamp

Salve na pasta txts/ no format YYYY-MM.txt

Rode `node parseTXTs` e depois `mongoimport -d unicamp -c salarios --drop compiled.json`