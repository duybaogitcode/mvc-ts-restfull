import HttpStatusCodes from '../constants/HttpStatusCodes';
import { generateError } from '../libs/handlers/errorsHandlers';

class AuthService {
  public async login() {
    try {
      const info = {
        age: 20,
        education: 'Fpt university',
      };

      const user = {
        name: 'duybao',
        info: info,
      };

      // const newUser = await prisma.users.create({
      //   data: {
      //     email: 'duybao@gmail.com',
      //     name: user.name,
      //   },
      // });

      return user;
    } catch (error) {
      console.log(error);
      throw generateError('Cannot create user', HttpStatusCodes.BAD_REQUEST);
    }
  }
}

export default new AuthService();
