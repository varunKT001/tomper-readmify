import { controller, get } from '@varuntiwari/express-ts-decorators';
import { skillBadges } from '../data';
import { Request, Response } from 'express';

@controller('/skill-badges')
class SkillBadgesController {
  @get('/')
  async getSkillBadges(req: Request, res: Response) {
    return res.status(200).json(skillBadges);
  }
}
