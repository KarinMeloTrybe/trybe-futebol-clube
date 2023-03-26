import * as sinon from 'sinon';
import * as chai from 'chai';
import * as bcrypt from 'bcryptjs';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from '../database/models/User';
import { Response } from 'superagent';
import userMock from './user.mock';
import loginMock from './login.mock';
chai.use(chaiHttp);
const { expect } = chai;

describe('Teste se é possível realizar o login com sucesso', () => {
  let chaiHttpResponse: Response;
  it('Caso de login com sucesso', async () => {
    sinon.stub(User, "findOne").resolves({ ...userMock.correctUser } as User);
    sinon.stub(bcrypt, "compare").resolves(true);
    chaiHttpResponse = await chai.request(app).post('/login').send(loginMock);
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.haveOwnProperty('token');
  });
});