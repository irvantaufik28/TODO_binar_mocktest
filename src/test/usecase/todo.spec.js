const todoUsecase = require('../../usecase/todo');
const mockTodo = require("../mock/todo");
let mockTodoResult = {};
let todoUC = null;

describe("Todo Test", () => {
    beforeEach(() => {
      mockTodoResult = {
        createTodo: jest.fn().mockReturnValue(mockTodo.todo),
        getAllTodoByUserId: jest.fn().mockReturnValue([mockTodo.todo]),
        getAllUnfinishedTodByUserId: jest.fn().mockReturnValue([mockTodo.todo]),
        getTodoById: jest.fn().mockReturnValue(mockTodo.todo),
        updateTodo: jest.fn().mockReturnValue(true),
        deleteTodo: jest.fn().mockReturnValue(true),
      };
  
       todoUC = new todoUsecase(mockTodoResult)
    });
    describe("Create TODO", () => {
    
    });
    describe("create", () => {
      test("should isSuccess = true statusCode 200, & data type Object", async () => {
        let res = await todoUC.createTodo(mockTodo.todo);
        expect(res.isSuccess).toBeTruthy();
        expect(res.statusCode).toEqual(200);
        expect(res.data).toHaveProperty("id");
        expect(res.data).toHaveProperty("title");
        expect(res.data).toHaveProperty("finish");
        expect(res.data).toHaveProperty("userId");
  
      });
    });
    describe("Get All todo by userID", () => {
        test("should isSuccess = true statusCode 200, & data type Array", async () => {
          let res = await todoUC.getAllTodoByUserId({userId:1});
          expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(Array.isArray( res.data)).toBeTruthy();
            expect(typeof res.data[0] === 'object').toBeTruthy();
            expect(res.data[0]).toHaveProperty('id');
            expect(res.data[0]).toHaveProperty('title');
            expect(res.data[0]).toHaveProperty('finish');
            expect(res.data[0]).toHaveProperty('userId');
    
        });
      });

      describe("Get All todo by userID", () => {
        test("should isSuccess = true statusCode 200, & data type Array", async () => {
          let res = await todoUC.getAllUnfinishedTodByUserId({userId:1});
          expect(res.isSuccess).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            expect(Array.isArray( res.data)).toBeTruthy();
            expect(typeof res.data[0] === 'object').toBeTruthy();
            expect(res.data[0]).toHaveProperty('id');
            expect(res.data[0]).toHaveProperty('title');
            expect(res.data[0]).toHaveProperty('finish');
            expect(res.data[0]).toHaveProperty('userId');
    
        });
      });

      describe("Get All todo by userID", () => {
        test("should isSuccess = true statusCode 200, & data type object", async () => {
          let res = await todoUC.getTodoById(1, {id:1});
          expect(res.isSuccess).toBeTruthy();
          expect(res.statusCode).toEqual(200);
          expect(res.data).toHaveProperty("id");
          expect(res.data).toHaveProperty("title");
          expect(res.data).toHaveProperty("finish");
          expect(res.data).toHaveProperty("userId");
    
        });
        test("should isSuccess = true statusCode 404, & data null", async () => {
            let res = await todoUC.getTodoById( 2,{id:1});
            expect(res.isSuccess).toBeFalsy();
            expect(res.statusCode).toEqual(404);
            expect(res.data).toEqual(null);
            expect(res.reason).toEqual("todo not found");
      
          });
      });
      describe("update todo by userID", () => {
        let todo = {
            id: 1,
            title: 'do test binar',
            finish: true,
            userId: 1,
        }
        test("should isSuccess = true statusCode 200, & data type object", async () => {
          let res = await todoUC.updateTodo(todo, 1);
          expect(res.isSuccess).toBeTruthy();
          expect(res.statusCode).toEqual(200);
          expect(res.data).toHaveProperty("id");
          expect(res.data).toHaveProperty("title");
          expect(res.data).toHaveProperty("finish");
          expect(res.data).toHaveProperty("userId");
    
        });
        test("should isSuccess = true statusCode 404, & data null", async () => {
           let todo = {
                id: 1,
                title: 'do test binar',
                finish: false,
                userId: 2,
            }
            let res = await todoUC.updateTodo( todo, mockTodo.todo);
            expect(res.isSuccess).toBeFalsy();
            expect(res.statusCode).toEqual(404);
            expect(res.data).toEqual(null);
            expect(res.reason).toEqual("todo not found");
      
          });
      });
  });
  