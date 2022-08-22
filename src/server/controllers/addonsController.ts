import { controller, get } from '@varuntiwari/express-ts-decorators';
import {
  contributionThemes,
  profileViews,
  skillBadges,
  socialIcons,
  streaksThemes,
} from '../data';
import { Request, Response } from 'express';

@controller('/')
class Addons {
  @get('/skill-badges')
  async getSkillBadges(req: Request, res: Response) {
    return res.status(200).json(skillBadges);
  }

  @get('/streaks-info')
  async getStreaksThemes(req: Request, res: Response) {
    return res.status(200).json(streaksThemes);
  }

  @get('/contribution-info')
  async getContributionThemes(req: Request, res: Response) {
    return res.status(200).json(contributionThemes);
  }

  @get('/social-icons')
  async getSocialIcons(req: Request, res: Response) {
    return res.status(200).json(socialIcons);
  }

  @get('/profile-views')
  async getProfileViews(req: Request, res: Response) {
    return res.status(200).json(profileViews);
  }
}
