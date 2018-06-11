'use strict'

// Parse TXT and export a JSON file
let fs = require('fs'),
	stream = fs.createWriteStream('compiled.json'),
	windows1252 = require('windows-1252')

for (let filename of fs.readdirSync('txts')) {
	let data = windows1252.decode(fs.readFileSync('txts/' + filename, 'binary')),
		match = filename.match(/^(\d{4})-(\d\d).txt$/),
		ano = Number(match[1]),
		mes = Number(match[2])

	for (let line of data.split('\r\n')) {
		if (!line) {
			continue
		}

		let fields = line.split(';').map(e => e.trim())
		stream.write(JSON.stringify({
			ano,
			mes,
			registro: fields[0],
			nome: fields[1],
			codigoArea: fields[2],
			area: fields[3],
			areas: Object.assign({}, fields[3].split('/')),
			cargo: fields[4],
			referencia: fields[5],
			bruto: readMoney(fields[6]),
			indenizacoes: readMoney(fields[7]),
			redutor: readMoney(fields[8]),
			descontos: readMoney(fields[9]),
			liquido: readMoney(fields[10])
		}) + '\n')
	}
}

stream.end()

function readMoney(str) {
	return Number(str.replace(',', '.'))
}