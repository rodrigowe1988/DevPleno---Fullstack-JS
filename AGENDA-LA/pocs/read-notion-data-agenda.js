require('dotenv').config()

//extraindo o Client de dentro do notionhq/client
const { Client } = require('@notionhq/client')

const read = async() => {
	const notion = new Client({
		auth: process.env.NOTION_SECRET
	})

	const data = await notion.databases.query({
		database_id: '0945b1d248b241afb1953e244a4c735c',
		page_size: 100,
	})
	data.results.forEach((result) => {
		const properties = result.properties
		console.log(properties);
	})
}

read();

process.env.NOTION_SECRET
console.log(process.env.NOTION_DB_AGENDA_NEG)
