const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_FORM_TOKEN,
});

export default async function handler(req:any, res:any) {
  console.log('reqqqqqqqq %o', req);
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { name, phone, email, check, company, employ, category } = JSON.parse(req.body);
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_FORM_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Phone: {
          rich_text: [
            {
              text: {
                content: phone,
              },
            },
          ],
        },
        Email: {
          rich_text: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        Company: {
          rich_text: [
            {
              text: {
                content: company,
              },
            },
          ],
        },
        Employ: {
          rich_text: [
            {
              text: {
                content: employ,
              },
            },
          ],
        },
        Category: {
          rich_text: [
            {
              text: {
                content: category,
              },
            },
          ],
        },
      },
    });
    res.redirect(302, '/api/notionForm')
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' });
  }
}