import 'dotenv/config';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import LoginInterface from '../interfaces/loginInterface';
import User from '../database/models/User';

const { JWT_SECRET } = process.env;

const newLogin = async (body: LoginInterface) => {
  const message = 'Invalid email or password';
  const { email, password } = body;
  const result = await User.findOne({ where: { email } });
  if (!result) return { type: 'error', message };
  const decrypted = bcrypt.compareSync(password as string, result.password);
  if (!decrypted) return { type: 'error', message };
  const { dataValues } = result;
  const token = jwt.sign({
    username: dataValues.username,
    role: dataValues.role,
    email: dataValues.email,
  }, JWT_SECRET || '', { expiresIn: '10d' });
  return { type: null, message: token };
};

export default {
  newLogin,
};
