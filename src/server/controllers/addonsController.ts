import { controller, get } from '@varuntiwari/express-ts-decorators';
import { skillBadges, streaksThemes } from '../data';
import { Request, Response } from 'express';
import { STREAKS_BASE_URL } from '../utils/constants';

@controller('/')
class Addons {
  @get('/skill-badges')
  async getSkillBadges(req: Request, res: Response) {
    return res.status(200).json(skillBadges);
  }

  @get('/streaks-info')
  async getStreaksThemes(req: Request, res: Response) {
    return res
      .status(200)
      .json({ base: STREAKS_BASE_URL, themes: streaksThemes });
  }
}
