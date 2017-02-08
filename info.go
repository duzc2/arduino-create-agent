package main

import (
	"github.com/facchinm/go-serial"
	"github.com/gin-gonic/gin"
)

func infoHandler(c *gin.Context) {
	c.JSON(200, gin.H{
		"version": version,
		"http":    "http://" + *requestAddress + port,
		"https":   "https://" + *requestAddress + portSSL,
		"ws":      "ws://" + *requestAddress + port,
		"wss":     "wss://"+*requestAddress + portSSL,
		"company": "nuoding",
	})
}

func pauseHandler(c *gin.Context) {
	go func() {
		ports, _ := serial.GetPortsList()
		for _, element := range ports {
			spClose(element)
		}
		*hibernate = true
		restart("")
	}()
	c.JSON(200, nil)
}
