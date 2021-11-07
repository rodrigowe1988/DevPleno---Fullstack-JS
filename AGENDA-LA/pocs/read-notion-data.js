require('dotenv').config()

//extraindo o Client de dentro do notionhq/client
const { Client } = require('@notionhq/client')

const read = async() => {
	const notion = new Client({
		auth: process.env.NOTION_SECRET
	})

	const data = await notion.databases.query({
		database_id: 'f5e9cd8a19c54fa0b98d6cea438e8321',
		page_size: 100,
	})
	data.results.forEach((result) => {
		const blockedDate = result.properties.Date.date.start
		console.log(blockedDate);
	})
}

read();

process.env.NOTION_SECRET
console.log(process.env.NOTION_DB_AGENDA_NEG)
