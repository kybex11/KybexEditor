package main

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"log"
)

// App struct
type App struct {
	ctx context.Context
}

type LatestStruct struct {
	Latest string
}

type CurrentStruct struct {
	currentOpenedProject string
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) CheckLatestWorkspace() string {
	content, err := ioutil.ReadFile("./latest.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	var payload LatestStruct
	err = json.Unmarshal(content, &payload)
	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
	}

	return payload.Latest
}

func (a *App) CurrentProject() string {
	content, err := ioutil.ReadFile("./data.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	var payload CurrentStruct
	err = json.Unmarshal(content, &payload)
	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
	}

	return payload.currentOpenedProject
}
