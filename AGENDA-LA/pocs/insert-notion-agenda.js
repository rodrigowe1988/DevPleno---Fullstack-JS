require('dotenv').config()

//extraindo o Client de dentro do notionhq/client
const { Client } = require('@notionhq/client')

const registro = {
	Paciente: {
		id: 'YzAK',
		type: 'rich_text',
		rich_text: [{ text: { content: 'Cláudio' } } ],
	},
	Confirmado: {
		id: 'mNk%3D',
		type: 'checkbox',
		checkbox: false },
	Date: {
	  id: 'zS%5Ds',
	  type: 'date',
	  date: { start: '2021-11-23T10:00:00.000-03:00', end: null }
	},
	Name: {
		id: 'title',
		type: 'title',
		title: [{ text: { content: 'Cláudio' } } ]
	}
}
console.log(registro)
//inserindo dados dentro do notion
const insert = async() => {
	const notion = new Client({
		auth: process.env.NOTION_SECRET
	})

	const inserted = await notion.pages.create({
		parent:{
			database_id: '0945b1d248b241afb1953e244a4c735c'
		},
		properties: registro,
	})
	//console.log(inserted);
/*
	const data = await notion.databases.query({
		database_id: '0945b1d248b241afb1953e244a4c735c',
		page_size: 100,
	})
	data.results.forEach((result) => {
		const properties = result.properties
		console.log(properties);
	})
*/
}
insert()

process.env.NOTION_SECRET
console.log(process.env.NOTION_DB_AGENDA_NEG)


