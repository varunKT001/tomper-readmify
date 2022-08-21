import { controller, get } from '@varuntiwari/express-ts-decorators';
import { contributionThemes, skillBadges, streaksThemes } from '../data';
import { Request, Response } from 'express';
import { CONTRIBUTION_BASE_URL, STREAKS_BASE_URL } from '../utils/constants';

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

  @get('/contribution-info')
  async getContributionThemes(req: Request, res: Response) {
    return res
      .status(200)
      .json({ base: CONTRIBUTION_BASE_URL, themes: contributionThemes });
  }
}
