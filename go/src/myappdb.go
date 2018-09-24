	package main

import (
   "fmt"
   "github.com/gin-contrib/cors"                        // Why do we need this package?
   "github.com/gin-gonic/gin"
   "github.com/jinzhu/gorm"
   _ "github.com/jinzhu/gorm/dialects/sqlite"           // If you want to use mysql or any other db, replace this line
)


var db *gorm.DB
var err error

type User struct {
	ID uint `json:"id"`
	UserName string `json:"username"`
	EmailId string `json:"emailid"`
	Password string `json:"password"`
	Score int `json:"score"`
}

type Admin struct {
	ID uint `json:"id"`
	UserName string `json:"username"`
	EmailId string `json:"emailid"`
	Password string `json:"password"`
}

type Ques struct {
	ID uint `json:"id"`
	Question string `json:"question"`
	Op1 string `json:"op1"`
	Op2 string `json:"op2"`
	Op3 string `json:"op3"`
	Op4 string `json:"op4"`
	Genre string `json:"genre"`
	Ans string `json:"ans"`
}

func main() {
	db,err = gorm.Open("sqlite3","./user.db")
	if err != nil {
    	fmt.Println(err)
   	}
   	defer db.Close()

   	
   	
   	r := gin.Default()

   	r.POST("/user",CreateUser)
   	r.GET("/user/:username/:password", GetUser)
   	

   	r.POST("/admin",CreateAdmin)
   	r.GET("/admin/:username/:password",GetAdmin)

   	r.POST("/ques",CreateQues)
   	r.GET("/viewQuestions",ViewQuestions)

   	r.Use((cors.Default()))
   	r.Run(":8080")
}

func CreateUser(c *gin.Context){
	db.AutoMigrate(&User{})
	var user User
	c.BindJSON(&user)
	db.Create(&user)
	c.Header("access-control-allow-origin","*")
	c.JSON(200,user)
}

func CreateQues(c *gin.Context){
	db.AutoMigrate(&Ques{})
	var ques Ques
	c.BindJSON(&ques)
	db.Create(&ques)
	c.Header("access-control-allow-origin","*")
	c.JSON(200,ques)
}

func GetUser(c * gin.Context){
	db.AutoMigrate(&User{})
	username := c.Params.ByName("username")
	password := c.Params.ByName("password")
	var user User
	if err := db.Where("user_name = ? and password = ?",username,password).First(&user).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}else{
		c.Header("access-control-allow-origin","*")
		c.JSON(200,user)
	}
}

func ViewQuestions(c * gin.Context){
	db.AutoMigrate(&Ques{})
	var ques []Ques
	if err := db.Find(&ques).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}else{
		c.Header("access-control-allow-origin","*")
		c.JSON(200,ques)
	}
}


func CreateAdmin(c *gin.Context){
	db.AutoMigrate(&Admin{})
	var admin Admin
	c.BindJSON(&admin)
	db.Create(&admin)
	c.Header("access-control-allow-origin","*")
	c.JSON(200,admin)
}


func GetAdmin(c * gin.Context){
	db.AutoMigrate(&Admin{})
	username := c.Params.ByName("username")
	password := c.Params.ByName("password")
	var admin Admin
	if err := db.Where("user_name = ? and password = ?",username,password).First(&admin).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}else{
		c.Header("access-control-allow-origin","*")
		c.JSON(200,admin)
	}
}
 

