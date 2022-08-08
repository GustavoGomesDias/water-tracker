package backend

import (
	"context"
	"fmt"
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

func (a *App) OnClose() {
	return a.ctx.Done()
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// Greet2 returns a greeting for the given name
func (a *App) Greet2(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
