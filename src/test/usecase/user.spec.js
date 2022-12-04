require("dotenv").config();
const AuthUseCase = require("../../usecase/auth");
const mockAtuh = require("../mock/auth");
let mockAuthResult = {};
let authUC = null;

describe("Auth Test", () => {
  beforeEach(() => {
    mockAuthResult = {
      login: jest.fn().mockReturnValue(mockAtuh.user),
    };

    const token = jest.fn().mockReturnValue(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJpZCI6MiwibmFtZSI6ImN1c3RvbWVyIiwidXNlcm5hbWUiOiJjdXN0b21lciIsImVtYWlsIjoiY3VzdG9tZX
    JuQG1haWwuY29tIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE2NjY1Njk0ODgsImV4cCI6MTY2NjU5MTA4OH0.
    vtMW_4uev15R141j_MNIru9nbi1uLGu1swNtfm5-19M`)

    authUC = new AuthUseCase(mockAuthResult, token);
  });
  describe("Register", () => {
  
  });
  describe("Login", () => {
    test("should isSuccess = true statusCode 200, & data type Object", async () => {
      let res = await authUC.login(mockAtuh.user);
      expect(res.isSuccess).toBeTruthy();
      expect(res.statusCode).toEqual(200);
      expect(res.data).toHaveProperty("id");
      expect(res.data).toHaveProperty("name");

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
