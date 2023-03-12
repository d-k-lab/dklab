// 노션 폼 API
// 백엔드 서버 만들기 전에 프론트에서 노션 API 테스트 하기 위해 만든 API
// 데이터 전송 정상 테스트 후에 백엔드 서버 작업 후 AWS에 서버리스로 배포 완료

/*
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
    // res.redirect(302, '/api/notionForm');
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' });
  }
}
*/