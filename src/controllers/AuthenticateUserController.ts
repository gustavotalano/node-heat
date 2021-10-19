import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { code } = request.body;

      const service = new AuthenticateUserService();
      const result = await service.execute(code);
  
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { AuthenticateUserController }
