package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Todo struct {
	ID        primitive.ObjectID `json:"id" bson:"_id"`
	Completed bool               `json:"completed"`
	Body      string             `json:"body"`
}

var collection *mongo.Collection

func main() {
	fmt.Println("Hello world")
	//load the env file if not in production
	if os.Getenv("ENV") != "production" {
		err:= godotenv.Load(".env")
		if err!= nil {
			log.Fatal("Error loading.env file")
		}
	}

	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading.env file")
	}
	MONGODB_URI := os.Getenv("MONGO_URI")
	clientOptions := options.Client().ApplyURI(MONGODB_URI)
	client, err := mongo.Connect(context.Background(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}
	err = client.Ping(context.Background(), nil)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")

	collection = client.Database("golang-todo").Collection("todos")

	app := fiber.New()
	// app.Use(cors.New())
	// app.Use(cors.New(cors.Config{
	// 	AllowOrigins: "http://localhost:5173, http://localhost:3000",
	// 	AllowHeaders: "Origin, Content-Type, Accept",
	// }))

	if os.Getenv("ENV")=="production"{
		app.Static("/","./client/dist")
	}

	app.Get("/api/todos", getTodos)
	app.Post("/api/todos", createTodo)
	app.Patch("/api/todos/:id", updateTodo)
	app.Delete("/api/todos/:id", deleteTodo)

	PORT := os.Getenv("PORT")

	if PORT == "" {
		PORT = "5000"
	}

	log.Fatal(app.Listen("0.0.0.0:" + PORT))

	defer client.Disconnect(context.Background())

}

func getTodos(c *fiber.Ctx) error {
	var todos []Todo

	cursor, err := collection.Find(context.Background(), bson.M{})
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	defer cursor.Close(context.Background())
	for cursor.Next(context.Background()) {
		var todo Todo
		if err := cursor.Decode(&todo); err != nil {
			return err
		}
		todos = append(todos, todo)
	}

	return c.JSON(todos)
}

// func createTodo( c *fiber.Ctx) error {
// 	todo := new(Todo)
// 	if err:= c.BodyParser(todo); err!=nil {
// 		return err
// 	}
// 	if todo.Body == ""{
// 		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
//             "error": "Body is required",
//         })
// 	}
// 	insertResult, err := collection.InsertOne(context.Background(), todo)
// 	if err != nil {
// 		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
//             "error": err.Error(),
//         })
// 	}
// 	todo.ID = insertResult.InsertedID.(primitive.ObjectID)

// 	return c.Status(201).JSON(todo)

// }
func createTodo(c *fiber.Ctx) error {
	todo := new(Todo)
	if err := c.BodyParser(todo); err != nil {
		return err
	}

	if todo.Body == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Body is required",
		})
	}

	// Generate a new ObjectID for the todo
	todo.ID = primitive.NewObjectID()

	_, err := collection.InsertOne(context.Background(), todo)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(201).JSON(todo)
}

func updateTodo(c *fiber.Ctx) error {
	id := c.Params("id")
	objectID, err := primitive.ObjectIDFromHex(id)

	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid ID",
		})
	}

	filter := bson.M{"_id": objectID}
	update := bson.M{"$set": bson.M{"completed": true}}

	// Check the result of the update operation
	res, err := collection.UpdateOne(context.Background(), filter, update)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	fmt.Println(res)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{"success": true})
}

func deleteTodo(c *fiber.Ctx) error {
	id := c.Params("id")
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid ID",
		})
	}
	filter := bson.M{"_id": objectID}
	res, err := collection.DeleteOne(context.Background(), filter)
	fmt.Println(res)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{"success": true})

}
