package backend

import (
	"context"
	"fmt"
	"io/ioutil"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) OnStartup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) OnClose(ctx context.Context) {
	fmt.Printf("Closed!")
}

func (a *App) SaveTrackerConfig(configs string) {
	_ = ioutil.WriteFile("tracker.json", []byte(configs), 0644)
}
