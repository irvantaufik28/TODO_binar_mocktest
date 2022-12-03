require("dotenv").config();
const AuthUseCase = require("../usecase/auth");
const mockAtuh = require("./mock/auth");
const bycrpt = require("bcrypt");

let mockAuthResult = {};
let authUC = null;

describe("Auth Test", () => {
  beforeEach(() => {
    mockAuthResult = {
      register: jest.fn().mockReturnValue(mockAtuh.user),
      login: jest.fn().mockReturnValue(mockAtuh.user),
    };

    authUC = new AuthUseCase(mockAuthResult, bycrpt);
  });
  describe("Register", () => {
    test("should isSuccess = true statusCode 201, & data type Object", async () => {
      let res = await authUC.register(mockAtuh.user);
      expect(res.isSuccess).toBeTruthy();
      expect(res.statusCode).toEqual(201);
      expect(res.data).toHaveProperty("id");
      expect(res.data).toHaveProperty("name");
      expect(res.data).toHaveProperty("pin");
    });
  });
  describe("Login", () => {
    test("should isSuccess = true statusCode 200, & data type Object", async () => {
      let res = await authUC.login(mockAtuh.user);
      expect(res.isSuccess).toBeTruthy();
      expect(res.statusCode).toEqual(201);
      expect(res.data).toHaveProperty("id");
      expect(res.data).toHaveProperty("name");
      expect(res.data).toHaveProperty("pin");
    });
    test("should isSuccess = fale statusCode 404, & data type message user not available", async () => {
      mockAuthResult.login = jest.fn().mockReturnValue(null)
      let res = await authUC.login(mockAtuh.user);
      expect(res.isSuccess).toBeFalsy();
      expect(res.statusCode).toEqual(404);
      expect(res.reason).toEqual("user not available");;
    });
  });
});
