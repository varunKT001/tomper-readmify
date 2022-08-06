import { controller, get } from '@varuntiwari/express-ts-decorators';
import { templatesInfo } from '../data/templatesInfo';
import { Request, Response } from 'express';
import { promises as fs } from 'fs';
import path from 'path';

@controller('/template')
class TemplateController {
  @get('/')
  async getTemplateInfo(req: Request, res: Response) {
    const name = req.query.name || '';

    if (typeof name !== 'string') return;

    const { acceptedFields } = templatesInfo[name];

    const filePath = path.join(__dirname, `../../templates/${name}.ejs`);

    const templateString = await fs.readFile(filePath, 'utf-8');

    return res.status(200).json({
      templateString,
      acceptedFields,
    });
  }
}
